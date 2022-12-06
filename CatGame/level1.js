class level1 extends Phaser.Scene {
  constructor() {
    super({
      key: "level1",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world1", "assets/livingroom2.tmj");

    // Step 2 : Preload any images here
    this.load.image("genericING", "assets/1_Generic_32x32.png");
    this.load.image("basementING", "assets/14_Basement_32x32.png");
    this.load.image("livingroom", "assets/2_LivingRoom_32x32.png");
    this.load.image("pipoyaING", "assets/pipoya.png");

    // load audios
    this.load.audio("collect", "assets/sound_effects/collectcoin.mp3");
    this.load.audio("loose", "assets/sound_effects/loose_life.mp3");
    this.load.audio("yay", "assets/sound_effects/yay.mp3");
    this.load.audio("game1", "assets/sound_effects/level1.mp3");

  }

  create() {
    console.log("*** world scene");

    // Call to update inventory
    this.time.addEvent({
      delay: 500,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });

  //sound effects
    this.collectSnd = this.sound.add("collect");
    this.looseSnd = this.sound.add("loose");
    this.yaySnd = this.sound.add("yay");
    this.game1Snd = this.sound.add("game1");


    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world1" });

    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let floorTiles = map.addTilesetImage("pipoya","pipoyaING");
    let wallTiles = map.addTilesetImage("LivingRoom", "livingroom");
    let carpetTiles = map.addTilesetImage("basement", "basementING");
    let furnitureTiles = map.addTilesetImage("generic", "genericING");


    // Step 5  create an array of tiles
 ;
    let tilesArray = [
      floorTiles, wallTiles, carpetTiles, furnitureTiles
    ]

    // Step 6  Load in layers by layer

    this.floorLayer = map.createLayer("floorLayer",tilesArray,0,0);
    this.carpetLayer = map.createLayer("carpetLayer",tilesArray,0,0);
    this.wallLayer = map.createLayer("wallLayer",tilesArray,0,0);
    this.furnitureLayer = map.createLayer("furnitureLayer",tilesArray,0,0);

  
  // Load object from tilemap
    // heart1
    var heart1 = map.findObject("objectlayer", (obj) => obj.name === "heart1");
    this.heart1 = this.physics.add.sprite(heart1.x, heart1.y, 'heart1').play('heartAnim').setScale(0.8);
    this.heart1.body.setSize(this.heart1.width*0.7, this.heart1.height*0.5)

    // heart2
    var heart2 = map.findObject("objectlayer", (obj) => obj.name === "heart2");
    this.heart2 = this.physics.add.sprite(heart2.x, heart2.y, 'heart2').play('heartAnim').setScale(0.8);
    this.heart2.body.setSize(this.heart2.width*0.7, this.heart2.height*0.5)

    // heart3
    var heart3 = map.findObject("objectlayer", (obj) => obj.name === "heart3");
    this.heart3 = this.physics.add.sprite(heart3.x, heart3.y, 'heart3').play('heartAnim').setScale(0.8)
    this.heart3.body.setSize(this.heart3.width*0.7, this.heart3.height*0.5)


    // lizard collect
    this.lizard01 = this.add.sprite(300,50, "lizard").setScrollFactor(0).setVisible(false);
    
    // enemy
    this.robot = this.physics.add.sprite(380, 180, 'robot').play('robotAnim');
    this.robot.body.setSize(this.robot.width*0.7, this.robot.height*0.5);
    

      // lizard tweening
      this.time.addEvent({
        delay: 0,
        callback: this.moveRightLeft,
        callbackScope: this,
        loop: false,
      });

    // lizard
    this.lizard1 = this.physics.add.sprite(380, 844,'lizard').play('lizardAnim').setScale(0.7)

   
  // main player
  this.player = this.physics.add.sprite(550, 400, 'player');
  window.player = this.player

 

  // What will collider witg what layers
  this.wallLayer.setCollisionByExclusion(-1, true) 
  this.physics.add.collider(this.wallLayer, this.player);
  this.physics.add.collider(this.wallLayer, this.robot);

  this.furnitureLayer.setCollisionByExclusion(-1, true) 
  this.physics.add.collider(this.furnitureLayer, this.player);
  this.physics.add.collider(this.furnitureLayer, this.robot);

  // player stay within map
  this.physics.world.bounds.width = this.floorLayer.width
  this.physics.world.bounds.height = this.floorLayer.height
  this.player.setCollideWorldBounds(true);
  // player resize
  this.player.body.setSize(this.player.width*0.7, this.player.height*0.7)

        

    // Add time event / movement here
      // overlap1
      this.physics.add.overlap(this.heart1, this.player, collectHeart, null, this);
      this.physics.add.overlap(this.heart2, this.player, collectHeart, null, this);
      this.physics.add.overlap(this.heart3, this.player, collectHeart, null, this);

    // overlap 2 robot
      this.physics.add.overlap(this.robot, this.player, robotcaught, null, this);

    // overlap 3 lizard
    this.physics.add.overlap(this.lizard1, this.player, collectLizard, null, this);

    // camera follow player
    this.cameras.main.startFollow(this.player);

    // var spaceDown = this.input.keyboard.addKey('SPACE');
        
    //     spaceDown.on('down', function(){
    //     console.log("Spacebar pressed, goto winningScene");
    //     this.scene.start("winningScene");
    //     }, this );

    //   var bDown = this.input.keyboard.addKey('B');
    //   bDown.on('down', function(){
    //     console.log("B pressed (reload game)");
    //         this.scene.start("gameover1");
    //     }, this );

        // start another scene in parallel
        this.scene.launch("showInventory");

  } /////////////////// end of create //////////////////////////////

  update() {

    // enemy follow after player
    this.physics.moveToObject( this.robot, this.player, 380, 3000);

    if (this.player.y > 878 && this.player.y < 913 && this.player.x > 566 && this.player.x < 617) {
      console.log("Jump to winningScene")
      this.levelwin()
      
      }

    this.cursors = this.input.keyboard.createCursorKeys();

    if (this.cursors.left.isDown)
    {
        console.log("left")
        this.player.setVelocityX(-160);
        this.player.anims.play('leftplayer', true);
    }
    else if (this.cursors.right.isDown)
    {
        console.log("right")
        this.player.setVelocityX(160);
        this.player.anims.play('rightplayer', true);
    }
    else if (this.cursors.up.isDown)
    {
        this.player.setVelocityY(-160);
        this.player.anims.play('upplayer', true);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.setVelocityY(160);
        this.player.anims.play('downplayer', true);
    }
    else
    {
        this.player.setVelocity(0);
        this.player.stop();
    }


     
  } /////////////////// end of update //////////////////////////////

  // function to level 2
  level2(player, tile){
    console.log("level2 function")
    this.scene.start("level2")
  }

  // function to jump to winning scene
  levelwin(){
    console.log("level 1 success")

    if(window.heart == 3 && window.lizard == 1){
      this.scene.start("winningScene");
    } else if (window.heart == 4 && window.lizard == 1){
      this.scene.start("winningScene");
    }
  }

  moveDownUp() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.robot,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 2000,
      tweens: [
        {
          y: 400,
        },
        {
          y: 180,
        },
      ],
    });
  }

  moveRightLeft() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.lizard1,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 540,
        },
        {
          x: 380,
        },
      ],
    });
  }
} //////////// end of class world ////////////////////////
