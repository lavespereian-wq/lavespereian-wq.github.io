$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
//createPlatform(x, y, width, height)
createPlatform(300, 700, 100, 10)

createPlatform(620, 570, 100, 10)

createPlatform(975, 460, 100, 10)

createPlatform(610, 400, 100, 10)

createPlatform(310, 400, 20, 10, "gray", 100, 400, 3,)





    // TODO 3 - Create Collectables
//createCollectable("type", xPos, yPos, gravityNum, bounceNum Between 0 and .99)
//type can be any of these. In "". database diamond grace kennedi max steve
createCollectable("diamond", 270, 360, 0, 0,     )


    
    // TODO 4 - Create Cannons
//createCannon(wallLocation, position, timeBetweenShots, width, height)
createCannon("top", 550, 700)
createCannon("right", 350, 700)
createCannon("top", 900, 700)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
