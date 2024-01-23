
// You can write more code here

/* START OF COMPILED CODE */

class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// playAgain
		const playAgain = this.add.image(540, 1350, "playAgain");
		playAgain.scaleX = 2;
		playAgain.scaleY = 2;

		// rope
		this.add.image(540, -55, "rope");

		// bird
		const bird = this.add.image(540, 760, "bird");
		bird.scaleX = 1.5;
		bird.scaleY = 1.5;

		this.playAgain = playAgain;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	playAgain;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

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
		this.playAgain.on('pointerover', () => this.pointerOver([this.playAgain],2));
		this.playAgain.on('pointerout', () => this.pointerOut([this.playAgain],2));

		this.bestScore = parseInt(localStorage.getItem('bestScore')) || 0
		this.GameOverScoreText = this.add.text(540, 1000, 'Score: ' + currentScore, {
			fontFamily: "toJapan",
			fontSize: '50px',
			fill: '#fdfbdc',
		});
		this.GameOverScoreText.setOrigin(0.5, 0.5);

		this.GameOverBestScoreText = this.add.text(540, 1100, 'Best Score: ' + this.bestScore, {
			fontFamily: "toJapan",
			fontSize: '50px',
			fill: '#fdfbdc',
		});
		this.GameOverBestScoreText.setOrigin(0.5, 0.5);

		this.playAgain.setInteractive().on("pointerdown", () => {
			currentScore = 0;
			this.scene.stop('GameOver');
			this.scene.start('Level');
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
