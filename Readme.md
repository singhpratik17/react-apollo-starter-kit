## Environment:
- Client (React, apollo-client) : `http://localhost:3000` 
- GraphQl Server (Node, graphQl) : `http://localhost:8081`

## Scripts:
- Install dependencies - `yarn`
- Start app in dev mode - `yarn dev` (Starts client, node server)

#### Individual commands:
- Start client in dev mode - `yarn client-dev`
- Start server in dev mode - `yarn server-dev`

## Build instructions - CLIENT:
* Update SERVER_URL in envConstants.js - `client/src/`.
Command - `yarn client-build` - Creates a build folder inside client dir.


## Build instructions - SERVER:
* Update env vars in .env - `server/`.
Command - `yarn server-build` - Creates a build folder inside server dir.

