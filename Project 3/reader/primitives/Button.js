function Button(scene, reader, player, type) {
  CGFobject.call(this, scene);
  this.scene = scene;
  this.player = player;
  this.type = type;

  this.b = new CGFappearance(this.scene);
  this.b.setAmbient(1.0,1,1,1);
  this.b.setDiffuse(1.0,1,1,1);
  this.b.setSpecular(1.0,1,1,1);
  this.b.setShininess(0);
  this.b.loadTexture("img/b.jpg");

  this.b2 = new CGFappearance(this.scene);
  this.b2.setAmbient(1.0,1,1,1);
  this.b2.setDiffuse(1.0,1,1,1);
  this.b2.setSpecular(1.0,1,1,1);
  this.b2.setShininess(0);
  this.b2.loadTexture("img/b.jpg");

  switch (player) {
    case 1:
    if(type == 1){
      this.xPos=-2;
      this.zPos=9;
      this.yPos=0.1;
      this.texture = this.b;
    }
    else{
      this.xPos=-4;
      this.zPos=9;
      this.yPos=0.1;
      this.texture = this.b2;
    }
      break;
    case 2:
    if(type == 1){
      this.xPos=15.5;
      this.zPos=9;
      this.yPos=0.1;
      this.texture = this.b;
    }
    else{
      this.xPos=17.5;
      this.zPos=9;
      this.yPos=0.1;
      this.texture = this.b2;
    }

    break;
    default:

}

  this.material = new CGFappearance(this.scene);
  this.material.setAmbient(1.0,1,1,1);
  this.material.setDiffuse(1.0,1,1,1);
  this.material.setSpecular(1.0,1,1,1);
  this.material.setShininess(0);

  //
  // this.yellowMaterial = new CGFappearance(this.scene);
  // this.yellowMaterial.setAmbient(1.0,1,1,1);
  // this.yellowMaterial.setDiffuse(1.0,1,1,1);
  // this.yellowMaterial.setSpecular(1.0,1,1,1);
  // this.yellowMaterial.setShininess(0);
  // this.yellowMaterial.loadTexture("img/2.jpg");
  //
  // switch (player) {
  //   case 1:
  //     this.material = this.orangeMaterial;
  //     break;
  //   case 2:
  //     this.material = this.yellowMaterial;
  //   break;
  //   default:
  //
  // }

  this.Button = new Cube(this.scene, this.scene.reader, null, null);
  this.rect = new Cube(this.scene, this.scene.reader, null, null);

};

Button.prototype = Object.create(CGFobject.prototype);
Button.prototype.constructor = Button;

Button.prototype.display = function () {

  this.scene.pushMatrix();
  this.material.apply();
  this.scene.scale(1,0.3,1);
  this.scene.translate(this.xPos,this.yPos,this.zPos);
  this.Button.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(this.xPos,this.yPos+0.25 ,this.zPos);
  this.scene.scale(0.8,0.01,0.8);
  this.texture.apply();
  this.rect.display();
  this.scene.popMatrix();

}

Button.prototype.setButtonXCoord = function (x) {
  this.xPos = x;
}

Button.prototype.setButtonZCoord = function (z) {
  this.zPos = z;
}

Button.prototype.setButtonYCoord = function (y) {
  this.yPos = y;
}

Button.prototype.updateTexCoords = function (s, t) {

}