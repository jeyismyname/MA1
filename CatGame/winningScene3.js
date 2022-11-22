class winningScene3 extends Phaser.Scene {
  constructor() {
    super({
      key: "winningScene3",
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


    // heart anim
    this.heart = this.physics.add.sprite(200, 400, 'roach').play('roachAnim').setScale(3);
    this.heart = this.physics.add.sprite(400, 400, 'roach').play('roachAnim').setScale(3);
    this.heart = this.physics.add.sprite(600, 400, 'roach').play('roachAnim').setScale(3);

     // text
     this.add.text(180,120, 'Congratulations!' , { font: '32px Fipps', fill: '#000000'});
     this.add.text(200,600, 'press space to the end' , { font: '20px Fipps', fill: '#96450f'});

    
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

  // function to level 2
  // level2(player, tile){
  //   console.log("level2 function")
  //   this.scene.start("level2")
  // }

} //////////// end of class world ////////////////////////
