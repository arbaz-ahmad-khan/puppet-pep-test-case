
// You can write more code here
import Phaser from "phaser";
/* START OF COMPILED CODE */

export default class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// homeBg
		this.add.image(540, 960, "homeBg");

		// homeLogo
		this.add.image(540, 400, "homeLogo");

		// playBtn
		const playBtn = this.add.image(540, 1267, "playBtn");

		// musicOn
		const musicOn = this.add.image(340, 1500, "musicOn");

		// soundOn
		const soundOn = this.add.image(740, 1500, "soundOn");

		// leftBird
		const leftBird = this.add.sprite(368, 509, "bird-01");
		leftBird.flipX = true;

		// rightBird
		const rightBird = this.add.sprite(715, 513, "bird-01");

		this.playBtn = playBtn;
		this.musicOn = musicOn;
		this.soundOn = soundOn;
		this.leftBird = leftBird;
		this.rightBird = rightBird;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	playBtn;
	/** @type {Phaser.GameObjects.Image} */
	musicOn;
	/** @type {Phaser.GameObjects.Image} */
	soundOn;
	/** @type {Phaser.GameObjects.Sprite} */
	leftBird;
	/** @type {Phaser.GameObjects.Sprite} */
	rightBird;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.leftBird.play('birdWing');
		this.rightBird.play('birdWing');

		this.tweens.add({
			targets: this.leftBird,
			y: 500,
			duration: 1000,
			yoyo: true,
			repeat: -1,
			onComplete: () => {
			}
		});

		this.tweens.add({
			targets: this.rightBird,
			y: 500,
			duration: 1000,
			yoyo: true,
			repeat: -1,
			onComplete: () => {
			}
		});

		this.pointerOver = (aBtn, scale) => {
			this.input.setDefaultCursor('pointer');
			this.tweens.add({
				targets: aBtn,
				scaleX: scale + 0.05,
				scaleY: scale + 0.05,
				duration: 50
			})
		}
		this.pointerOut = (aBtn, scale) => {
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
		this.playBtn.on('pointerover', () => this.pointerOver([this.playBtn], 1));
		this.playBtn.on('pointerout', () => this.pointerOut([this.playBtn], 1));
		this.musicOn.on('pointerover', () => this.pointerOver([this.musicOn], 1));
		this.musicOn.on('pointerout', () => this.pointerOut([this.musicOn], 1));
		this.soundOn.on('pointerover', () => this.pointerOver([this.soundOn], 1));
		this.soundOn.on('pointerout', () => this.pointerOut([this.soundOn], 1));

		this.playBtn.setInteractive().on('pointerdown', () => {
			this.tweens.add({
				targets: this.playBtn,
				scaleX: 0.9,
				scaleY: 0.9,
				duration: 80,
				yoyo: true,
				onComplete: () => {
					this.scene.start("Level");
				}
			});
		});

		this.soundOn.setInteractive().on('pointerdown', () => {
			this.tweens.add({
				targets: this.soundOn,
				scaleX: 0.9,
				scaleY: 0.9,
				duration: 80,
				yoyo: true,
				onComplete: () => {
					if (this.soundOn.texture.key === 'soundOn') {
						this.soundOn.setTexture('sounOff');
					} else {
						this.soundOn.setTexture('soundOn');
					}
				}
			});
		});

		this.musicOn.setInteractive().on('pointerdown', () => {
			this.tweens.add({
				targets: this.musicOn,
				scaleX: 0.9,
				scaleY: 0.9,
				duration: 80,
				yoyo: true,
				onComplete: () => {
					if (this.musicOn.texture.key === 'musicOn') {
						this.musicOn.setTexture('musicOff');
					} else {
						this.musicOn.setTexture('musicOn');
					}
				}
			});
		});
	}
	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
