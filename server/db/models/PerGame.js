const Sequelize = require('sequelize');
const db = require('../db');

const PerGame = db.define('perGame', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  position: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  team: {
    type: Sequelize.STRING,
  },
  minutes: {
    type: Sequelize.DECIMAL,
  },
  fgMade: {
    type: Sequelize.DECIMAL,
  },
  fgAttempts: {
    type: Sequelize.DECIMAL,
  },
  fgPercent: {
    type: Sequelize.DECIMAL,
  },
  threePointMade: {
    type: Sequelize.DECIMAL,
  },
  threePointAttempts: {
    type: Sequelize.DECIMAL,
  },
  threePointPercent: {
    type: Sequelize.DECIMAL,
  },
  twoPointMade: {
    type: Sequelize.DECIMAL,
  },
  twoPointAttempts: {
    type: Sequelize.DECIMAL,
  },
  twoPointPercent: {
    type: Sequelize.DECIMAL,
  },
  effectiveFG: {
    type: Sequelize.DECIMAL,
  },
  freeThrowMade: {
    type: Sequelize.DECIMAL,
  },
  freeThrowAttempts: {
    type: Sequelize.DECIMAL,
  },
  freeThrowPercent: {
    type: Sequelize.DECIMAL,
  },
  oRebound: {
    type: Sequelize.DECIMAL,
  },
  dRebound: {
    type: Sequelize.DECIMAL,
  },
  totalRebound: {
    type: Sequelize.DECIMAL,
  },
  assists: {
    type: Sequelize.DECIMAL,
  },
  steals: {
    type: Sequelize.DECIMAL,
  },
  blocks: {
    type: Sequelize.DECIMAL,
  },
  turnovers: {
    type: Sequelize.DECIMAL,
  },
  fouls: {
    type: Sequelize.DECIMAL,
  },
  points: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = PerGame;
