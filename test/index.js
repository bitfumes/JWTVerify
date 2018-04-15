const VerifyJWT = require('../index');
const chai = require('chai');
const localstorage = require('mock-local-storage');
const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTUxNjIzOTAyMn0.lXqtfybDr0dJlgL9ca8xY889GkUZo6HKlPst8yqF6Ns';

describe('#token.get', function () {
    it('Return null if token is not in localstorage', function () {
        chai.assert.notExists(VerifyJWT.get())
    });
    it('Return token if token is exist in localstorage', function () {
        VerifyJWT.set(mockToken)
        chai.assert.equal(VerifyJWT.get(), mockToken)
    });
});

describe('#verifyJWT.remove', function () {
    it('Remove the token from localstorage', function () {
        VerifyJWT.set(mockToken);
        VerifyJWT.remove();
        chai.assert.notExists(VerifyJWT.get());
    });
});

describe('#verifyJWT.isValid', function () {
    it('Verify token in localstorage', function () {
        VerifyJWT.set(mockToken);
        chai.assert.isTrue(VerifyJWT.isValid());
    });
});

