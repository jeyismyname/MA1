class winningScene3 extends Phaser.Scene {
  constructor() {
    super({
      key: "winningScene3",
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
    this.add.sprite(400,400,"winning3");


    // heart anim
    this.heart = this.physics.add.sprite(200, 400, 'roach').play('roachAnim').setScale(3);
    this.heart = this.physics.add.sprite(400, 400, 'roach').play('roachAnim').setScale(3);
    this.heart = this.physics.add.sprite(600, 400, 'roach').play('roachAnim').setScale(3);
    
        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to ending scene');

            this.scene.start('ending_win',
                // Optional parameters
                {

                }
            );
        }, this)
 
  } /////////////////// end of create //////////////////////////////

  update() {
     
  } /////////////////// end of update //////////////////////////////

} //////////// end of class world ////////////////////////
