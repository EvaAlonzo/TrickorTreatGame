
        const game = {
            isRunning: true,

            init() {
                game.canvas = document.getElementById("canvas");
                game.context = game.canvas.getContext("2d");
                game.loader = loader; //const para cuando algo ya esta cargado
                game.loader.init();

                this.sonic = new Sonic(80, 50, game.context, loader.images.sonic);
                //this.coin = new Coin(300, 20, game.context, loader.images.coin);

                // Start game
                game.drawingLoop();
            },

            drawingLoop() {
                // Clear canvas
                game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
                // Draw and update frame index
                game.sonic.render();
                game.sonic.update();

                //game.coin.render();
                //game.coin.update();

                if (game.isRunning) {
                    requestAnimationFrame(game.drawingLoop);
                }
            },
        };

        const loader = {
            count: 0,
            images: {},

            add(title, src) {
                const image = new Image();
                image.src = src;
                this.images[title] = image;
                this.count++;
            },

            init() {
                loader.add('sonic', Sonic.src);
                //loader.add('coin', Coin.src);
            }
        };

        window.addEventListener("load", () => {
            game.init();
        });
