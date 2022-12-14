var game;
window.onload=function()
{

var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 40 * 20,
    height: 40 * 20,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#e8dbae',
    pixelArt: true,
    scene: [preload, main, intro1, intro2, intro3, winningScene, winningScene2, winningScene3, level1,
        level2, level3, ending_win, gameover1, room1, showInventory, gameover2, gameover3]
};

var game = new Phaser.Game(config);

window.key= 0;
window.heart= 1;
window.lizard = 0;
window.snacks = 0;
window.roach = 0;
}