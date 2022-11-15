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


  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "world2" });

    
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
    var Kheart1 = map.findObject("KobjectLayer", (obj) => obj.name === "Ksnacks1");
    this.live1 = this.physics.add.sprite(Kheart1.x, Kheart1.y, 'Ksnacks1').play('snacksAnim');
    this.live1.body.setSize(this.live1.width*0.7, this.live1.height*0.5)

    // snacks2
    var Kheart2 = map.findObject("KobjectLayer", (obj) => obj.name === "Ksnacks2");
    this.live1 = this.physics.add.sprite(Kheart2.x, Kheart2.y, 'Ksnacks2').play('snacksAnim');
    this.live1.body.setSize(this.live1.width*0.7, this.live1.height*0.5)

    // snacks3
    var Kheart3 = map.findObject("KobjectLayer", (obj) => obj.name === "Ksnacks3");
    this.live1 = this.physics.add.sprite(Kheart3.x, Kheart3.y, 'Ksnacks3').play('snacksAnim');
    this.live1.body.setSize(this.live1.width*0.7, this.live1.height*0.5)


      // this.time.addEvent({
      //   delay: 0,
      //   callback: this.moveRightLeft,
      //   callbackScope: this,
      //   loop: false,
      // });
    
      // dad
      this.dad = this.physics.add.sprite(650, 180, 'dad').setScale(1.5);
      this.dad.body.setSize(this.dad.width*0.7, this.dad.height*0.7);
      
   
  // main player
  this.player = this.physics.add.sprite(100, 400, 'player');
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

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // camera follow player
    this.cameras.main.startFollow(this.player);

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto level3");
        this.scene.start("level3");
        }, this );

        var bDown = this.input.keyboard.addKey('B');
        bDown.on('down', function(){
          console.log("B pressed (previous game)");
              this.scene.start("level1");
          }, this );
  } /////////////////// end of create //////////////////////////////

  update() {

    // enemy follow after player
    this.physics.moveToObject( this.dad, this.player, 650, 2000);

    if (this.player.y > 566 && this.player.y < 617 && this.player.x > 670 && this.player.x < 694) {
    console.log("Jump to level3")
    this.level3();
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
          x: 650,
        },
      ],
    });
  }
} //////////// end of class world ////////////////////////
