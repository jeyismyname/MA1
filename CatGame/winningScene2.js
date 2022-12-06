class winningScene2 extends Phaser.Scene {
  constructor() {
    super({
      key: "winningScene2",
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
    this.add.sprite(400,400,"winning2");


    // heart anim
    this.heart = this.physics.add.sprite(200, 400, 'snacks').play('snacksAnim').setScale(3);
    this.heart = this.physics.add.sprite(400, 400, 'snacks').play('snacksAnim').setScale(3);
    this.heart = this.physics.add.sprite(600, 400, 'snacks').play('snacksAnim').setScale(3);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to intro 3 scene');

            this.scene.start('intro3',
                // Optional parameters
                {

                }
            );
        }, this)
 
  } /////////////////// end of create //////////////////////////////

  update() {
  
  } /////////////////// end of update //////////////////////////////

} //////////// end of class world ////////////////////////
