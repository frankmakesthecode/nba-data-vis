'use strict';

const {
  db,
  models: { User, PerGame },
} = require('../server/db');
const per_game = require('./per_game');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Player Per Game Stats
  const perGame = await Promise.all(
    per_game.map((data) => {
      PerGame.create({
        name: data.Player,
        position: data.Pos,
        age: data.Age,
        team: data.Tm,
        minutes: data.MP,
        fgMade: data.FG,
        fgAttempts: data.FGA,
        fgPercent: data['FG%'],
        threePointMade: data['3P'],
        threePointAttempts: data['3PA'],
        threePointPercent: data['3P%'],
        twoPointMade: data['2P'],
        twoPointAttempts: data['2PA'],
        twoPointPercent: data['2P%'],
        effectiveFG: data['eFG%'],
        freeThrowMade: data.FT,
        freeThrowAttempts: data.FTA,
        freeThrowPercent: data['FT%'],
        oRebound: data.ORB,
        dRebound: data.DRB,
        totalRebound: data.TRB,
        assists: data.AST,
        steals: data.STL,
        blocks: data.BLK,
        turnovers: data.TOV,
        fouls: data.PF,
        points: data.PTS,
      });
    })
  );

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${perGame.length} players`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
