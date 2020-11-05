/* eslint-disable no-console */
const bcrypt = require('bcrypt');
const MongoLib = require('../lib/mongo');
const { config } = require('../config/index');

const users = [
  {
    email: 'root@undefined.sh',
    name: 'ROOT',
    password: config.defaultAdminPassword,
    isAdmin: true,
  },
  {
    email: 'jose@undefined.sh',
    name: 'Jose Maria',
    password: config.defaultUserPassword,
  },
  {
    email: 'maria@undefined.sh',
    name: 'Maria Jose',
    password: config.defaultUserPassword,
  },
];

async function createUsers(mongoDB, user) {
  const { email, name, password, isAdmin } = user;
  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUserId = await mongoDB.create('users', {
    name,
    email,
    password: hashedPassword,
    isAdmin: Boolean(isAdmin),
  });

  return createdUserId;
}

async function seedUsers() {
  try {
    const mongoDB = new MongoLib();

    const promises = users.map(async (user) => {
      const createdUserId = await createUsers(mongoDB, user);
      console.log(`User created with id: ${createdUserId}`);
    });

    await Promise.all(promises);
    return process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

seedUsers();
