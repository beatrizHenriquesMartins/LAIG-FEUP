/**
 * Pawn constructor
 * @param scene CGFscene where the component will be displayed
 * @param reader reader CGFXMLreader
 * @param player game player
  * @param pawnNumber pawn number 1 or 2
 */
function Pawn(scene, reader, player, pawnNumber) {
    CGFobject.call(this, scene);
    this.scene = scene;
    this.player = player;
    this.xPos = 0;
    this.zPos = 0;
    this.yPos = 0;
    this.pawnNumber = pawnNumber;

    let point1 = vec3.fromValues(0,0,0);
    let point2 = vec3.fromValues(0,0,0.5);
    let point3 = vec3.fromValues(0,0,0);
    let normalAniTime = 0.7;
    let normalAniControlPoints = [point1, point2];
    let normalAniId = 10;

    this.normalAnimation = new LinearAnimation(this.scene, normalAniId, normalAniTime, normalAniControlPoints);

    point1 = vec3.fromValues(0, 0, 1);
    point2 = vec3.fromValues(0, 0, 0.5);
    normalAniTime = 0.7;
    normalAniControlPoints = [point1, point2];
    normalAniId = 10;

    this.finalAnimation = new LinearAnimation(this.scene, normalAniId, normalAniTime, normalAniControlPoints);

    switch (player) {
        case 1:
            this.material = this.scene.scenario.player1Material;
            break;
        case 2:
            this.material = this.scene.scenario.player2Material;
            break;
        default:

    }

    this.pawn = new Cylinder(this.scene, 0.23, 0.23, 1, 20, 20);
    this.pawn = new Obj(this.scene,"img/chess_without_colours.obj");

    // CONSTANTS
    this.yDistance = 0.5;
    this.animationTime1 = 0.7;
    this.animationTime1First = 0.7;
    this.xOrZdistance = 0.8;

    this.animationTime2 = 1.4;
    this.animationTime2First = 1.4;
    this.xOrZdistance2 = 0.7;

    this.animationTime3 = 0.7;
    this.animationTimeFirst = 0.7;
    this.xOrZdistance3 = 0.7;

    this.animationId = 11;

};

Pawn.prototype = Object.create(CGFobject.prototype);
Pawn.prototype.constructor = Pawn;

/**
 * Displays Pawn
 */
Pawn.prototype.display = function() {

    this.scene.pushMatrix();
    this.scene.translate(this.xPos, this.yPos, this.zPos);
    this.scene.rotate(-Math.PI/2, 1, 0, 0);
    if (this.scene.game.player == this.player && this.scene.game.currentState == this.scene.game.state.SELECTING_PAWN) {
        this.normalAnimation.display();
    }
    if (this.scene.game.player == this.player && this.scene.game.chosenPawn == this.pawnNumber &&
        this.scene.game.currentState == this.scene.game.state.PAWN_ANIMATION) {
          this.finalAnimation.display();
    }
    this.scene.scale(0.03,0.03,0.03);
    this.material.apply();
    this.pawn.display();
    this.scene.popMatrix();

}

/**
 * Sets Pawn Animation Speed
 * @param x Speed
 */
Pawn.prototype.setAnimationsSpeed = function(x) {
    this.animationTime1 = this.animationTime1First/x;
    this.animationTime2 = this.animationTime2First/x;
    this.animationTime3 = this.animationTime3First/x;
}

/**
 * Sets Pawn X coordinate
 * @param x x position
 */
Pawn.prototype.setPawnXCoord = function(x) {
    this.xPos = x;
}

/**
 * Sets Pawn Z coordinate
 * @param z z position
 */
Pawn.prototype.setPawnZCoord = function(z) {
    this.zPos = z;
}

/**
 * Sets Pawn Y coordinate
 * @param y y position
 */
Pawn.prototype.setPawnYCoord = function(y) {
    this.yPos = y;
}

Pawn.prototype.updateTexCoords = function(s, t) {
}

/**
 * Sets Pawn Material
 */
Pawn.prototype.setMaterial = function() {
  if(this.player == 1)
    this.material = this.scene.scenario.player1Material;
  else this.material = this.scene.scenario.player2Material;
}

/**
 *  Pawn Update Function
 * @param deltaTime
 */
Pawn.prototype.update = function(deltaTime) {
    if (this.scene.game.player == this.player && this.scene.game.currentState == this.scene.game.state.SELECTING_PAWN) {
        this.normalAnimation.update(deltaTime);
    }

    if (this.scene.game.player == this.player && this.scene.game.chosenPawn == this.pawnNumber &&
        this.scene.game.currentState == this.scene.game.state.PAWN_ANIMATION) {
        this.finalAnimation.update(deltaTime);
        if (this.finalAnimation.over) {
            this.scene.game.currentState = this.scene.game.state.UPDATE_BOARD_WITH_SERVER_BOARD;
            this.finalAnimation.over = false;
        }
    }

}

/**
 *  Sets Pawn Final Animation
 * @param direction direction of Animation
 */
