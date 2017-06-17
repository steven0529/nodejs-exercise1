var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var api = require('../controller/api');

router.get('/', api.getContacts);
router.post('/', upload.any(), api.saveContact);
router.get('/:id', api.findContactById);
router.put('/:id', upload.any(), api.editContactById);
router.delete('/:id', api.deleteContactById);

module.exports = router;