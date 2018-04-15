# Tymon JWT-auth Verification
=========================
This package will verify the authenticity of JWT in Front End, given by Tymon JWT-auth on laravel.

## Installation
    npm i bitfumes-jwt-verify --save

## Usage
    const VerifyJWT = require('../index');
    VerifyJWT.handle(token)  // Set the token in localstorage
    // To remove token
    VerifyJWT.remove()

    // To get token from localstorage
    VerifyJWT.get()

    // Verify that token is valid
    VerifyJWT.isValid()

## Tests
    npm test

## Contributing
    Sarthak Shrivastava - Full stack web developer from Bitfumes