

function updateInventory() {
  console.log("*** updateInventory()")
  // Emit events showInventory
  this.inventory = {}
  this.inventory.heart = window.heart
  

  console.log('*** updateInventory() Emit event', this.inventory)
  this.invEvent = (event, data) =>  { this.scene.get('showInventory').events.emit(event, data); }
  this.invEvent("inventory", this.inventory);
}

function robotcaught(robot, player) {
  console.log("robot caught player")
  // play loose sound
  this.looseSnd.play();
  robot.disableBody(true, true)

  window.heart--
  updateInventory.call(this)

  if (window.heart == 0){
    this.scene.start("gameover1");
  }
}

function collectHeart(heart, player){
  console.log("heart overlap player")
  // play collect sound
  this.collectSnd.play();
  heart.disableBody( true, true);

  window.heart++
  updateInventory.call(this)

}

function collectLizard(lizard, player){
    this.yaySnd.play();
    lizard.disableBody(true, true);
    
    window.lizard = window.lizard + 1;
    console.log("lizard1", window.lizard);

    if (window.lizard == 0){
      this.lizard01.setVisible(false);
    }else if (window.lizard == 1 ){
      this.lizard01.setVisible(true);
    }
}

function dadcaught(dad, player){
  console.log("dad caught player")

// play loose sound
this.looseSnd.play();
dad.disableBody(true, true)

window.heart--
updateInventory.call(this)

if (window.heart == 0){
  this.scene.start("gameover2");
}
}

function collectfish(snacks, player){
  console.log("collect fish")

  // play yay sound
  this.yaySnd.play();
  snacks.disableBody(true, true);
    
    window.snacks = window.snacks + 1;
    console.log("snacks", window.snacks);

    if (window.snacks == 0){
      this.fish01.setVisible(false);
      this.fish02.setVisible(false);
      this.fish03.setVisible(false);
    } else if (window.snacks == 1 ){
      this.fish01.setVisible(true);
      this.fish02.setVisible(false);
      this.fish03.setVisible(false);
    } else if (window.snacks == 2 ){
      this.fish01.setVisible(true);
      this.fish02.setVisible(true);
      this.fish03.setVisible(false);
    } else if (window.snacks == 3 ){
      this.fish01.setVisible(true);
      this.fish02.setVisible(true);
      this.fish03.setVisible(true);
    }

}

function collectbug(roach, player){
  console.log("collect bug")

  // play yay sound
  this.yaySnd.play();
  roach.disableBody(true, true);
    
    window.roach = window.roach + 1;
    console.log("roach", window.roach);

    if (window.roach == 0){
      this.bug01.setVisible(false);
      this.bug02.setVisible(false);
      this.bug03.setVisible(false);
    } else if (window.roach == 1 ){
      this.bug01.setVisible(true);
      this.bug02.setVisible(false);
      this.bug03.setVisible(false);
    } else if (window.roach == 2 ){
      this.bug01.setVisible(true);
      this.bug02.setVisible(true);
      this.bug03.setVisible(false);
    } else if (window.roach == 3 ){
      this.bug01.setVisible(true);
      this.bug02.setVisible(true);
      this.bug03.setVisible(true);
      this.scene.start("winningScene3");
    }

  }

  function puddlecaught(puddles, player){
    console.log("puddle caught player")

    // play sound
    this.splashSnd.play();
    puddles.disableBody(true, true);

    window.heart--
    updateInventory.call(this)

    if (window.heart == 0){
    this.scene.start("gameover3");
    }

  }

  function straycaught(straycat, player){
    console.log("stray cat caught player")

    // play sound
    this.looseSnd.play();
    straycat.disableBody(true, true);

    window.heart--
    updateInventory.call(this)

    if (window.heart == 0){
    this.scene.start("gameover3");
    }

  }

 
