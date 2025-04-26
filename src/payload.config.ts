const { buildConfig } = require('payload/config');
const path = require('path');
const Users = require('./collections/Users');
const Pages = require('./collections/Pages');

const config = buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Pages,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: ['http://localhost:3000'],
  csrf: ['http://localhost:3000'],
});

module.exports = config; 