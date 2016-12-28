class Player {
    constructor(player, graph, scene) {
        this.player = player;
        this.scene = scene;
        this.reader = this.scene.reader;
        this.graph = graph;
        this.score = 0;

        this.selectablePawn = false;
        this.selectableWall = false;

        this.pawn1 = new Pawn(this.scene, this.reader, this.player, 1);
        this.pawn2 = new Pawn(this.scene, this.reader, this.player, 2);

        //type 1 -stepOver
        //type 2 - Back
        this.button = new Button(this.scene, this.reader, this.player, 1);
        this.backButton = new Button(this.scene, this.reader, this.player, 2);

        this.numberWalls = 7;
        this.walls = new Array(this.numberWalls - 1);

        for (var i = 0; i < this.numberWalls; i++)
            this.walls[i] = new Wall(this.scene, this.reader, this.player, i);

        let angle = 0.4;
        let near = 0.1;
        let far = 500;
        let fromVector;
        let toVector;

        switch (player) {
            case 1:
                this.startPositionWall1 = [-2, 0.3, 3];
                fromVector = vec3.fromValues(5.8,37,-30);
                toVector = vec3.fromValues(7.4,-3,3.5);
                break;
            case 2:
                this.startPositionWall1 = [15.5, 0.3, 3];
                fromVector = vec3.fromValues(7.8, 34, 41);
                toVector = vec3.fromValues(5.7,-4.2,6.1);
                break;
        }

        this.playerCamera = new CGFcamera(angle, near, far, fromVector, toVector);
    }

    getWallNumber(number) {
        return this.walls[number];
    }

    getNumbernumberWalls() {
        return this.numberWalls();
    }

    setNumbernumberWalls(numbernumberWalls) {
        this.numberWalls = numbernumberWalls;
    }

    getScore() {
        return this.score;
    }

    setScore(score) {
        this.score += score;
    }

    getPawn1Id() {
        return pawn1;
    }

    getPawn2Id() {
        return pawn2;
    }

    displayStepOverButton() {
        if (this.scene.game.currentState == this.scene.game.state.SELECTING_WALL && this.player == this.scene.game.player && this.button.type == 1) {
            this.scene.registerForPick(100, this.button);
            this.button.display();
        } else {
            this.scene.clearPickRegistration();
            this.button.display();
        }
        this.scene.clearPickRegistration();
    }

    displayBackButton() {

        if ((this.scene.game.currentState == this.scene.game.state.SELECTING_PAWN_NEXT_POSITION && this.player == this.scene.game.player) ||
            (this.scene.game.currentState == this.scene.game.state.SELECTING_FIRST_WALL_POSITION && this.player == this.scene.game.player) ||
            (this.scene.game.currentState == this.scene.game.state.SELECTING_SECOND_WALL_POSITION && this.player == this.scene.game.player)) {
            this.scene.registerForPick(101, this.backButton);
            this.backButton.display();
        } else {
            this.scene.clearPickRegistration();
            this.backButton.display();
        }
        this.scene.clearPickRegistration();
    }

    movePawn(position) {

        this.pawn1.setPawnXCoord(position['x1']);
        this.pawn1.setPawnYCoord(1.3);
        this.pawn1.setPawnZCoord(position['y1']);

        this.pawn2.setPawnXCoord(position['x2']);
        this.pawn2.setPawnYCoord(1.3);
        this.pawn2.setPawnZCoord(position['y2']);
    }

    moveWallsToStartPosition() {
        for (var i = 0; i < this.numberWalls; i++) {
            this.walls[i].setWallXCoord(this.startPositionWall1[0]);
            this.walls[i].setWallYCoord(this.startPositionWall1[1]);
            this.walls[i].setWallZCoord(this.startPositionWall1[2] + i * 0.5);
        }

    }

    displayWalls() {

        if (typeof this.scene.game != "undefined") {
            if (this.scene.game.currentState == this.scene.game.state.SELECTING_WALL && this.player == this.scene.game.player) {
                this.selectableWall = true;
            } else this.selectableWall = false;
        }

        //TODO: id???
        for (var i = 0; i < this.numberWalls; i++) {
            if (this.selectableWall && !this.walls[i].used)
                this.scene.registerForPick(i + 10, this.walls[i]);
            this.walls[i].display();
        }

        this.scene.clearPickRegistration();

    }

    validPawnPosition(id) {
        var string = "player" + this.player + id;
        var index = this.scene.game.returnPrologBoardAtom(string);

        for (let i = 0; i < this.scene.game.board.length; i++) {
            for (let j = 0; j < this.scene.game.board[i].length; j++) {
                if (this.scene.game.board[i][j] == index) {
                    var z = i;
                    var x = j;
                }
            }
        }

        return [z, x];
    }

    displayPawns() {

        if (typeof this.scene.game != "undefined") {
            if (this.scene.game.currentState == this.scene.game.state.SELECTING_PAWN && this.player == this.scene.game.player) {
                this.selectablePawn = true;
            } else this.selectablePawn = false;
        }

        //TODO: id??
        if (this.selectablePawn) {
            this.scene.registerForPick(12, this.pawn1);
        }

        this.pawn1.display();

        this.scene.clearPickRegistration();

        if (this.selectablePawn) {
            this.scene.registerForPick(13, this.pawn2);
        }

        this.pawn2.display();

        this.scene.clearPickRegistration();
    }

    update(currTime) {
        this.pawn1.update(currTime);
        this.pawn2.update(currTime);
    }

    getANonUsedWall() {
        for (var i = 0; i < this.walls.length; i++) {
            if (!this.walls[i].used) {
                return this.walls[i];
            }
        }

        return false;
    }
}
