const router = require('express').Router();

const documentController = require('../controllers/DocumentController');

const multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
});
const auth = require('../middleware/auth');

// router.post('/upload',auth, upload.single('file'), documentController.upload)

router.post('/upload', auth, upload.single('file'), documentController.upload)
router.post('/download', auth, upload.single('file'), documentController.download)
router.post('/getAllDocumentMetadataOfClass', auth, documentController.getAllDocumentMetadataOfClass)

module.exports = router;