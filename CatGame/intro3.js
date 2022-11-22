class intro3 extends Phaser.Scene {
  constructor() {
    super({
      key: "intro3",
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

    // rules
    this.add.sprite(400,400,"rule_3");

    // heart anim
    this.heart = this.physics.add.sprite(280, 110, 'heart').play('heartAnim');
    this.heart = this.physics.add.sprite(280, 110, 'heart').play('heartAnim');

     // text
     this.add.text(320,80, 'Level 3' , { font: '32px Fipps', fill: '#000000'});
     this.add.text(200,600, 'press space to continue!' , { font: '20px Fipps', fill: '#96450f'});

    
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

  // function to level 2
  // level2(player, tile){
  //   console.log("level2 function")
  //   this.scene.start("level2")
  // }

} //////////// end of class world ////////////////////////
