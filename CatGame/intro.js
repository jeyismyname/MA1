class intro extends Phaser.Scene {
  constructor() {
    super({
      key: "intro",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    this.load.tilemapTiledJSON("intro", "assets/livingroom2.tmj");

    // Step 2 : Preload any images here
    //this.load.image("building", "assets/Buildings32x32.png");
   

    // player animation
    this.load.spritesheet('player', 'assets/player_2.1.png', {frameWidth: 64, frameHeight: 64});


    // heart anim
    this.load.spritesheet('heart', 'assets/heart.png',{ frameWidth:64, frameHeight:64 });

    // enemy anim
    this.load.spritesheet('robot','assets/roomba.png',{ frameWidth:64, frameHeight:64 });

  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "world1" });

    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
   


    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];
   
    // Step 6  Load in layers by layer

    
    

    //add heart object
    this.anims.create({
      key: "heartAnim",
      frames: this.anims.generateFrameNumbers("heart", { start: 0, end: 2 }),
      frameRate: 3,
      repeat: -1,
      });
  
    // heart1
    var heart1 = map.findObject("objectlayer", (obj) => obj.name === "heart1");
    this.live1 = this.physics.add.sprite(heart1.x, heart1.y, 'heart1').play('heartAnim');
    this.live1.body.setSize(this.live1.width*0.7, this.live1.height*0.5)

    // heart2
    var heart2 = map.findObject("objectlayer", (obj) => obj.name === "heart2");
    this.live1 = this.physics.add.sprite(heart2.x, heart2.y, 'heart2').play('heartAnim');
    this.live1.body.setSize(this.live1.width*0.7, this.live1.height*0.5)

    // heart3
    var heart3 = map.findObject("objectlayer", (obj) => obj.name === "heart3");
    this.live1 = this.physics.add.sprite(heart3.x, heart3.y, 'heart3').play('heartAnim');
    this.live1.body.setSize(this.live1.width*0.7, this.live1.height*0.5)

    // enemy animation
    this.anims.create({
      key: "robotAnim",
      frames: this.anims.generateFrameNumbers("robot", { start: 0, end: 1 }),
      frameRate: 3,
      repeat: -1,
      });
    
      // roomba1
    var roomba1 = map.findObject("enemyLayer", (obj) => obj.name === "roomba1");
    this.enemy1 = this.physics.add.sprite(roomba1.x, roomba1.y, 'roomba1').play('robotAnim');
    this.enemy1.body.setSize(this.live1.width*0.7, this.live1.height*0.5)

   

    // Player animation
    this.anims.create({
      key: 'leftplayer',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
      frameRate: 5,
      repeat: -1
  });

  this.anims.create({
      key: 'upplayer',
      frames: this.anims.generateFrameNumbers('player', { start: 3, end: 6 }),
      frameRate: 5,
      repeat: -1
  });

  this.anims.create({
      key: 'rightplayer',
      frames: this.anims.generateFrameNumbers('player', { start: 10, end: 12 }),
      frameRate: 5,
      repeat: -1
  });

  this.anims.create({
      key: 'downplayer',
      frames: this.anims.generateFrameNumbers('player', { start: 7, end: 9 }),
      frameRate: 5,
      repeat: -1
  });
   
  // main player
  this.player = this.physics.add.sprite(100, 400, 'player');
  window.player = this.player

  // What will collider witg what layers
  this.wallLayer.setCollisionByExclusion(-1, true) 
  this.physics.add.collider(this.wallLayer, this.player);

  this.furnitureLayer.setCollisionByExclusion(-1, true) 
  this.physics.add.collider(this.furnitureLayer, this.player);

  // player stay within map
  this.player.setCollideWorldBounds(true);
  // player resize
  this.player.body.setSize(this.player.width*0.7, this.player.height*0.7)

        
    

    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // camera follow player
   
    // var spaceDown = this.input.keyboard.addKey('SPACE');
        
    //     spaceDown.on('down', function(){
    //     console.log("Spacebar pressed, goto level2");
    //     this.scene.start("level2");
    //     }, this );

    //   var bDown = this.input.keyboard.addKey('B');
    //   bDown.on('down', function(){
    //     console.log("B pressed (reload game)");
    //         this.scene.start("main");
    //     }, this );
  } /////////////////// end of create //////////////////////////////

  update() {

    if (this.player.y > 878 && this.player.y < 913 && this.player.x > 566 && this.player.x < 617) {
      console.log("Jump to level2")
      this.level2();
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
  // level2(player, tile){
  //   console.log("level2 function")
  //   this.scene.start("level2")
  // }

} //////////// end of class world ////////////////////////
