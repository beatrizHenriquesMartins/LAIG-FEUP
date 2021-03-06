/**
 * Cube constructor
 * @param scene CGFscene where the component will be displayed
 * @param reader reader CGFXMLreader
 * @param posZ cube z position
 * @param posX cube x position
 */
function Cube(scene, reader, posZ, posX) {
    CGFobject.call(this, scene);
    this.scene = scene;
    this.posZ = posZ;
    this.posX = posX;

    this.quad1 = new Rectangle(this.scene,0.5,0.5,-0.5,-0.5);
    this.quad2 = new Rectangle(this.scene,0.5,0.5,-0.5,-0.5);
    this.quad3 = new Rectangle(this.scene,0.5,0.5,-0.5,-0.5);
    this.quad4 = new Rectangle(this.scene,0.5,0.5,-0.5,-0.5);
    this.quad5 = new Rectangle(this.scene,0.5,0.5,-0.5,-0.5);
    this.quad6 = new Rectangle(this.scene,0.5,0.5,-0.5,-0.5);
};

Cube.prototype = Object.create(CGFobject.prototype);
Cube.prototype.constructor = Cube;

/**
 * Adds the base and the top of the Cube. Updates Cube's height
 */
Cube.prototype.display = function () {

    this.scene.pushMatrix();
    this.scene.translate(0,1,0);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.quad1.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,0.5,-0.5);
    this.quad2.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI,1,0,0);
    this.scene.translate(0,-0.5,-0.5);
    this.quad3.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0.5,0.5,0);
    this.scene.rotate(270 * Math.PI/180,0,1,0);
    this.quad4.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-0.5,0.5,0);
    this.scene.rotate(Math.PI/2,0,1,0);
    this.quad5.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(-Math.PI/2,1,0,0);
    this.quad6.display();
    this.scene.popMatrix();


}
/**
 * Returns cube's x coordinate
 * @param x x position
 */
Cube.prototype.getPosX = function () {
  return this.posX;
}

/**
 * Returns cube's z coordinate
 * @param z z position
 */
Cube.prototype.getPosZ = function () {
  return this.posZ;
}

Cube.prototype.updateTexCoords = function (s, t) {

}
