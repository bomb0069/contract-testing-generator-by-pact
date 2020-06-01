const { Verifier } = require('@pact-foundation/pact');
const path = require('path');


describe("Pact Verification", () => {
    it("validates the expectations of ProductService", () => {
        let opts = {
            logLevel: "INFO",
            providerBaseUrl: "http://localhost:8080",
            provider: "ProductService",
            providerVersion: "1.0.0",
            pactUrls: [
                path.resolve(__dirname, './pacts/frontendwebsite-productservice.json')
            ]
        };

        return new Verifier(opts).verifyProvider().finally();
    })
});