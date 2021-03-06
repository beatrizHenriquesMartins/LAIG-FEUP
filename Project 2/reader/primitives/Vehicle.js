function Vehicle(scene, reader) {
    CGFobject.call(this, scene);
    this.scene = scene;
    this.reader = reader;
    var front = [
        [-0.019, -0.400, 0.216, 1],
        [-0.039, -0.405, 0.150, 1],
        [-0.048, -0.401, 0.166, 1],
        [-0.030, -0.408, 0.177, 1],
        [-0.053, -0.399, 0.166, 1],
        [-0.044, -0.402, 0.179, 1],

        [0.000, -1.000, 0.400, 1],
        [-1.000, -1.000, 0.400, 1],
        [-1.000, 1.000, 0.400, 1],
        [1.000, 1.000, 0.400, 1],
        [1.000, -1.000, 0.400, 1],
        [0.000, -1.000, 0.400, 1],

        [0.000, -1.000, 0.800, 1],
        [-1.000, -1.000, 0.800, 1],
        [-1.000, 1.000, 0.800, 1],
        [1.000, 1.000, 0.800, 1],
        [1.000, -1.000, 0.800, 1],
        [0.000, -1.000, 0.800, 1],

        [0.000, -1.000, 1.200, 1],
        [-1.000, -1.000, 1.200, 1],
        [-1.000, 1.000, 1.200, 1],
        [1.000, 1.000, 1.200, 1],
        [1.000, -1.000, 1.200, 1],
        [0.000, -1.000, 1.200, 1],

        [0.000, -1.000, 3.00, 1],
        [-1.000, -1.000, 3.00, 1],
        [-1.000, 1.000, 3.00, 1],
        [1.000, 1.000, 3.00, 1],
        [1.000, -1.000, 3.00, 1],
        [0.000, -1.000, 3.600, 1],

        [0.000, -1.000, 4.000, 1],
        [-1.000, -1.000, 4.000, 1],
        [-1.000, 1.000, 4.000, 1],
        [1.000, 1.000, 4.000, 1],
        [1.000, -1.000, 4.000, 1],
        [0.000, -1.000, 4.000, 1],
    ];

    var wingPoints1 = [
        [-0.006, 0.112, 0.0, 1],
        [0.000, 0.200, 0.05, 1],
        [0.000, 0.400, 0.1, 1],
        [0.000, 0.500, 0.05, 1],

        [0.500, 0.000, 0.0, 1],
        [0.500, 0.200, 0.05, 1],
        [0.500, 0.300, 0.1, 1],
        [0.500, 0.400, 0.05, 1],

        [1.000, 0.000, 0.0, 1],
        [1.000, 0.100, 0.05, 1],
        [1.000, 0.200, 0.1, 1],
        [1.000, 0.300, 0.05, 1],

        [1.276, 0.020, 0.0, 1],
        [1.500, 0.050, 0.05, 1],
        [1.500, 0.100, 0.1, 1],
        [1.500, 0.200, 0.05, 1]
    ];

    var wingPoints2 = [
        [-0.006, 0.112, 0.0, 1],
        [0.000, 0.200, -0.05, 1],
        [0.000, 0.400, -0.1, 1],
        [0.000, 0.500, -0.05, 1],

        [-0.500, 0.000, 0.0, 1],
        [-0.500, 0.200, -0.05, 1],
        [-0.500, 0.300, -0.1, 1],
        [-0.500, 0.400, -0.05, 1],

        [-1.000, 0.000, 0.0, 1],
        [-1.000, 0.100, -0.05, 1],
        [-1.000, 0.200, -0.1, 1],
        [-1.000, 0.300, -0.05, 1],

        [-1.276, 0.020, 0.0, 1],
        [-1.500, 0.050, -0.05, 1],
        [-1.500, 0.100, -0.1, 1],
        [-1.500, 0.200, -0.05, 1]
    ];

    var backPoints = [
        [-0.006, 0.112, 0.000, 1],
        [0.000, 0.200, 0.000, 1],
        [0.000, 0.400, 0.000, 1],
        [0.001, 0.423, 0.0, 1],

        [0.202, 0.077, 0.000, 1],
        [0.200, 0.200, 0.000, 1],
        [0.091, 0.170, 0.0, 1],
        [0.112, 0.267, 0.0, 1],

        [0.408, 0.045, 0.000, 1],
        [0.400, 0.100, 0.000, 1],
        [0.408, 0.169, 0.0, 1],
        [0.309, 0.209, 0.000, 1],

        [0.600, 0.020, 0.000, 1],
        [0.600, 0.050, 0.000, 1],
        [0.600, 0.100, 0.000, 1],
        [0.569, 0.114, 0.000, 1]
    ];

    var backFacePoints = [
        [0.319, -0.400, -0.216, 1],
        [0.307, -0.402, -0.166, 1],
        [0.348, -0.401, -0.166, 1],
        [0.330, -0.408, -0.177, 1],
        [0.353, -0.399, -0.166, 1],
        [0.344, -0.402, -0.179, 1],

        [0.000, -1.000, 0.400, 1],
        [-0.275, -0.980, 0.427, 1],
        [-0.301, 1.018, 0.443, 1],
        [0.815, 0.998, 0.410, 1],
        [0.841, -1.002, 0.400, 1],
        [0.000, -1.000, 0.400, 1],

        [0.000, -1.000, 0.800, 1],
        [-0.735, -0.990, 0.784, 1],
        [-0.772, 1.009, 0.795, 1],
        [1.000, 1.000, 0.800, 1],
        [1.000, -1.000, 0.800, 1],
        [0.000, -1.000, 0.800, 1],

        [0.000, -1.000, 1.200, 1],
        [-0.889, -0.996, 1.195, 1],
        [-0.926, 1.003, 1.200, 1],
        [1.000, 1.000, 1.200, 1],
        [1.000, -1.000, 1.200, 1],
        [0.000, -1.000, 1.200, 1],

        [0.000, -1.000, 1.600, 1],
        [-0.979, -0.999, 1.600, 1],
        [-1.000, 1.000, 1.600, 1],
        [1.000, 1.000, 1.600, 1],
        [1.000, -1.000, 1.600, 1],
        [0.000, -1.000, 1.600, 1],

        [0.000, -1.000, 2.000, 1],
        [-1.000, -1.000, 2.000, 1],
        [-1.000, 1.000, 2.000, 1],
        [1.000, 1.000, 2.000, 1],
        [1.000, -1.000, 2.000, 1],
        [0.000, -1.000, 2.000, 1],
    ];

    this.body = new Cylinder(this.scene, 1.5, 1.5, 7, 50, 50);
    this.body2 = new Cylinder(this.scene, 1.5, 0, 2, 50, 50);
    this.leg = new Cylinder(this.scene, 0.15, 0.15, 2, 50, 50);
    this.roda = new Cylinder(this.scene, 0.5, 0.5, 0.2, 50, 50);
    this.face = new Patch(this.scene, 5, 5, 20, 20, front);
    this.wing1 = new Patch(this.scene, 3, 3, 20, 20, wingPoints1);
    this.wing2 = new Patch(this.scene, 3, 3, 20, 20, wingPoints2);
    this.backWing = new Patch(this.scene, 3, 3, 20, 20, backPoints);
    this.BackFace = new Patch(this.scene, 5, 5, 20, 20, backFacePoints);

    this.body = new CGFappearance(this.scene);
    this.body.loadTexture("img/tap.jpg");

    this.windows = new CGFappearance(this.scene);
    this.windows.loadTexture("img/planeWindow.jpg");


};

