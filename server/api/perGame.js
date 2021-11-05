const router = require('express').Router();
const {
  models: { PerGame },
} = require('../db');
module.exports = router;

// api/perGame/
router.get('/', async (req, res, next) => {
  try {
    const players = await PerGame.findAll();
    res.status(200).json(players);
  } catch (error) {
    next(error);
  }
});
