class ending_win extends Phaser.Scene {
  constructor() {
    super({
      key: "ending_win",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    
   

  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "world1" });

    // bg image
    this.add.sprite(400,400,"intros").setScale(10);


   // player
   this.player = this.physics.add.sprite(390, 400, 'player').play('upplayer').setScale(3);

     // text
     this.add.text(270,120, 'Complete!' , { font: '32px Fipps', fill: '#000000'});
     this.add.text(180,600, 'Now Omi can sleep' , { font: '30px Fipps', fill: '#96450f'});

    
        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to preload scene');

            this.scene.start('preload',
                // Optional parameters
                {

                }
            );
        }, this)
 
  } /////////////////// end of create //////////////////////////////

  update() {


     
  } /////////////////// end of update //////////////////////////////

  // function to level 2
  // level2(player, tile){
  //   console.log("level2 function")
  //   this.scene.start("level2")
  // }

} //////////// end of class world ////////////////////////