Vehicle.prototype = Object.create(CGFobject.prototype);
Vehicle.prototype.constructor = Vehicle;

/**
 * Adds the base and the top of the Vehicle. Updates Vehicle's height
 */
Vehicle.prototype.display = function() {

    this.scene.pushMatrix();
    this.scene.translate(0.6, -2.5, 6);
    this.scene.rotate((90 * Math.PI / 180), 0, 1, 0);
    this.roda.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-0.6, -2.5, 6);
    this.scene.rotate((90 * Math.PI / 180), 0, 1, 0);
    this.roda.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate((90 * Math.PI / 180), 1, 0, 0);
    this.scene.translate(-0.6, 6, 0.5);
    this.leg.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate((90 * Math.PI / 180), 1, 0, 0);
    this.scene.translate(0.6, 6, 0.5);
    this.leg.display();
    this.scene.popMatrix();

    this.windows.apply();

    this.scene.pushMatrix();
    this.scene.translate(0, 0.9, -1.9);
    this.scene.scale(2.5, 2.5, 2);
    this.BackFace.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 1, -1);
    this.scene.rotate((90 * Math.PI / 180), 0, 1, 0);
    this.scene.rotate((90 * Math.PI / 180), 0, 0, 1);
    this.scene.scale(6, 9, 9);
    this.backWing.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate((180 * Math.PI / 180), 0, 1, 0);
    this.scene.translate(0, 0.9, -12);
    this.scene.scale(2.5, 2.5, 2.5);
    this.face.display();
    this.scene.popMatrix();

    this.body.apply();

    this.scene.pushMatrix();
    this.scene.translate(1, 0, 8.3);
    this.scene.scale(5, 5, 8);
    this.scene.rotate((-90 * Math.PI / 180), 1, 0, 0);
    this.scene.rotate((-20 * Math.PI / 180), 1, 1, 0);
    this.wing1.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 3.9);
    this.scene.scale(5, 9, 7);
    this.scene.rotate((90 * Math.PI / 180), 1, 0, 0);
    this.wing2.display();
    this.scene.popMatrix();

}

Vehicle.prototype.updateTexCoords = function(s, t) {

}
