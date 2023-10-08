import { readFileSync } from 'fs'
import { ApolloServer } from '@apollo/server'

import { mutations as authMutations } from  './modules/auth'

const typeDefs = readFileSync(new URL('../schema.graphql', import.meta.url)).toString('utf-8')

const resolvers = {
    Mutation: {
        ...authMutations,
    },

    Query: {
        users: () => ([ {email: 'user@example.com' }])
    }
};

export const server = new ApolloServer({
    typeDefs,
    resolvers,
});

