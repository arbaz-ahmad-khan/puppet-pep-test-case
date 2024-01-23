import Level from '../src/scenes/Level';
import Home from '../src/scenes/Home';

describe('Level Scene', () => {
    let level;
    let home;

    beforeEach(() => {
        level = new Level();
        home = new Home();
        home.tweens = {
            add: jest.fn(),
        };

        // home.pointerOut = jest.fn();
        level.add = {
            sprite: jest.fn().mockReturnValue({ 
                setOrigin: jest.fn().mockReturnThis(),
                setVisible: jest.fn().mockReturnThis(),
                play: jest.fn().mockReturnThis(),
                setPosition: jest.fn().mockReturnThis(),
                setCollideWorldBounds: jest.fn().mockReturnThis(),
                setScale: jest.fn().mockReturnThis(),
            }),
            text: jest.fn().mockReturnValue({
                setOrigin: jest.fn().mockReturnThis(),
                // ... other mocks ...
            }),
            group: jest.fn().mockReturnThis(),
        };
        
        level.game = {
            config: {
                width: 800, // replace with actual width
                height: 600, // replace with actual height
                // ... other configs ...
            },
            // ... other mocks ...
        };
        home.pointerOver = jest.fn();
        global.currentScore = 0;
        
        level.input = {
            setDefaultCursor: jest.fn(),
        };
        level.physics = {
            add: {
                collider: jest.fn().mockReturnThis(),
                sprite: jest.fn().mockReturnValue({ 
                    setOrigin: jest.fn().mockReturnThis(),
                    setVisible: jest.fn().mockReturnThis(),
                    setScale: jest.fn().mockReturnThis(),
                    setCollideWorldBounds: jest.fn().mockReturnThis(), // mock setCollideWorldBounds here
                    body: {
                        setSize: jest.fn(), // mock setSize here
                        setOffset: jest.fn(), // you might also need to mock setOffset
                    },
                    // ... other mocks ...
                }),
                // ... other mocks ...
            },
        };
        level.birdFly = {
            play: jest.fn().mockReturnThis(),
            setPosition: jest.fn().mockReturnThis(),
            setVisible: jest.fn().mockReturnThis(),
            // ... other mocks ...
        };
        level.plugins = {
            get: jest.fn().mockReturnValue({
                add: jest.fn().mockReturnThis(),
                on: jest.fn(),
            }),
        };
        level.ropeContainer = {
            add: jest.fn(),
        };
        level.obstacleContainer = {
            getAll: jest.fn().mockReturnValue([]),
        };
        level.cornContainer = {
            getAll: jest.fn().mockReturnValue([]),
        };
        level.cornCountText = {
            setText: jest.fn().mockReturnThis(),
            // ... other mocks ...
        };
        level.wheatContainer = {
            getAll: jest.fn().mockReturnValue([]),
        };
        level.wheatCountText = {
            setText: jest.fn().mockReturnThis(),
            // ... other mocks ...
        };
        level.pointerOverAndOut = jest.fn();
        level.editorCreate = jest.fn();
        level.firstTween = jest.fn();
        level.secondTween = jest.fn();
        level.thirdTween = jest.fn();
        level.forthTween = jest.fn();
        level.fivethTween = jest.fn();
        level.handleCollision = jest.fn();
        level.handleCornCollision = jest.fn();
        level.handleWheatCollision = jest.fn();
        
    });
    
    test('create method should call necessary methods', () => {
        level.create();
        expect(level.editorCreate).toHaveBeenCalled();
        expect(level.input.setDefaultCursor).toHaveBeenCalledWith('default');
        expect(level.pointerOverAndOut).toHaveBeenCalled();
        expect(level.firstTween).toHaveBeenCalled();
        expect(level.secondTween).toHaveBeenCalled();
        expect(level.thirdTween).toHaveBeenCalled();
        expect(level.forthTween).toHaveBeenCalled();
        expect(level.fivethTween).toHaveBeenCalled();
    });

    // Add more specific tests here...
});