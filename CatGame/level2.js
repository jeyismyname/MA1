class level2 extends Phaser.Scene {
  constructor() {
    super({
      key: "level2",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    this.load.tilemapTiledJSON("world2", "assets/kitchen2.tmj");

    // Step 2 : Preload any images here
    this.load.image("pipoyaING", "assets/pipoya.png");
    this.load.image("bedroomING", "assets/4_Bedroom_32x32.png");
    this.load.image("genericING", "assets/1_Generic_32x32.png");
    this.load.image("grocerING", "assets/16_Grocery_store_32x32.png");
    this.load.image("hallING", "assets/13_Conference_Hall_32x32.png");
    this.load.image("kitchenING", "assets/12_Kitchen_32x32.png");
    this.load.image("toiletING", "assets/3_Bathroom_32x32.png");

    // load audios
    this.load.audio("collect", "assets/sound_effects/collectcoin.mp3");
    this.load.audio("loose", "assets/sound_effects/loose_life.mp3");
    this.load.audio("yay", "assets/sound_effects/yay.mp3");


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

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "world2" });

    //sound effects
    this.collectSnd = this.sound.add("collect");
    this.looseSnd = this.sound.add("loose");
    this.yaySnd = this.sound.add("yay");
    // this.complete = this.sound.add("complete");
     
    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let KfloorTiles = map.addTilesetImage("base","pipoyaING");
    let KwallTiles = map.addTilesetImage("kitchen", "kitchenING");
    let KcarpetTiles = map.addTilesetImage("toilet", "toiletING");map.addTilesetImage("grocer","grocerING");
    let KfurnitureTiles = map.addTilesetImage("genric", "genericING");
    let KobjectTiles = map.addTilesetImage("bedroom", "bedroomING");map.addTilesetImage("hall","hallING");
    
    


    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];
    let tilesArray = [
      KfloorTiles, KwallTiles, KcarpetTiles, KfurnitureTiles, KobjectTiles
    ]

    // Step 6  Load in layers by layer

    this.KfloorLayer = map.createLayer("KfloorLayer",tilesArray,0,0);
    this.KcarpetLayer = map.createLayer("KcarpetLayer",tilesArray,0,0);
    this.KwallLayer = map.createLayer("KwallLayer",tilesArray,0,0);
    this.KfurnitureLayer = map.createLayer("KfurnitureLayer",tilesArray,0,0);
    this.KobjectLayer = map.createLayer("KobjectLayer",tilesArray,0,0);

  
    // snacks1
    var fish01 = map.findObject("KobjectLayer", (obj) => obj.name === "Ksnacks1");
    this.fish01 = this.physics.add.sprite(fish01.x, fish01.y, 'Ksnacks1').play('snacksAnim');
    this.fish01.body.setSize(this.fish01.width*0.7, this.fish01.height*0.5)

    // snacks2
    var fish02 = map.findObject("KobjectLayer", (obj) => obj.name === "Ksnacks2");
    this.fish02 = this.physics.add.sprite(fish02.x, fish02.y, 'Ksnacks2').play('snacksAnim');
    this.fish02.body.setSize(this.fish02.width*0.7, this.fish02.height*0.5)

    // snacks3
    var fish03 = map.findObject("KobjectLayer", (obj) => obj.name === "Ksnacks3");
    this.fish03 = this.physics.add.sprite(fish03.x, fish03.y, 'Ksnacks3').play('snacksAnim');
    this.fish03.body.setSize(this.fish03.width*0.7, this.fish03.height*0.5)


      // this.time.addEvent({
      //   delay: 0,
      //   callback: this.moveRightLeft,
      //   callbackScope: this,
      //   loop: false,
      // });
    
      // dad
      this.dad = this.physics.add.sprite(150, 180, 'dad').setScale(1.5);
      this.dad.body.setSize(this.dad.width*0.5, this.dad.height*0.7);
      
   
  // main player
  this.player = this.physics.add.sprite(350, 400, 'player');
  window.player = this.player

  // What will collider witg what layers
  this.KwallLayer.setCollisionByExclusion(-1, true) 
  this.physics.add.collider(this.KwallLayer, this.player);
  this.physics.add.collider(this.KwallLayer, this.dad);

  this.KfurnitureLayer.setCollisionByExclusion(-1, true) 
  this.physics.add.collider(this.KfurnitureLayer, this.player);
  this.physics.add.collider(this.KfurnitureLayer, this.dad);

  // player stay within map
  this.physics.world.bounds.width = this.KfloorLayer.width
  this.physics.world.bounds.height = this.KfloorLayer.height
  this.player.setCollideWorldBounds(true);
  // player resize
  this.player.body.setSize(this.player.width*0.7, this.player.height*0.7)

    // Add time event / movement here

    // overlap1 fish
    this.physics.add.overlap(this.fish01, this.player, collectfish, null, this);
    this.physics.add.overlap(this.fish02, this.player, collectfish, null, this);
    this.physics.add.overlap(this.fish03, this.player, collectfish, null, this);

    // overlap2 dad
    this.physics.add.overlap(this.dad, this.player, dadcaught, null, this);
    

    // // lifes
    // this.heart01 = this.add.sprite(50,50,"heart").play('heartAnim').setScrollFactor(0).setVisible(true);
    // this.heart02 = this.add.sprite(120,50,"heart").play('heartAnim').setScrollFactor(0).setVisible(true);
    // this.heart03 = this.add.sprite(190,50,"heart").play('heartAnim').setScrollFactor(0).setVisible(true);

    //fish collect
    this.fish01 = this.add.sprite(600,50,"snacks").play('snacksAnim').setScrollFactor(0).setVisible(false);
    this.fish02 = this.add.sprite(670,50,"snacks").play('snacksAnim').setScrollFactor(0).setVisible(false);
    this.fish03 = this.add.sprite(740,50,"snacks").play('snacksAnim').setScrollFactor(0).setVisible(false);

    // camera follow player
    this.cameras.main.startFollow(this.player);

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto winningScene2");
        this.scene.start("winningScene2");
        }, this );

        var bDown = this.input.keyboard.addKey('B');
        bDown.on('down', function(){
          console.log("B pressed (previous game)");
              this.scene.start("level1");
          }, this );

           // start another scene in parallel
        this.scene.launch("showInventory");
  } /////////////////// end of create //////////////////////////////

  update() {

    // enemy follow after player
    this.physics.moveToObject( this.dad, this.player, 150, 2000);

    if (this.player.y > 566 && this.player.y < 617 && this.player.x > 670 && this.player.x < 694) {
    console.log("level 2 success")
    this.levelwin2();
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

  // function to jump to level3
  level3(player, tile){
    console.log("level3 function")
    this.scene.start("level3")
  }

  // winningScene2(player, tile){
  //   console.log("winningScene2 function")
  //   this.scene.start("winningScene2")
  // }

  levelwin2(){
    console.log("level 2 success")

    if(window.snacks == 3){
      this.scene.start("winningScene2");
    }
  }

  // overlap1(Kheart1, player){
  //   console.log("fish overlap player")
  //   // play collect sound
  //   this.collectSnd.play();
  //   Kheart1.disableBody( true, true);
  // }

  overlap2(dad, play){
    // play loose life sound
    this.looseSnd.play();
  }

  moveRightLeft() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.dad,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 5000,
      tweens: [
        {
          x: 100,
        },
        {
          x: 250,
        },
      ],
    });
  }
} //////////// end of class world ////////////////////////
