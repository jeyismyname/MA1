class preload extends Phaser.Scene {
  constructor() {
    super("preload");

    // Put global variable here
  }

  preload() {

    // player
    this.load.spritesheet('player', 'assets/player_2.1.png', {frameWidth: 64, frameHeight: 64});

    // heart
    this.load.spritesheet('heart', 'assets/heart.png',{ frameWidth:64, frameHeight:64 });

    // enemy anim
    this.load.spritesheet('robot','assets/roomba.png',{ frameWidth:64, frameHeight:64 });

    // lizard Aim
    this.load.spritesheet('lizard','assets/lizard.png',{ frameWidth:64, frameHeight:64 });

     // snacks anim
     this.load.spritesheet('snacks', 'assets/snacks.png',{ frameWidth:64, frameHeight:64 });

     // enemy anim
     this.load.spritesheet('dad','assets/dad.png',{ frameWidth:64, frameHeight:64 });

     // roach anim
    this.load.spritesheet('roach', 'assets/cockcroach.png',{ frameWidth:64, frameHeight:64 });

    // stray cat anim
    this.load.spritesheet('straycat','assets/stray.png',{ frameWidth:64, frameHeight:64 });

    // puddle sprite
    this.load.spritesheet('puddles','assets/puddle.png',{ frameWidth:64, frameHeight:64 });
  }

  create() {
    console.log("*** preload scene");

    // Player animation
    this.anims.create({
      key: 'leftplayer',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: 'upplayer',
      frames: this.anims.generateFrameNumbers('player', { start: 3, end: 6 }),
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: 'rightplayer',
      frames: this.anims.generateFrameNumbers('player', { start: 10, end: 12 }),
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: 'downplayer',
      frames: this.anims.generateFrameNumbers('player', { start: 7, end: 9 }),
      frameRate: 5,
      repeat: -1
});
  

  //add heart animation
  this.anims.create({
  key: "heartAnim",
  frames: this.anims.generateFrameNumbers("heart", { start: 0, end: 2 }),
  frameRate: 3,
  repeat: -1,
  });
  
  // enemy animation
  this.anims.create({
    key: "robotAnim",
    frames: this.anims.generateFrameNumbers("robot", { start: 0, end: 1 }),
    frameRate: 3,
    repeat: -1,
    });
  
  // lizard animation
  this.anims.create({
      key: "lizardAnim",
      frames: this.anims.generateFrameNumbers("lizard", { start: 0, end: 1 }),
      frameRate: 3,
      repeat: -1,
      });

  
    //add snacks anim
    this.anims.create({
      key: "snacksAnim",
      frames: this.anims.generateFrameNumbers("snacks", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
      });
  
    // enemy animation
    this.anims.create({
      key: "dadAnim",
      frames: this.anims.generateFrameNumbers("dad", { start: 0, end: 3 }),
      frameRate: 1,
      repeat: -1,
      });

    //add cockroach anim
    this.anims.create({
      key: "roachAnim",
      frames: this.anims.generateFrameNumbers("roach", { start: 0, end: 1 }),
      frameRate: 3,
      repeat: -1,
      });
  
    // enemy puddled animation
    this.anims.create({
      key: "puddleAnim",
      frames: this.anims.generateFrameNumbers("puddles", { start: 0, end: 1 }),
      frameRate: 3,
      repeat: -1,
      });
 

// Check for spacebar or any key here
var spaceDown = this.input.keyboard.addKey('SPACE');

// On spacebar event, call the world scene        
spaceDown.on('down', function () {
    console.log('Jump to level1 scene');

    this.scene.start('level1',
        // Optional parameters
        {

        }
    );
}, this);


  }
}
