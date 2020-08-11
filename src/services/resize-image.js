
const Compress = require('compress.js')
const uuid = require('uuid')

const resizeImage = async(file) => {
    
    const compress = new Compress()
    const resizedImg = await compress.compress([file], {
      size: 1, // the max size in MB, defaults to 2MB
      quality: 0.75, // the quality of the image, max is 1,
      maxWidth: 500, // the max width of the output image, defaults to 1920px
      maxHeight: 200, // the max height of the output image, defaults to 1920px
      resize: true // defaults to true, set false if you do not want to resize the image width and height
    })

    const img = resizedImg[0];
    const base64str = img.data
    const imgExt = img.ext
    const resizedFile = Compress.convertBase64ToFile(base64str, imgExt )
    const newFile = new File([resizedFile], `${uuid.v1()}.jpg`, {type: imgExt});
    return newFile
  }

  export {
    resizeImage
  } 