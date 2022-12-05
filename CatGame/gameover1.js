class gameover1 extends Phaser.Scene {
  constructor() {
    super({
      key: "gameover1",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    
  //  music
  this.load.audio("gameover","assets/sound_effects/game_over.mp3");

  }

  create() {
    console.log("*** game over scene");

    this.music = this.sound
    .add("gameover",{
        loop : false,
    })

    this.gameover = this.music;

    this.music.play();

    window.heart = 1;

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "world1" });

    // bg image
    this.add.sprite(400,400,"loose");

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, restart game     
        spaceDown.on('down', function () {
            console.log('Jump to level1 scene');

            this.scene.start('level1',
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
