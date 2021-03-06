let express = require('express');
let router = new express.Router();
let accountController = require('../controllers/accountController');

router.use(function(req, res, next) {
    res.locals.error_message = req.flash('error_msg');
    res.locals.success_message = req.flash('success_msg');
    res.locals.warning_message = req.flash('warning_msg');
    res.locals.sessStart_msg = req.flash('sessStart_msg');
    res.locals.sessEnd_msg = req.flash('sessEnd_msg');
    res.locals.otherSess_msg = req.flash('otherSess_msg');
    res.locals.validationErrors = req.flash('validationErrors');
    return next();
});

// Registering all routes
router.use('/', accountController.getUser);
router.use('/account', require('./account'));
router.use('/catalog', require('./catalog'));
router.use('/admin', accountController.ensureAdministrator, require('./admin'));
router.use('/client', accountController.ensureClient, require('./client'));

router.get('/',
    function(req, res) {
        res.render('pages/index');
});

router.use(function(req, res, next) {
    res.status(404);
    res.render('pages/404');
});

module.exports = router;
