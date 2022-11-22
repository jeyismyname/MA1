var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 40 * 20,
    height: 40 * 20,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, main, intro1, intro2, intro3, winningScene, winningScene2, winningScene3, level1,
        level2, level3, ending_win, room1]
};

var game = new Phaser.Game(config);