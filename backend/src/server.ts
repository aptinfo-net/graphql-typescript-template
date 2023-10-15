import { readFileSync } from 'fs'
import { ApolloServer } from '@apollo/server'

import { mutations as authMutations } from  './modules/auth'
import { queries as sensorQueries } from './modules/sensor'

const typeDefs = readFileSync(new URL('../schema.graphql', import.meta.url)).toString('utf-8')

const resolvers = {
    Mutation: {
        ...authMutations,
    },

    Query: {
        users: () => ([ {email: 'user@example.com' }]),
	...sensorQueries
    }
};

export const server = new ApolloServer({
    typeDefs,
    resolvers,
});

