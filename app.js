const fs = require("fs");
const path = require("path");

// *** GET ORIGINAL PHOTOS FILE NAMES ***

const originalPhotosDir = path.join(__dirname, "./original-photos");
const originalPhotosFullName = fs.readdirSync(originalPhotosDir);  
const originalPhotos = originalPhotosFullName.map((file) => {
    return file.split('.').slice(0, -1).join('.');
})

// *** GET SELECTED PHOTOS FILE NAMES ***
const selectedPhotosDir = path.join(__dirname, "./selected-photos");
const selectedPhotosFullName = fs.readdirSync(selectedPhotosDir);
const selectedPhotos = selectedPhotosFullName.map((file) => {
    return file.split('.').slice(0, -1).join('.');
})


// ********** DELETE NON SELECTED PHOTOS FROM ORIGINAL PHOTOS *********
for (const originalPhoto of originalPhotos) {
    const foundPhoto = selectedPhotos.find((file) => file == originalPhoto);
    if (!foundPhoto) {
        fs.unlinkSync(path.join(__dirname, (`./original-photos/${originalPhoto}.NEF`)));
    }
}

console.log("Non selected photos successfully erased.")