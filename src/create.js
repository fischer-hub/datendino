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
    player = this.physics.add.sprite(200, 450, 'data_dino');
    player.setBounce(0);
    player.setCollideWorldBounds(true);

    // create invisible ground to collide with, and put texture over it because i dont know any better
    ground = this.physics.add.image(0, 680, 'ground_invis').setScale(2).refreshBody();
    ground.setCollideWorldBounds(true);

    bar = this.physics.add.sprite(window.screen.width + 10 , 800, 'bar');
    bar.body.setAllowGravity(false);
    //bar.setTint = '#4287f5';
    //bar.setCollideWorldBounds(false);
    
    heart = this.physics.add.sprite(window.screen.width + 50 , 615, 'heart');
    heart.body.setAllowGravity(false);

    heartDisplay1 = this.physics.add.sprite(window.screen.width - 150 , 50, 'heart');
    heartDisplay1.body.setAllowGravity(false);
    heartDisplay2 = this.physics.add.sprite(window.screen.width - 100 , 50, 'heart');
    heartDisplay2.body.setAllowGravity(false);
    heartDisplay2.visible = false;
    heartDisplay3 = this.physics.add.sprite(window.screen.width - 50 , 50, 'heart');
    heartDisplay3.body.setAllowGravity(false);
    heartDisplay3.visible = false;




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
    cursors = this.input.keyboard.addKeys('SPACE,up');
    this.input.on('pointerdown', function (pointer)
    {

        this.touchDown = true;

    }, this);


    // add collectable
    /* stars = this.physics.add.group({
        key: 'star',
        repeat: 5,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
 */
/*     stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    }); */
    
    //this.physics.add.collider(heart, ground);
    this.physics.add.overlap(player, heart, collectHearts);
    this.physics.add.overlap(player, bar, hitObstacle);

    scoreText = this.add.text(16, 16, 'press space', { fontSize: '32px', fill: '#000' });


}