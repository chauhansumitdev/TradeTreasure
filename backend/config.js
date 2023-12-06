// appwrite.js

import { Appwrite } from 'appwrite';

const appwrite = new Appwrite();

appwrite
  .setEndpoint('YOUR_APPWRITE_ENDPOINT') 
  .setProject('YOUR_APPWRITE_PROJECT_ID') 
;

export default appwrite;
