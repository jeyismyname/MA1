class intro3 extends Phaser.Scene {
  constructor() {
    super({
      key: "intro3",
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
    this.add.sprite(400,400,"intros").setScale(10);

    // rules
    this.add.sprite(400,400,"rule_3");

    // heart anim
    this.heart = this.physics.add.sprite(270, 150, 'heart').play('heartAnim');
    
        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to level 3 scene');

            this.scene.start('level3',
                // Optional parameters
                {

                }
            );
        }, this)
 
  } /////////////////// end of create //////////////////////////////

  update() {
   
  } /////////////////// end of update //////////////////////////////

} //////////// end of class world ////////////////////////
