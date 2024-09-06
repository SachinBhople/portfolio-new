const multer = require("multer")
const path = require("path")

const profileStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        const fn = Date.now() + path.extname(file.originalname)
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        let des = "uploads"
        cb(null, des)
    }
})

const upload = multer({ storage: profileStorage }).single

module.exports = upload