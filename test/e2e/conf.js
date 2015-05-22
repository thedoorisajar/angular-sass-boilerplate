exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // URL of the app you want to test.
    baseUrl: 'http://localhost:3000',

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    specs: ['spec.js']
};