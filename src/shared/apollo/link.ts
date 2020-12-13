import { ApolloLink, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({ uri: `${process.env.REACT_APP_API_URL}/graphql/` })

export const link = ApolloLink.from([
  httpLink,
])
