class main extends Phaser.Scene {

    constructor() {
        super({
            key: 'main'
        });

        // Put global variable here
    }

    preload() {

    }

    create() {

        console.log('*** main scene');

        // bg image and story
        this.add.sprite(400,400,"background1").setScale(10);
        this.add.sprite(400,400,"story");

         // player
      this.player = this.physics.add.sprite(640, 500, 'player').play('downplayer').setScale(2);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to intro1 scene');

            this.scene.start('intro1',
                // Optional parameters
                {

                }
            );
        }, this)

    }

}