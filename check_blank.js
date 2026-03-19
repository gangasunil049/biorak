const fs = require('fs');
const { PNG } = require('pngjs');

fs.createReadStream('screenshot.png')
    .pipe(new PNG())
    .on('parsed', function () {
        let empty = true;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const idx = (this.width * y + x) << 2;
                // Non-white pixel
                if (this.data[idx] < 250 || this.data[idx + 1] < 250 || this.data[idx + 2] < 250) {
                    empty = false;
                    break;
                }
            }
            if (!empty) break;
        }
        console.log("Is screenshot purely empty/white?", empty);
    });