Pawn.prototype.setFinalAnimation = function(direction){

  let point1,point2,point3,point4,point5;
  let finalAniTime;
  let finalAniControlPoints;

  if(direction == "b1"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(0, -this.xOrZdistance, this.yDistance);
    point3 =vec3.fromValues(0, -2*this.xOrZdistance, 0)
    finalAniTime = this.animationTime1/ this.scene.Speed;;
    finalAniControlPoints = [point1, point2, point3];
  }
  else if(direction == "t1"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(0, this.xOrZdistance, this.yDistance);
    point3 =vec3.fromValues(0, 2*this.xOrZdistance, 0)
    finalAniTime = this.animationTime1/this.scene.Speed;;
    finalAniControlPoints = [point1, point2, point3];
  }
  else if(direction == "r1"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(this.xOrZdistance, 0, this.yDistance);
    point3 =vec3.fromValues(2*this.xOrZdistance, 0, 0)
    finalAniTime = this.animationTime1/this.scene.Speed;;
    finalAniControlPoints = [point1, point2, point3];
  }
  else if(direction == "l1"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(-this.xOrZdistance, 0, this.yDistance);
    point3 =vec3.fromValues(-2*this.xOrZdistance, 0, 0)
    finalAniTime = this.animationTime1/this.scene.Speed;;
    finalAniControlPoints = [point1, point2, point3];
  }
  else if(direction == "b2"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(0, -this.xOrZdistance2, this.yDistance);
    point3 =vec3.fromValues(0, -2*this.xOrZdistance2, 0)
    point4 = vec3.fromValues(0, -3*this.xOrZdistance2, this.yDistance);
    point5 = vec3.fromValues(0, -4*this.xOrZdistance2, 0);
    finalAniTime = this.animationTime2/this.scene.Speed;;
    finalAniControlPoints = [point1, point2, point3,point4,point5];
  }
  else if(direction == "t2"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(0, this.xOrZdistance2, this.yDistance);
    point3 =vec3.fromValues(0, 2*this.xOrZdistance2, 0)
    point4 = vec3.fromValues(0, 3*this.xOrZdistance2, this.yDistance);
    point5 = vec3.fromValues(0, 4*this.xOrZdistance2, 0);
    finalAniTime = this.animationTime2/this.scene.Speed;;
    finalAniControlPoints = [point1, point2, point3,point4,point5];
  }
  else if(direction == "r2"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(this.xOrZdistance2,0, this.yDistance);
    point3 =vec3.fromValues(2*this.xOrZdistance2,0, 0)
    point4 = vec3.fromValues(3*this.xOrZdistance2,0, this.yDistance);
    point5 = vec3.fromValues(4*this.xOrZdistance2,0, 0);
    finalAniTime = this.animationTime2/this.scene.Speed;;
    finalAniControlPoints = [point1, point2, point3,point4,point5];
  }
  else if(direction == "l2"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(-this.xOrZdistance2,0, this.yDistance);
    point3 =vec3.fromValues(-2*this.xOrZdistance2,0, 0)
    point4 = vec3.fromValues(-3*this.xOrZdistance2,0, this.yDistance);
    point5 = vec3.fromValues(-4*this.xOrZdistance2,0, 0);
    finalAniTime = this.animationTime2/this.scene.Speed;;
    finalAniControlPoints = [point1, point2, point3,point4,point5];
  }
  else if(direction == "dbr"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(this.xOrZdistance3,-this.xOrZdistance3,this.yDistance);
    point3 = vec3.fromValues(2*this.xOrZdistance3,-2*this.xOrZdistance3,0);
    finalAniTime = this.animationTime3/this.scene.Speed;
    finalAniControlPoints = [point1, point2, point3];
  }
  else if(direction == "dbl"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(-this.xOrZdistance3,-this.xOrZdistance3,this.yDistance);
    point3 = vec3.fromValues(-2*this.xOrZdistance3,-2*this.xOrZdistance3,0);
    finalAniTime = this.animationTime3/this.scene.Speed;;
    finalAniControlPoints = [point1, point2, point3];
  }
  else if(direction == "dtr"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(this.xOrZdistance3,this.xOrZdistance3,this.yDistance);
    point3 = vec3.fromValues(2*this.xOrZdistance3,2*this.xOrZdistance3,0);
    finalAniTime = this.animationTime3/this.scene.Speed;;
    finalAniControlPoints = [point1, point2, point3];
  }
  else if(direction == "dtl"){
    point1 = vec3.fromValues(0, 0, 0);
    point2 = vec3.fromValues(-this.xOrZdistance3,this.xOrZdistance3,this.yDistance);
    point3 = vec3.fromValues(-2*this.xOrZdistance3,2*this.xOrZdistance3,0);
    finalAniTime = this.animationTime3/this.scene.Speed;
    finalAniControlPoints = [point1, point2, point3];
  }

  this.finalAnimation = new ArchAnimation(this.scene,  this.animationId, finalAniTime, finalAniControlPoints);

}
