function create ()
{
    // add sprites to canvas
    this.add.image(400, 300, 'bg');
    //the width and height value could be the screen width and height
    //"background" is the name of your preloaded image
    this.background = this.add.tileSprite(0, 0, window.screen.width, 700, 'bg').setOrigin(0).setScrollFactor(0, 1);

    pascal = this.physics.add.sprite(window.screen.width + 200 , 570, 'pascal').setScale(0.25);
    pascal.body.setSize(100, 200);
    pascal.body.setAllowGravity(false);

    sd = this.physics.add.sprite(window.screen.width + 600 , 300, 'sd').setScale(0.5);
    sd.body.setAllowGravity(false);
    sd.body.angle = 20;

    regression = this.physics.add.sprite(window.screen.width + 200 , 200, 'regression').setScale(0.5);
    regression.body.setAllowGravity(false);
    regression.body.angle = 10;

    ttest = this.physics.add.sprite(window.screen.width + 400 , 500, 'ttest');
    ttest.body.setAllowGravity(false);
    ttest.body.angle = -10;

    bar = this.physics.add.sprite(window.screen.width + 20 , 800, 'bar');
    bar.body.setAllowGravity(false);

    bar_blue = this.physics.add.sprite(window.screen.width + 20 , 800, 'bar_blue');
    bar_blue.body.setAllowGravity(false);

    bar_orange = this.physics.add.sprite(window.screen.width + 20 , 800, 'bar_orange');
    bar_orange.body.setAllowGravity(false);

    bar_cyan = this.physics.add.sprite(window.screen.width + 20 , 800, 'bar_cyan');
    bar_cyan.body.setAllowGravity(false);

    bar_arr = [bar, bar_blue, bar_cyan, bar_orange]

    this.ground_img = this.add.tileSprite(0, 630, window.screen.width, 50, 'ground').setScale(2).setOrigin(0).setScrollFactor(0, 1);
    
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

    leaderBoardButton = this.add.text((window.screen.width / 2) - 175, 485, 'show leaderboard', { fontSize: '32px', fill: '#000' });
    leaderBoardButton.setInteractive();
    leaderBoardButton.on('pointerdown', () => { 
        leaderBoardButton.visible = false;
        loseText.visible = false;
        enterName.visible = false;
        enterUsernameText.destroy();
        playAgainButton.visible = false;
        leaderboardBG.visible = true;
        (async () => {leaderboardData = await fetchData()})()
        if (username != '') { leaderboardData.push({score: score, created_at: dateFns.format(new Date(), 'MM-dd-y HH:mm:SS'), username: username}) }
        leaderboardData.sort(function (a, b) {return b.score - a.score});
        backButton.visible = true;

        leaderBoardGroup = this.add.group()
        leaderboardTitel = this.add.text((window.screen.width / 2) - 399, 100 , 'rank         name         date      score', { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
        
        try {
            row1 =             this.add.text((window.screen.width / 2) - 399, 150 , `   1${leaderboardData[0].username.padStart(13)}${leaderboardData[0].created_at.split(' ')[0].padStart(13)}${leaderboardData[0].score.toString().padStart(11)}`, { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
            row2 =             this.add.text((window.screen.width / 2) - 399, 200 , `   2${leaderboardData[1].username.padStart(13)}${leaderboardData[1].created_at.split(' ')[0].padStart(13)}${leaderboardData[1].score.toString().padStart(11)}`, { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
            row3 =             this.add.text((window.screen.width / 2) - 399, 250 , `   3${leaderboardData[2].username.padStart(13)}${leaderboardData[2].created_at.split(' ')[0].padStart(13)}${leaderboardData[2].score.toString().padStart(11)}`, { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
            row4 =             this.add.text((window.screen.width / 2) - 399, 300 , `   4${leaderboardData[3].username.padStart(13)}${leaderboardData[3].created_at.split(' ')[0].padStart(13)}${leaderboardData[3].score.toString().padStart(11)}`, { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
            row5 =             this.add.text((window.screen.width / 2) - 399, 350 , `   5${leaderboardData[4].username.padStart(13)}${leaderboardData[4].created_at.split(' ')[0].padStart(13)}${leaderboardData[4].score.toString().padStart(11)}`, { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
            row6 =             this.add.text((window.screen.width / 2) - 399, 400 , `   6${leaderboardData[5].username.padStart(13)}${leaderboardData[5].created_at.split(' ')[0].padStart(13)}${leaderboardData[5].score.toString().padStart(11)}`, { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
            row7 =             this.add.text((window.screen.width / 2) - 399, 450 , `   7${leaderboardData[6].username.padStart(13)}${leaderboardData[6].created_at.split(' ')[0].padStart(13)}${leaderboardData[6].score.toString().padStart(11)}`, { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
            row8 =             this.add.text((window.screen.width / 2) - 399, 500 , `   8${leaderboardData[7].username.padStart(13)}${leaderboardData[7].created_at.split(' ')[0].padStart(13)}${leaderboardData[7].score.toString().padStart(11)}`, { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
            row9 =             this.add.text((window.screen.width / 2) - 399, 550 , `   9${leaderboardData[8].username.padStart(13)}${leaderboardData[8].created_at.split(' ')[0].padStart(13)}${leaderboardData[8].score.toString().padStart(11)}`, { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
            row10 =            this.add.text((window.screen.width / 2) - 399, 600 , `   10${leaderboardData[9].username.padStart(13)}${leaderboardData[9].created_at.split(' ')[0].padStart(13)}${leaderboardData[9].score.toString().padStart(11)}`, { fontSize: '32px', fill: '#000' }, leaderBoardGroup);
        } catch (error) {
            console.log('failed to create all leaderboard rows, probably because they dont contain any data')
            console.log(error)
            console.log('omg')
        }
            leaderBoardGroup.visible = false;
    });
    leaderBoardButton.visible = false;

    playButton = this.add.text((window.screen.width /2) - 150, 315, 'click to play!', { fontSize: '32px', fill: '#000' });
    playButton.setInteractive();
    playButton.on('pointerdown', () => { 
        pause = false;
        playButton.visible = false;
        startTime = Date.now();
        firstSpace = true;
    });


    playAgainButton = this.add.text((window.screen.width /2) - 180, 315, 'click to play again!', { fontSize: '32px', fill: '#000' });
    playAgainButton.setInteractive();
    playAgainButton.on('pointerdown', () => {
        pause = false;
        startTime = Date.now();
        firstSpace = true;
        init();
        gameOver = false;
        loseText.visible = false;
        playAgainButton.visible = false;
        leaderBoardButton.visible = false;
        enterName.visible = false;
        enterUsernameText.destroy();
    });
    playAgainButton.visible = false;


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
    this.physics.add.overlap(player, pascal, hitObstacle);

    scoreText = this.add.text(16, 16, 'press space to jump', { fontSize: '32px', fill: '#000' });
    enterUsernameText = this.add.text((window.screen.width / 2) - 350, 550 , username, { fontSize: '32px', fill: '#000' });
    loseText = this.add.text((window.screen.width / 2) - 200, 350 , 'better luck next time..', { fontSize: '32px', fill: '#000' });
    loseText.visible = false;
    enterName = this.add.text((window.screen.width / 2) - 350, 385 , 'type in a username and submit with enter :)', { fontSize: '32px', fill: '#000' });
    enterName.visible = false;


    leaderboardBG = this.add.tileSprite(0, 0, window.screen.width, 700, 'leaderboard_bg').setOrigin(0).setScrollFactor(0, 1);
    leaderboardBG.visible = false;

    backButton = this.add.text((window.screen.width /4) - 200, 600, 'back', { fontSize: '32px', fill: '#000' });
    backButton.setInteractive();
    backButton.on('pointerdown', () => { 
        backButton.visible = false;
        leaderBoardButton.visible = false;
        leaderBoardGroup.visible = false;
        leaderboardTitel.visible = false;
        try {
            row1.visible = false;
            row2.visible = false;
            row3.visible = false;
            row4.visible = false;
            row5.visible = false;
            row6.visible = false;
            row7.visible = false;
            row8.visible = false;
            row9.visible = false;
            row10.visible = false;
        } catch (error) {
            console.log('failed to set some leaderboard rows invisible, probably because they dont exist..?')
        }
            leaderboardBG.visible = false;


    });
    backButton.visible = false;

}