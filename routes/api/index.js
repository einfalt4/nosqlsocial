const router = require('express').Router();
const thoughtsRoutes = require('./ThoughtsRoutes');
const userRoutes = require('./UserRoutes');

router.use('/ThoughtsRoutes', thoughtsRoutes);
router.use('/UserRoutes', userRoutes);

module.exports = router;
