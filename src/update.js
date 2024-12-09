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
                    player.setVelocityY(-2500);
                    player.body.gravity.y = 6000;
                    console.log('jump')
                    firstSpace = true;
                    this.touchDown = false;
                }

            this.background.setTilePosition(this.cameras.main.scrollX);
            this.ground_img.setTilePosition(this.cameras.main.scrollX);
            elapsedSeconds = Math.floor((Date.now() - startTime) / 100);
            if (firstSpace) {scoreText.setText('Score: ' + elapsedSeconds);}
            bar.x += -speed;
        } else {
            this.add.text((window.screen.width / 2) - 350, 350 , 'bist du dumm du sollst da rueber springen', { fontSize: '32px', fill: '#000' });
        }

    }