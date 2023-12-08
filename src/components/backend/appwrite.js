import * as Appwrite from 'appwrite';

const appwrite = new Appwrite({
  endpoint: process.env.APPWRITE_ENDPOINT,
  project: process.env.APPWRITE_PROJECT_ID,
});

export default appwrite;
