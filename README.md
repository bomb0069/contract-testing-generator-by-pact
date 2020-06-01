# Project Test and Stub by Contract with Pact

## Start Stub Server from Contract Files

reference project from <https://github.com/pact-foundation/pact-stub-server.git>

```sh
docker pull pactfoundation/pact-stub-server
docker run -t -p 8080:8080 -v "$(pwd)/pacts/:/app/pacts" pactfoundation/pact-stub-server -p 8080 -d pacts
```

## Run API Test from Contract Files

reference project from <https://github.com/pact-foundation/pact-workshop-js/tree/step4#step-4---verify-the-provider>

```sh
npm install
npx jest verify-provider.pack.test.js
```
