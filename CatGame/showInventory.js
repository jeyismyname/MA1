class showInventory extends Phaser.Scene {
  constructor() {
    super({
      key: "showInventory",
      active: false
    });

  }

  // incoming data from other scene
  init(data) {
    this.player = data.player
    this.inventory = data.inventory
}

create(){

     console.log('showInventory');

    this.heart01 = this.add.sprite(50,50,"heart").play('heartAnim').setScrollFactor(0).setVisible(false);
    this.heart02 = this.add.sprite(120,50,"heart").play('heartAnim').setScrollFactor(0).setVisible(false);
    this.heart03 = this.add.sprite(190,50,"heart").play('heartAnim').setScrollFactor(0).setVisible(false);

     // Recv an event, call the method
     this.events.on('inventory', this.updateInventory, this)
}
///////////////end of create//////////////////////

update(){
}

updateInventory(data) {
  console.log('Received event inventory', data)

  switch ( data.heart ) {

    case 4: 
          this.heart01.setVisible(true)
          this.heart02.setVisible(true)
          this.heart03.setVisible(true)
          break; 
    case 3: 
         this.heart01.setVisible(true)
         this.heart02.setVisible(true)
         this.heart03.setVisible(true)
         break;

     case 2:
         this.heart01.setVisible(true)
         this.heart02.setVisible(true)
         this.heart03.setVisible(false)
         break;

     case 1:
         this.heart01.setVisible(true)
         this.heart02.setVisible(false)
         this.heart03.setVisible(false)
         break;
      
     case 0:
         this.heart01.setVisible(false)
         this.heart02.setVisible(false)
         this.heart03.setVisible(false)
         break;    

     default:
     break;
 }
}
} //////////// end of class world ////////////////////////
