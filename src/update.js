function update ()
    {
/*         if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            //player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            //.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            //player.anims.play('turn');
        } */
        score = Math.floor((Date.now() - startTime) / 100);
        speed = Math.max(((score/1000)+1) * 8, 8)


        if (!gameOver && !pause && firstSpace) {

            if ((blinkingTimer > 0) && ((score - blinkingTimerDelta) > 1)){
                player.visible = !player.visible
                blinkingTimerDelta = score;
                blinkingTimer--;
            }

            if ((player.body.blocked.down || player.body.touching.down) && (cursors.SPACE.isDown ||  cursors.up.isDown || this.touchDown))
                {
                    if (score < 8){ 
                        player.setVelocityY(0);
                        this.touchDown = false;
                    } else {
                        firstSpace = true;
                        player.setVelocityY(-1900);
                        player.body.gravity.y = 1000;
                        this.touchDown = false;
                    }
                }

            this.background.setTilePosition(this.cameras.main.scrollX);
            this.ground_img.setTilePosition(this.cameras.main.scrollX);
            if (firstSpace) {scoreText.setText('Score: ' + score);}
            
            if (bar.x < -100){
                bar = bar_arr[Math.floor(Math.random()*bar_arr.length)];
                bar.x = window.screen.width + 10;
                bar.y = Math.floor(Math.random() * (800 - 600 + 1)) + 600;
                bar.angle = (Math.floor(Math.random() * (30 - 1))) * (Math.random() < 0.5 ? -1 : 1);
                bar.setTint = '#4287f5';
            }else if (pascal.x < -100){
                pascal.x = window.screen.width + Math.floor(Math.random() * (2000 - 1 + 1)) + 1;
                pascal.y = Math.floor(Math.random() * (800 - 570 + 1)) + 570;
            }else if (regression.x < -100){
                regression.x = window.screen.width + Math.floor(Math.random() * (2000 - 1 + 1)) + 1;
                regression.y = Math.floor(Math.random() * (800 - 100 + 1)) + 100;
                regression.angle = (Math.floor(Math.random() * (30 - 1))) * (Math.random() < 0.5 ? -1 : 1);
                regression.setScale(Phaser.Math.FloatBetween(0.1, 1));
            }else if (ttest.x < -100){
                ttest.x = window.screen.width + Math.floor(Math.random() * (2000 - 1 + 1)) + 1;
                ttest.y = Math.floor(Math.random() * (800 - 100 + 1)) + 100;
                ttest.angle = (Math.floor(Math.random() * (30 - 1))) * (Math.random() < 0.5 ? -1 : 1);
                ttest.setScale(Phaser.Math.FloatBetween(0.1, 1));
            }else if (sd.x < -100){
                sd.x = window.screen.width + Math.floor(Math.random() * (2000 - 1 + 1)) + 1;
                sd.y = Math.floor(Math.random() * (800 - 100 + 1)) + 100;
                sd.angle = (Math.floor(Math.random() * (30 - 1))) * (Math.random() < 0.5 ? -1 : 1);
                sd.setScale(Phaser.Math.FloatBetween(0.1, 1));
            }else if (heart.x < -1000){
                heart.x = window.screen.width + (Math.floor(Math.random() * (2000 - 1 + 1)) + 1);
                heart.visible = true;
            } else{
                bar.x += -speed;
                heart.x += -speed;
                pascal.x += -speed;
                regression.x += -(speed/2);
                ttest.x += -(speed/2);
                sd.x += -(speed/2);
            }
        } else if (gameOver) {
            playAgainButton.visible = true;
            leaderBoardButton.visible = true;

            this.input.keyboard.on('keydown', (event) => {

                if (score - deltaType > 0.5){
                    deltaType = score;

                    // Implement backspace
                    if (event.keyCode === 8 && username.length > 0) {
                        username = username.slice(0, -1);
                        console.log('back')
                        
                    // Add any other characters you want to allow    
                    } else if (event.key.length === 1 && event.key.match(/[a-zA-Z0-9\s\-_]/) && username.length <= 13) {
                        username += event.key;

                    } else if (event.keyCode === 13 && username.length > 0 && !username.trim()){
                        console.log('enter')
                        insertData({score: score, created_at: dateFns.format(new Date(), 'MM-dd-y HH:mm:SS'), username: username});
                    }
                enterUsernameText.destroy();
                enterUsernameText = this.add.text((window.screen.width / 2) - 350, 150 , username, { fontSize: '32px', fill: '#000' });

                }
            });

        }

    }
    