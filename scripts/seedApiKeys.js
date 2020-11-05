/* eslint-disable no-console */
const crypto = require('crypto')
const MongoLib = require('../lib/mongo')

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:movies',
  'create:movies',
  'update:movies',
  'delete:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies'
];

const publicScopes = [
  'signin:auth',
  'signup:auth',
  'read:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies'
];

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes
  }
];

function generateRandomToken() {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex')
}

async function seedApiKeys() {
  try {
    const mongoDB = new MongoLib()

    const promises = apiKeys.map(async apiKey => {
      await mongoDB.create('api-keys', apiKey)
    })

    await Promise.all(promises)
    console.log(`${promises.length} API Keys created Succesfully`)
    process.exit(0)

  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    process.exit(1)
  }
}

seedApiKeys()