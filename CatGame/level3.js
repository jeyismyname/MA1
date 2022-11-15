class level3 extends Phaser.Scene {
  constructor() {
    super({
      key: "level3",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    this.load.tilemapTiledJSON("world3", "assets/garden.tmj");

    // Step 2 : Preload any images here
    this.load.image("gardenING", "assets/pipoya.png");
    this.load.image("treesING", "assets/trees-green.png");
    

  }

  create() {
    console.log("*** level3 scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "world3" });

    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let groundTiles = map.addTilesetImage("garden","gardenING");
    let treeTiles = map.addTilesetImage("trees","treesING");
    
    

    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];
    let tilesArray = [
      groundTiles, treeTiles
    ]

    // Step 6  Load in layers by layer

    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.treeLayer = map.createLayer("treeLayer",tilesArray,0,0);
    this.plantLayer = map.createLayer("plantLayer",tilesArray,0,0);
    this.houseLayer = map.createLayer("houseLayer",tilesArray,0,0);

    //roach1
    var cockroach1 = map.findObject("objectLayer1", (obj) => obj.name === "cockroach1");
    this.cockroach1 = this.physics.add.sprite(cockroach1.x, cockroach1.y, 'cockroach1').play('roachAnim');

    //roach2
    var cockroach2 = map.findObject("objectLayer1", (obj) => obj.name === "cockroach2");
    this.cockroach2 = this.physics.add.sprite(cockroach2.x, cockroach2.y, 'cockroach2').play('roachAnim');

    //roach3
    var cockroach3 = map.findObject("objectLayer1", (obj) => obj.name === "cockroach3");
    this.cockroach3 = this.physics.add.sprite(cockroach3.x, cockroach3.y, 'cockroach3').play('roachAnim');

    
      // puddle 1
    var puddle_1 = map.findObject("enemyLayerP", (obj) => obj.name === "puddle_1");
    this.puddle_1 = this.physics.add.sprite(puddle_1.x, puddle_1.y, 'puddle_1').play('puddleAnim');
    this.puddle_1.body.setSize(this.puddle_1.width*0.7, this.puddle_1.height*0.5)

    // puddle 2
    var puddle_2 = map.findObject("enemyLayerP", (obj) => obj.name === "puddle_2");
    this.puddle_2 = this.physics.add.sprite(puddle_2.x, puddle_2.y, 'puddle_2').play('puddleAnim');
    this.puddle_2.body.setSize(this.puddle_2.width*0.7, this.puddle_2.height*0.5)

    // puddle 3
    var puddle_3 = map.findObject("enemyLayerP", (obj) => obj.name === "puddle_3");
    this.puddle_3 = this.physics.add.sprite(puddle_3.x, puddle_3.y, 'puddle_3').play('puddleAnim');
    this.puddle_3.body.setSize(this.puddle_3.width*0.7, this.puddle_3.height*0.5)

    // puddle 4
    var puddle_4 = map.findObject("enemyLayerP", (obj) => obj.name === "puddle_4");
    this.puddle_4 = this.physics.add.sprite(puddle_4.x, puddle_4.y, 'puddle_4').play('puddleAnim');
    this.puddle_4.body.setSize(this.puddle_4.width*0.7, this.puddle_4.height*0.5)

    // puddle 5
    var puddle_5 = map.findObject("enemyLayerP", (obj) => obj.name === "puddle_5");
    this.puddle_5 = this.physics.add.sprite(puddle_5.x, puddle_5.y, 'puddle_5').play('puddleAnim');
    this.puddle_5.body.setSize(this.puddle_5.width*0.7, this.puddle_5.height*0.5)

  
  // main player
  this.player = this.physics.add.sprite(206, 247, 'player');

  // What will collider witg what layers
  this.treeLayer.setCollisionByExclusion(-1, true) 
  this.physics.add.collider(this.treeLayer, this.player);

  this.houseLayer.setCollisionByExclusion(-1, true) 
  this.physics.add.collider(this.houseLayer, this.player);

  // player stay within map
  this.physics.world.bounds.width = this.groundLayer.width
  this.physics.world.bounds.height = this.groundLayer.height
  this.player.setCollideWorldBounds(true);

  // player resize
  this.player.body.setSize(this.player.width*0.7, this.player.height*0.7)

  
  // this.time.addEvent({
  //   delay: 0,
  //   callback: this.moveRightLeft,
  //   callbackScope: this,
  //   loop: false,
  // });

  // enemy movements
  this.straycat = this.physics.add.sprite(880, 300, 'straycat');
    

    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // camera follow player
    this.cameras.main.startFollow(this.player);
     // player stay within map
    
    this.player.setCollideWorldBounds(true);

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    spaceDown.on('down', function(){
    console.log("Spacebar pressed, goto main");
    this.scene.start("main");
    }, this );

    var bDown = this.input.keyboard.addKey('B');
    bDown.on('down', function(){
      console.log("B pressed (previous game)");
          this.scene.start("level2");
      }, this );
  } /////////////////// end of create //////////////////////////////

  update() {

    // enemy follow after player
    this.physics.moveToObject( this.straycat, this.player, 880, 2000);

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

  moveRightLeft() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.straycat,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 750,
        },
        {
          x: 880,
        },
      ],
    });
  }
} //////////// end of class world ////////////////////////
