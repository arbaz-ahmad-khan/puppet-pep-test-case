import Home from '../src/scenes/Home';
describe('Home Scene', () => {
    let home;

    beforeEach(() => {
        home = new Home();
        // ... existing setup ...
        // jest.spyOn(home, 'pointerOver').mockImplementation(jest.fn());
        // jest.spyOn(home, 'pointerOut').mockImplementation(jest.fn());
        home.pointerOver = jest.fn();
        home.pointerOut = jest.fn();
        home.add = { 
            image: jest.fn().mockReturnValue({ on: jest.fn(), setInteractive: jest.fn().mockReturnThis(),}),
            sprite: jest.fn().mockReturnValue({ play: jest.fn()}),
        };
        home.events = { 
            emit: jest.fn(),
        };
        home.tweens = { 
            add: jest.fn(),
        };
    });

    test('create method should start bird animations', () => {
        home.create();
        expect(home.leftBird.play).toHaveBeenCalledWith('birdWing');
        expect(home.rightBird.play).toHaveBeenCalledWith('birdWing');
    });

    test('create method should add tweens for birds', () => {
        home.create();
        expect(home.tweens.add).toHaveBeenCalledTimes(10); // Updated count to 10 as per your create method
    });

    test('create method should set up pointerover and pointerout events for buttons', () => {
        home.create();
        expect(home.playBtn.on).toHaveBeenCalledWith('pointerover', expect.any(Function));
        expect(home.playBtn.on).toHaveBeenCalledWith('pointerout', expect.any(Function));
        expect(home.musicOn.on).toHaveBeenCalledWith('pointerover', expect.any(Function));
        expect(home.musicOn.on).toHaveBeenCalledWith('pointerout', expect.any(Function));
        expect(home.soundOn.on).toHaveBeenCalledWith('pointerover', expect.any(Function));
        expect(home.soundOn.on).toHaveBeenCalledWith('pointerout', expect.any(Function));
    });

    test('create method should set up pointerdown events for buttons', () => {
        home.create();
        expect(home.playBtn.setInteractive().on).toHaveBeenCalledWith('pointerdown', expect.any(Function));
        expect(home.soundOn.setInteractive().on).toHaveBeenCalledWith('pointerdown', expect.any(Function));
        expect(home.musicOn.setInteractive().on).toHaveBeenCalledWith('pointerdown', expect.any(Function));
    });

    test('create method should call pointerOver and pointerOut', () => {
        home.create();
        expect(home.pointerOver).toHaveBeenCalledTimes(3);
        expect(home.pointerOut).toHaveBeenCalledTimes(3);
    });
});