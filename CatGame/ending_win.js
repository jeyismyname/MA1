class ending_win extends Phaser.Scene {
  constructor() {
    super({
      key: "ending_win",
    });

    // Put global variable here
  }

  preload() {
 
  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "world1" });

    // bg image
    this.add.sprite(400,400,"ending").setScale(2);


   // player
   this.player = this.physics.add.sprite(390, 500, 'player').play('upplayer').setScale(4);

    
        // // Check for spacebar or any key here
        // var spaceDown = this.input.keyboard.addKey('SPACE');

        // // On spacebar event, call the world scene        
        // spaceDown.on('down', function () {
        //     console.log('Jump to preload scene');

        //     this.scene.start('preload',
        //         // Optional parameters
        //         {

        //         }
        //     );
        // }, this)
 
  } /////////////////// end of create //////////////////////////////

  update() {

  } /////////////////// end of update //////////////////////////////

} //////////// end of class world ////////////////////////
