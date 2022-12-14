class winningScene extends Phaser.Scene {
  constructor() {
    super({
      key: "winningScene",
    });

    // Put global variable here
  }

  preload() {

  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world1" });

    // bg image
    this.add.sprite(400,400,"winning1");


    // heart anim
    this.heart = this.physics.add.sprite(200, 400, 'heart').play('heartAnim').setScale(3);
    this.heart = this.physics.add.sprite(400, 400, 'heart').play('heartAnim').setScale(3);
    this.heart = this.physics.add.sprite(600, 400, 'heart').play('heartAnim').setScale(3);

    //  // text
    //  this.add.text(180,120, 'Congradulations!' , { font: '32px Fipps', fill: '#000000'});
    //  this.add.text(200,600, 'press space to level 2!' , { font: '20px Fipps', fill: '#96450f'});

    
        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to intro 2 scene');

            this.scene.start('intro2',
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
