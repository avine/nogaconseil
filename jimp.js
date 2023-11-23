/*
 * Compress images from "sourcePath" to "targetPath".
 */

// ---- User config ----------------------------------

const filesPath = ['people.jpg', 'pexels-thirdman.jpg'];

// ---- Process images -------------------------------

const Jimp = require('jimp');

const sourcePath = 'src/resources/jimp/';
const targetPath = 'src/assets/images/';

filesPath.forEach((filePath) => {
  Jimp.read(sourcePath + filePath)
    .then((imageData) => {
      return imageData
        .cover(1000, 1000)
        .quality(80)
        .write(targetPath + filePath);
    })
    .catch((err) => {
      console.error(err);
    });
});
