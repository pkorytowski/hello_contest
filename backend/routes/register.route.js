const {Router} = require('express');
const { registerController } = require('../controllers');


const router = Router();

router.post('/', registerController.register);

module.exports = router;