class main extends Phaser.Scene {

    constructor() {
        super({
            key: 'main'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here

        // Preload any images here

        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** main scene');

        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

        //this.music.play()
        //window.music = this.music


        // Add image and detect spacebar keypress
        this.add.sprite(400,400,"background1").setScale(10);
        this.add.sprite(420,350,"rules");

        // text
        this.add.text(250,80, 'Story Behind' , { font: '30px Fipps', fill: '#000000'});
        this.add.text(200,600, 'press space to continue!' , { font: '20px Fipps', fill: '#96450f'});

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


        // Create all the game animations here

    }


}