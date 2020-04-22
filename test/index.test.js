require('../register');

const assert = require('assert');
const { readFileSync } = require('fs');

describe('GraphQL Node Import', () => {
  it('should import correct definitions', () => {
    const typeDefs = require('./test.graphql');
    assert(typeDefs === readFileSync(require.resolve('./test.graphql'), 'utf8'));
  });
});
