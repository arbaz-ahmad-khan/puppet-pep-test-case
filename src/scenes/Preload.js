
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// preloadBg
		this.add.image(540, 960, "preloadBg");

		// preloadLogo
		this.add.image(540, 400, "preloadLogo");

		// loadingText
		const loadingText = this.add.text(410, 1580, "", {});
		loadingText.setOrigin(0, 0.5);
		loadingText.text = "Loading";
		loadingText.setStyle({ "color": "#fefcda", "fontFamily": "toJapan", "fontSize": "40px", "stroke": "#c9663f", "strokeThickness":10});

		// loadingDots
		const loadingDots = this.add.text(640, 1585, "", {});
		loadingDots.setOrigin(0, 0.5);
		loadingDots.setStyle({ "color": "#fefcda", "fontFamily": "toJapan", "fontSize": "40px", "stroke": "#c9663f", "strokeThickness":10});

		this.loadingText = loadingText;
		this.loadingDots = loadingDots;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	loadingText;
	/** @type {Phaser.GameObjects.Text} */
	loadingDots;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();
		this.load.plugin("rexdragrotateplugin", "assets/dragrotate-plugin.js", true);

		this.outerBar = this.add.sprite(540, 1660, "outer-bar");
		this.outerBar.setOrigin(0.5);

		this.innerBar = this.add.sprite(
			this.outerBar.x - this.outerBar.displayWidth / 2 + 30,
			this.outerBar.y + 20,
			"inner-bar"
		);
		this.innerBar.setOrigin(0, 0.5);

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			const currentProgress = currentInterval * progressIncrement;
			// Update loading animation (dots)
			const numDots = Math.floor(currentProgress * 10) % 4;
			this.loadingDots.text = '.'.repeat(numDots);

			// Update loading text
			// this.loadingText.text = `Loading${this.loadingDots.text}`;	

			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);

			currentInterval++;

			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.innerBar.setVisible(false);
				this.outerBar.setVisible(false);
				this.loadingText.setVisible(false);
				this.loadingDots.setVisible(false);
				this.scene.start("Home");
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
