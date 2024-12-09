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


        if (!gameOver) {

            if ((player.body.blocked.down || player.body.touching.down) && (cursors.SPACE.isDown ||  cursors.up.isDown || this.touchDown))
                {
                    player.setVelocityY(-1900);
                    player.body.gravity.y = 1000;
                    console.log('jump')
                    firstSpace = true;
                    this.touchDown = false;
                }

            this.background.setTilePosition(this.cameras.main.scrollX);
            this.ground_img.setTilePosition(this.cameras.main.scrollX);
            elapsedSeconds = Math.floor((Date.now() - startTime) / 100);
            if (firstSpace) {scoreText.setText('Score: ' + elapsedSeconds);}
            
            if (bar.x < -10){
                bar.x = window.screen.width + 10;
                heart.x = window.screen.width + (Math.floor(Math.random() * (800 - 1 + 1)) + 1);
                bar.y = Math.floor(Math.random() * (800 - 600 + 1)) + 600;
            } else{
                bar.x += -speed;
                heart.x += -speed;
            }
        } else {
            this.add.text((window.screen.width / 2) - 350, 350 , 'bist du dumm du sollst da rueber springen', { fontSize: '32px', fill: '#000' });
        }

    }