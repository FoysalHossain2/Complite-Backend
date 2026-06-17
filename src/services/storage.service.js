const ImageKit = require("@imagekit/nodejs");


const imagekit = new ImageKit({
    
    privateKey: "private_sg1LkZruSka2mgEZCa2+B6vHtIo="

});

async function uploadFile(buffer) {

    const result = await imagekit.client.upload({
        file: buffer,
        fileName: "image.jpg"
    })

    return result.url;
}

module.exports = uploadFile;