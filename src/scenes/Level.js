import Phaser from "phaser";
// You can write more code here
let gameOptions = {
	dragRadius: [50, 250],
	crankRatio: 1
}
let bird;
let lastScoredObstacle = null;
let allowUpdateActions = true;
/* START OF COMPILED CODE */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// gamePlayBg
		this.add.image(540, 960, "gamePlayBg");

		// background
		const background = this.add.tileSprite(2314, 960, 2314, 1920, "background");
		background.setOrigin(1, 0.5);

		// background2
		const background2 = this.add.tileSprite(2314, 960, 2314, 1920, "background2");
		background2.setOrigin(1, 0.5);

		// ropeContainer
		const ropeContainer = this.add.container(0, 0);

		// obstacleContainer
		const obstacleContainer = this.add.container(0, 0);

		// obstacleTwo
		const obstacleTwo = this.add.sprite(1150, 550, "rect-9");
		obstacleTwo.setOrigin(0.5, 0.035997847150562326);
		obstacleContainer.add(obstacleTwo);

		// obstacleSix
		const obstacleSix = this.add.image(2600, 16, "rect-7");
		obstacleSix.setOrigin(0.5, 0.028410816404141687);
		obstacleContainer.add(obstacleSix);

		// obstacleSeven
		const obstacleSeven = this.add.image(2600, 877.8822252156593, "rect-7");
		obstacleSeven.setOrigin(0.5, 0.027783025869587145);
		obstacleContainer.add(obstacleSeven);

		// obstacleEight
		const obstacleEight = this.add.image(3325, 285, "rect-6");
		obstacleContainer.add(obstacleEight);

		// obstacleNine
		const obstacleNine = this.add.image(3325, 1007, "rect-6");
		obstacleContainer.add(obstacleNine);

		// obstacleTen
		const obstacleTen = this.add.image(4100, 18, "rect-11");
		obstacleTen.setOrigin(0.05250045664592673, 0.078339811829923);
		obstacleContainer.add(obstacleTen);

		// obstacleEleven
		const obstacleEleven = this.add.image(4100, 1115, "rect-11");
		obstacleEleven.setOrigin(0.04818128942808857, 0.07960386948988561);
		obstacleEleven.flipY = true;
		obstacleContainer.add(obstacleEleven);

		// green
		const green = this.add.image(1150, 50, "green");
		obstacleContainer.add(green);

		// green_1
		const green_1 = this.add.image(1150, 135, "green");
		obstacleContainer.add(green_1);

		// green_2
		const green_2 = this.add.image(1150, 220, "green");
		obstacleContainer.add(green_2);

		// green_3
		const green_3 = this.add.image(1150, 1080, "green");
		obstacleContainer.add(green_3);

		// green_4
		const green_4 = this.add.image(1150, 1165, "green");
		obstacleContainer.add(green_4);

		// green_5
		const green_5 = this.add.image(1150, 1250, "green");
		obstacleContainer.add(green_5);

		// pink
		const pink = this.add.image(1900, 160, "pink");
		obstacleContainer.add(pink);

		// blue_1
		const blue_1 = this.add.image(1900, 460, "blue");
		obstacleContainer.add(blue_1);

		// pink_1
		const pink_1 = this.add.image(1900, 760, "pink");
		obstacleContainer.add(pink_1);

		// blue
		const blue = this.add.image(1900, 1060, "blue");
		obstacleContainer.add(blue);

		// purple1
		const purple1 = this.add.image(4900, 15, "purple");
		purple1.setOrigin(0.5, 0);
		obstacleContainer.add(purple1);

		// purple2
		const purple2 = this.add.image(5200, 175, "purple");
		purple2.setOrigin(0.5, 0);
		obstacleContainer.add(purple2);

		// purple3
		const purple3 = this.add.image(5500, 335, "purple");
		purple3.setOrigin(0.5, 0);
		obstacleContainer.add(purple3);

		// pink1
		const pink1 = this.add.image(6100, 1164.5126061797357, "single-2");
		pink1.setOrigin(0.5, 0.13033964770558035);
		obstacleContainer.add(pink1);

		// pink2
		const pink2 = this.add.image(6100, 713.5212459655579, "single-2");
		pink2.setOrigin(0.5, 0.1200129788078949);
		obstacleContainer.add(pink2);

		// pink3
		const pink3 = this.add.image(6100, 265.2342747274653, "single-2");
		pink3.setOrigin(0.5, 0.13785702841109662);
		obstacleContainer.add(pink3);

		// wheatContainer
		const wheatContainer = this.add.container(0, 0);

		// cornContainer
		const cornContainer = this.add.container(0, 0);

		// corn_counter
		const corn_counter = this.add.image(80, 50, "corn-counter");
		corn_counter.scaleX = 1.5;
		corn_counter.scaleY = 1.5;

		// wheat_counter
		const wheat_counter = this.add.image(230, 50, "wheat-counter");
		wheat_counter.scaleX = 1.5;
		wheat_counter.scaleY = 1.5;

		// score_base
		const score_base = this.add.image(84, 120, "score_base");
		score_base.scaleX = 1.2;
		score_base.scaleY = 1.23;

		// score_base_1
		const score_base_1 = this.add.image(233, 120, "score_base");
		score_base_1.scaleX = 1.2;
		score_base_1.scaleY = 1.23;

		// score_base_2
		const score_base_2 = this.add.image(964, 120, "score_base");
		score_base_2.scaleX = 1.2;
		score_base_2.scaleY = 1.23;

		// scoreText
		const scoreText = this.add.text(965, 29, "", {});
		scoreText.setOrigin(0.5, 0);
		scoreText.text = "SCORE";
		scoreText.setStyle({ "color": "#fdfbdc", "fontFamily": "toJapan", "fontSize": "35px" });

		// cornCountText
		const cornCountText = this.add.text(86, 78, "", {});
		cornCountText.setOrigin(0.5, 0);
		cornCountText.text = "0";
		cornCountText.setStyle({ "color": "#fdfbdc", "fontFamily": "toJapan", "fontSize": "48px" });

		// wheatCountText
		const wheatCountText = this.add.text(236, 78, "", {});
		wheatCountText.setOrigin(0.5, 0);
		wheatCountText.text = "0";
		wheatCountText.setStyle({ "color": "#fdfbdc", "fontFamily": "toJapan", "fontSize": "48px" });

		// birdFly
		const birdFly = this.add.sprite(-187, 1266, "bird-01");
		birdFly.scaleX = 0.9;
		birdFly.scaleY = 0.9;
		birdFly.visible = false;

		// shine
		const shine = this.add.sprite(-297, 550, "shine-01");
		shine.visible = false;

		// gameOverContainer
		const gameOverContainer = this.add.container(1080, 0);
		gameOverContainer.visible = false;

		// gameOverBg
		const gameOverBg = this.add.image(540, 960, "gameOverBg");
		gameOverBg.scaleX = 1.1;
		gameOverBg.scaleY = 1.1;
		gameOverContainer.add(gameOverBg);

		// gameOverBase
		const gameOverBase = this.add.image(540, 910, "gameOverBase");
		gameOverContainer.add(gameOverBase);

		// homeBtn
		const homeBtn = this.add.image(380, 1325, "homeBtn");
		gameOverContainer.add(homeBtn);

		// retryBtn
		const retryBtn = this.add.image(700, 1325, "retryBtn");
		gameOverContainer.add(retryBtn);

		// gameOverHSText
		const gameOverHSText = this.add.text(367, 776, "", {});
		gameOverHSText.setOrigin(0.5, 0.5);
		gameOverHSText.text = "0";
		gameOverHSText.setStyle({ "color": "#b37648", "fontFamily": "toJapan", "fontSize": "64px" });
		gameOverContainer.add(gameOverHSText);

		// gameOverYSText
		const gameOverYSText = this.add.text(710, 777, "", {});
		gameOverYSText.setOrigin(0.5, 0.5);
		gameOverYSText.text = "0";
		gameOverYSText.setStyle({ "color": "#b37648", "fontFamily": "toJapan", "fontSize": "64px" });
		gameOverContainer.add(gameOverYSText);

		// gameOverMCText
		const gameOverMCText = this.add.text(376, 1000, "", {});
		gameOverMCText.setOrigin(0.5, 0.5);
		gameOverMCText.text = "0";
		gameOverMCText.setStyle({ "color": "#fdfbdc", "fontFamily": "toJapan", "fontSize": "32px" });
		gameOverContainer.add(gameOverMCText);

		// gameOverCCText
		const gameOverCCText = this.add.text(708, 1000, "", {});
		gameOverCCText.setOrigin(0.5, 0.5);
		gameOverCCText.text = "0";
		gameOverCCText.setStyle({ "color": "#fdfbdc", "fontFamily": "toJapan", "fontSize": "32px" });
		gameOverContainer.add(gameOverCCText);

		// collisionShine
		const collisionShine = this.add.sprite(-199, 983, "sh-01");
		collisionShine.visible = false;

		this.background = background;
		this.background2 = background2;
		this.ropeContainer = ropeContainer;
		this.obstacleTwo = obstacleTwo;
		this.obstacleSix = obstacleSix;
		this.obstacleSeven = obstacleSeven;
		this.obstacleTen = obstacleTen;
		this.obstacleEleven = obstacleEleven;
		this.purple1 = purple1;
		this.purple2 = purple2;
		this.purple3 = purple3;
		this.pink1 = pink1;
		this.pink2 = pink2;
		this.pink3 = pink3;
		this.obstacleContainer = obstacleContainer;
		this.wheatContainer = wheatContainer;
		this.cornContainer = cornContainer;
		this.cornCountText = cornCountText;
		this.wheatCountText = wheatCountText;
		this.birdFly = birdFly;
		this.shine = shine;
		this.homeBtn = homeBtn;
		this.retryBtn = retryBtn;
		this.gameOverHSText = gameOverHSText;
		this.gameOverYSText = gameOverYSText;
		this.gameOverMCText = gameOverMCText;
		this.gameOverCCText = gameOverCCText;
		this.gameOverContainer = gameOverContainer;
		this.collisionShine = collisionShine;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.TileSprite} */
	background2;
	/** @type {Phaser.GameObjects.Container} */
	ropeContainer;
	/** @type {Phaser.GameObjects.Sprite} */
	obstacleTwo;
	/** @type {Phaser.GameObjects.Image} */
	obstacleSix;
	/** @type {Phaser.GameObjects.Image} */
	obstacleSeven;
	/** @type {Phaser.GameObjects.Image} */
	obstacleTen;
	/** @type {Phaser.GameObjects.Image} */
	obstacleEleven;
	/** @type {Phaser.GameObjects.Image} */
	purple1;
	/** @type {Phaser.GameObjects.Image} */
	purple2;
	/** @type {Phaser.GameObjects.Image} */
	purple3;
	/** @type {Phaser.GameObjects.Image} */
	pink1;
	/** @type {Phaser.GameObjects.Image} */
	pink2;
	/** @type {Phaser.GameObjects.Image} */
	pink3;
	/** @type {Phaser.GameObjects.Container} */
	obstacleContainer;
	/** @type {Phaser.GameObjects.Container} */
	wheatContainer;
	/** @type {Phaser.GameObjects.Container} */
	cornContainer;
	/** @type {Phaser.GameObjects.Text} */
	cornCountText;
	/** @type {Phaser.GameObjects.Text} */
	wheatCountText;
	/** @type {Phaser.GameObjects.Sprite} */
	birdFly;
	/** @type {Phaser.GameObjects.Sprite} */
	shine;
	/** @type {Phaser.GameObjects.Image} */
	homeBtn;
	/** @type {Phaser.GameObjects.Image} */
	retryBtn;
	/** @type {Phaser.GameObjects.Text} */
	gameOverHSText;
	/** @type {Phaser.GameObjects.Text} */
	gameOverYSText;
	/** @type {Phaser.GameObjects.Text} */
	gameOverMCText;
	/** @type {Phaser.GameObjects.Text} */
	gameOverCCText;
	/** @type {Phaser.GameObjects.Container} */
	gameOverContainer;
	/** @type {Phaser.GameObjects.Sprite} */
	collisionShine;

	/* START-USER-CODE */

	// Write more your code here


	create() {
		this.editorCreate();
		this.input.setDefaultCursor('default');
		this.pointerOverAndOut();

		this.bestScore = parseInt(localStorage.getItem('bestScore')) || 0;
		this.cornCount = parseInt(localStorage.getItem('cornCount')) || 0
		this.wheatCount = parseInt(localStorage.getItem('wheatCount')) || 0

		this.rope = this.add.sprite(350, 800, "rope").setOrigin(0.5, 1);
		this.ropeContainer.add(this.rope);

		this.bird = this.physics.add.sprite(350, 800, "bird").setVisible(false);
		this.bird.setScale(0.9);
		this.bird.body.setSize(100, 105);
		this.bird.body.setOffset(10, 15);
		this.bird.setCollideWorldBounds(true);

		this.birdFly.play('birdWing').setPosition(this.bird.x, this.bird.y).setVisible(true);

		this.cornCountText.setText(this.cornCount);
		this.wheatCountText.setText(this.wheatCount);

		// score text
		this.currentScoreText = this.add.text(940, 110, currentScore, {
			fontFamily: "toJapan",
			fontSize: '48px',
			fill: '#fdfbdc',
		});
		this.currentScoreText.setOrigin(0, 0.5);

		// crank sprite
		this.crank = this.add.sprite(this.game.config.width / 2, this.game.config.height / 4 * 3.4, "crank");

		// drag rotate plugin instance
		let dragRotate = this.plugins.get("rexdragrotateplugin").add(this, {
			x: this.crank.x,
			y: this.crank.y,
			minRadius: gameOptions.dragRadius[0],
			maxRadius: gameOptions.dragRadius[1]
		});

		dragRotate.on("drag", function (e) {
			let newPosition = this.rope.y + e.deltaAngle * gameOptions.crankRatio;
			if (newPosition > 50 && newPosition < this.game.config.height / 4 * 2.5) {
				this.rope.y += e.deltaAngle * gameOptions.crankRatio;
				this.bird.y += e.deltaAngle * gameOptions.crankRatio;
				this.crank.angle += e.deltaAngle
			}
		}, this);

		this.obstacleGroup = this.add.group();

		const textureToSizeMap = {
			"rect-9": { width: 50, height: 300 },
			"green": { width: 70, height: 70 },
			"pink": { width: 70, height: 160 },
			"blue": { width: 70, height: 160 },
			"rect-7": { width: 60, height: 340 },
			"rect-6": { width: 60, height: 540 },
			"rect-11": { width: 150, height: 380 },
			"purple": { width: 60, height: 300 },
			"single-2": { width: 70, height: 70 },
		};

		this.obstacleContainer.getAll().forEach((obstacle) => {
			const textureKey = obstacle.texture.key;

			if (textureToSizeMap.hasOwnProperty(textureKey)) {
				obstacle = this.physics.add.existing(obstacle, true);
				const { width, height } = textureToSizeMap[textureKey];
				obstacle.body.setSize(width, height);
				this.obstacleGroup.add(obstacle);
				obstacle.setData('scored', { hasScored: false });
			}
		});


		this.cornGroup = this.add.group();
		this.cornContainer.getAll().forEach((corn) => {
			corn = this.physics.add.existing(corn, true);
			corn.body.setSize(50, 50);
			this.cornGroup.add(corn);
		})

		this.wheatGroup = this.add.group();
		this.wheatContainer.getAll().forEach((wheat) => {
			wheat = this.physics.add.existing(wheat, true);
			wheat.body.setSize(50, 50);
			this.wheatGroup.add(wheat);
		})

		this.physics.add.collider(this.bird, this.obstacleGroup, this.handleCollision, null, this);
		this.physics.add.collider(this.bird, this.cornGroup, this.handleCornCollision, null, this);
		this.physics.add.collider(this.bird, this.wheatGroup, this.handleWheatCollision, null, this);

		this.firstTween();
		this.secondTween();
		this.thirdTween();
		this.forthTween();
		this.fivethTween();
	}

	handleCornCollision(bird, corn) {
		this.shine.setPosition(corn.x, corn.y).setVisible(true);
		this.shine.play('glow').on('animationcomplete', () => {
			this.shine.setVisible(false);
		});
		corn.destroy();
		this.incrementCornCount();
	}
	handleWheatCollision(bird, wheat) {
		this.shine.setPosition(wheat.x, wheat.y).setVisible(true);
		this.shine.play('glow').on('animationcomplete', () => {
			this.shine.setVisible(false);
		});
		wheat.destroy();
		this.incrementWheatCount();
	}

	createTween = (obstacleTargets, tweenDuration, startPosY, endPosY, onCompleteCallback) => {
		this.tweens.add({
			targets: obstacleTargets,
			y: startPosY,
			duration: tweenDuration,
			onComplete: () => {
				this.tweens.add({
					targets: obstacleTargets,
					y: endPosY,
					duration: tweenDuration,
					onComplete: () => {
						onCompleteCallback();
					},
				});
			},
		});
	};

	firstTween = () => {
		const obstacleTargets = [this.obstacleTwo, this.obstacleTwo.body];
		const tweenDuration = 2700;
		if (this.obstacleTwo.x >= 0 && this.obstacleTwo.x <= 1080) {
			this.obstacleTwo.body.setSize(70, 300);
			this.createTween(obstacleTargets, tweenDuration, 280, 720, this.firstTween);
		} else {
			this.interval1 = setTimeout(() => {
				this.firstTween();
			}, 100);
		}
	};

	secondTween = () => {
		const obstacleTargets = [this.obstacleSix, this.obstacleSix.body];
		const obstacleTargets2 = [this.obstacleSeven, this.obstacleSeven.body];
		const tweenDuration = 2700;
		if (this.obstacleSix.x >= 0 && this.obstacleSix.x <= 1080) {
			this.obstacleSix.body.setSize(60, 400);
			this.obstacleSeven.body.setSize(60, 400);
			this.createTween(obstacleTargets, tweenDuration, 200, 14, this.secondTween);
			this.createTween(obstacleTargets2, tweenDuration, 650, 875, this.secondTween);
		}
		else {
			this.interval2 = setTimeout(() => {
				this.secondTween();
			}, 100);
		}
	};

	thirdTween = () => {
		const obstacleTargets = [this.obstacleTen, this.obstacleTen.body];
		const obstacleTargets2 = [this.obstacleEleven, this.obstacleEleven.body];
		const tweenDuration = 3000;
		if (this.obstacleTen.x >= 0 && this.obstacleTen.x <= 1080) {
			this.obstacleTen.body.setSize(240, 160);
			this.obstacleEleven.body.setSize(240, 160);
			this.createTween(obstacleTargets, tweenDuration, 430, 3, this.thirdTween);
			this.createTween(obstacleTargets2, tweenDuration, 630, 1100, this.thirdTween);
		}
		else {
			this.interval3 = setTimeout(() => {
				this.thirdTween();
			}, 2000);
		}
	};

	forthTween = () => {
		const obstacleTargets = [this.purple1, this.purple1.body];
		const obstacleTargets2 = [this.purple2, this.purple2.body];
		const obstacleTargets3 = [this.purple3, this.purple3.body];
		const tweenDuration = 3000;
		if (this.purple1.x >= -500 && this.purple1.x <= 1280) {
			this.purple1.body.setSize(60, 300);
			this.purple2.body.setSize(60, 300);
			this.purple3.body.setSize(60, 300);
			this.createTween(obstacleTargets, tweenDuration, 400, 15, this.forthTween);
			this.createTween(obstacleTargets2, tweenDuration, 650, 15, this.forthTween);
			this.createTween(obstacleTargets3, tweenDuration, 900, 15, this.forthTween);
		}
		else {
			this.interval4 = setTimeout(() => {
				this.forthTween();
			}, 2000);
		}
	};

	fivethTween = () => {
		const obstacleTargets = [this.pink1, this.pink1.body];
		const obstacleTargets2 = [this.pink2, this.pink2.body];
		const obstacleTargets3 = [this.pink3, this.pink3.body];
		const tweenDuration = 1800;
		if (this.pink1.x >= 0 && this.pink1.x <= 1280) {
			this.pink1.body.setSize(70, 70);
			this.pink2.body.setSize(70, 70);
			this.pink3.body.setSize(70, 70);
			this.createTween(obstacleTargets, tweenDuration, 1000, 1200, this.fivethTween);
			this.createTween(obstacleTargets2, tweenDuration, 550, 750, this.fivethTween);
			this.createTween(obstacleTargets3, tweenDuration, 100, 300, this.fivethTween);
		}
		else {
			this.interval5 = setTimeout(() => {
				this.fivethTween();
			}, 2000);
		}
	};

	incrementScore() {
		currentScore += 1;
		this.currentScoreText.setText(currentScore);
	}

	incrementCornCount() {
		this.cornCount += 1;
		this.cornCountText.setText(this.cornCount);
		localStorage.setItem('cornCount', this.cornCount);
	}

	incrementWheatCount() {
		this.wheatCount += 1;
		this.wheatCountText.setText(this.wheatCount);
		localStorage.setItem('wheatCount', this.wheatCount);
	}

	handleCollision() {
		this.birdFly.setAlpha(0.5);
		this.collisionShine.setPosition(this.bird.x-10, this.bird.y).setVisible(true);
		this.collisionShine.play('glowOnCollide').on('animationcomplete', () => {
			this.collisionShine.setVisible(false);
			
			this.tweens.killAll();
		});
		clearInterval(this.interval1);
		clearInterval(this.interval2);
		clearInterval(this.interval3);
		clearInterval(this.interval4);
		clearInterval(this.interval5);


		allowUpdateActions = false;
		this.physics.pause();

		setTimeout(() => {
			this.add.tween({
				targets: this.bird,
				y: 2020,
				duration: 1000,
			});
			this.add.tween({
				targets: this.rope,
				y: -100,
				duration: 1000,
			});
		},600);

		if (currentScore > this.bestScore) {
			this.bestScore = currentScore;
			localStorage.setItem('bestScore', this.bestScore);
		}
		setTimeout(() => {
			// this.scene.stop("Level");
			// this.scene.start("GameOver");
			this.gameOverContainer.setVisible(true);
			this.gameOverContainer.setDepth(1);

			this.add.tween({
				targets: this.gameOverContainer,
				x: 0,
				duration: 500,
			});

			this.gameOverHSText.setText(this.bestScore);
			this.gameOverYSText.setText(currentScore);
			this.gameOverMCText.setText(this.cornCount);
			this.gameOverCCText.setText(this.wheatCount);

			this.homeBtn.setInteractive().on("pointerdown", () => {
				this.scene.stop('Level');
				this.scene.start('Home');
				allowUpdateActions = true;
			});
			this.retryBtn.setInteractive().on("pointerdown", () => {
				currentScore = 0;
				this.scene.restart('Level');
				allowUpdateActions = true;
			});


		}, 1000);
	}

	update() {
		this.birdFly.setPosition(this.bird.x, this.bird.y);
		if (allowUpdateActions) {
			this.background.tilePositionX += 1.8;
			this.background2.tilePositionX += 2.5;

			// Add corn every 10 seconds
			if (this.time.now % 10000 < 20) {
				const cornX = Phaser.Math.Between(1280, 5000);
				const cornY = Phaser.Math.Between(20, 1250);
				const corn = this.physics.add.sprite(cornX, cornY, 'Corn');
				this.cornContainer.add(corn);
				this.cornGroup.add(corn);
			}

			// Add wheat every 10 seconds
			if (this.time.now % 10000 < 20) {
				const wheatX = Phaser.Math.Between(1280, 5000);
				const wheatY = Phaser.Math.Between(20, 1250);
				const wheat = this.physics.add.sprite(wheatX, wheatY, 'Wheat');
				this.wheatContainer.add(wheat);
				this.wheatGroup.add(wheat);
			}

			let canScore = true;
			this.obstacleGroup.children.iterate(obstacle => {
				if (obstacle && obstacle.x !== undefined && obstacle.width !== undefined && this.bird.x !== undefined) {
					if (obstacle.x + obstacle.width < this.bird.x && !obstacle.getData('scored').hasScored) {
						if (canScore) {
							this.incrementScore();
							canScore = false;
							lastScoredObstacle = obstacle;
						}
						obstacle.setData('scored', { hasScored: true });
					}
				}
			});

			if (lastScoredObstacle && this.bird.x - lastScoredObstacle.x > 300) {
				lastScoredObstacle = null;
			}

			this.obstacleContainer.getAll().forEach((obstacle) => {
				if (obstacle.x <= -250) {
					const textureMappings = {
						"rect-9": ["four-verticle-1", "four-verticle-2", "four-verticle-3", "four-verticle-4", "four-verticle-5", "four-verticle-6", "four-verticle-7"],
						"green": ["single-1", "single-2", "single-3", "single-4", "single-5", "single-6"],
						"pink": ["double-verticle-1", "double-verticle-2", "double-verticle-3", "double-verticle-4", "double-verticle-5", "double-verticle-6", "double-verticle-7"],
						"blue": ["double-verticle-1", "double-verticle-2", "double-verticle-3", "double-verticle-4", "double-verticle-5", "double-verticle-6", "double-verticle-7"],
						"rect-6": ["seventh-verticle-1", "seventh-verticle-2", "seventh-verticle-3", "seventh-verticle-4", "seventh-verticle-5", "seventh-verticle-6", "seventh-verticle-7"],
						"rect-11": ["verticle-down-1", "verticle-down-2", "verticle-down-3", "verticle-down-4", "verticle-down-5", "verticle-down-6", "verticle-down-7"],
						"purple": ["four-verticle-1", "four-verticle-2", "four-verticle-3", "four-verticle-4", "four-verticle-5", "four-verticle-6", "four-verticle-7"],
					};

					const possibleTextures = textureMappings[obstacle.texture.key];
					if (possibleTextures && possibleTextures.length > 0) {
						const randomTexture = Phaser.Utils.Array.GetRandom(possibleTextures);
						obstacle.setTexture(randomTexture);
					}

					obstacle.x += 5500;
					obstacle.body.x += 5500;
					obstacle.setData('scored', { hasScored: false });
				}

				obstacle.x -= 2.5;
				obstacle.body.x -= 2.5;
			});

			this.cornContainer.getAll().forEach((corn) => {
				corn.x -= 2.5;
				corn.body.x -= 2.5;
			})
			this.wheatContainer.getAll().forEach((wheat) => {
				wheat.x -= 2.5;
				wheat.body.x -= 2.5;
			})
		}

	}

	pointerOverAndOut(){
		this.pointerOver = (aBtn,scale) => {
			this.input.setDefaultCursor('pointer');
			this.tweens.add({
				targets: aBtn,
				scaleX: scale + 0.05,
				scaleY: scale + 0.05,
				duration: 50
			})
		}
		this.pointerOut = (aBtn,scale) => {
			this.input.setDefaultCursor('default');
			this.tweens.add({
				targets: aBtn,
				scaleX: scale,
				scaleY: scale,
				duration: 50,
				onComplete: () => {
					aBtn.forEach((btn) => {
						btn.setScale(scale);
					});
				}
			})
		}
		this.homeBtn.on('pointerover', () => this.pointerOver([this.homeBtn],1));
		this.homeBtn.on('pointerout', () => this.pointerOut([this.homeBtn],1));
		this.retryBtn.on('pointerover', () => this.pointerOver([this.retryBtn],1));
		this.retryBtn.on('pointerout', () => this.pointerOut([this.retryBtn],1));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
