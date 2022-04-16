const db = require('../config/connection');
const { User, Product } = require('../models');
const userSeeds = require('./userData.json');
const productSeeds = require('./productData.json');
// console.log(userSeeds)
db.once('open', async () => {
  try {
    await User.deleteMany({});
    const createdUser = await User.create(userSeeds);
    await Product.deleteMany({});
    await Product.create(productSeeds);
    console.log("db seeded")
    console.log(createdUser)
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});