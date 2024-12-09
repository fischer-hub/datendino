function create ()
{
    // add sprites to canvas
    this.add.image(400, 300, 'bg');

    //the width and height value could be the screen width and height
    //"background" is the name of your preloaded image
    this.background = this.add.tileSprite(0, 0, window.screen.width, 700, 'bg').setOrigin(0).setScrollFactor(0, 1);
    this.ground_img = this.add.tileSprite(0, 630, window.screen.width, 50, 'ground').setScale(2).setOrigin(0).setScrollFactor(0, 1);
    

    // create physics object for platforms
    //platforms = this.physics.add.staticGroup();

    // create platform objects
    //ground = this.physics.add.tileSprite(0, 0, window.screen.width / 2, 680, 'ground').setOrigin(0).setScrollFactor(0,1);
    //platforms.create(0, 650, 'ground').setScale(2).refreshBody();
    //platforms.create(window.screen.width, 600, 'ground');

    // create player object
    player = this.physics.add.sprite(100, 450, 'data_dino');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    // create invisible ground to collide with, and put texture over it because i dont know any better
    ground = this.physics.add.image(0, 680, 'ground_invis').setScale(2).refreshBody();
    ground.setCollideWorldBounds(true);




    // create animation for player object
    //this.anims.create({
    //    key: 'left',
    //    frames: this.anims.generateFrameNumbers('data_dino', { start: 0, end: 3 }),
    //    frameRate: 10,
    //    repeat: -1
    //});

    // add collision check for platforms and player
    this.physics.add.collider(player, ground);

    // create cursor keys object (check up down left right keys)
    cursors = this.input.keyboard.createCursorKeys();

    // add collectable
    stars = this.physics.add.group({
        key: 'star',
        repeat: 5,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });
    
    this.physics.add.collider(stars, ground);
    this.physics.add.overlap(player, stars, collectStar, null, this);

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

}