import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8000/graphql',
  documents: 'src/**/*.graphql',
  // ignoreNoDocuments: true,
  generates: {
    // 'src/gql/': {
    //   preset: 'client',
    //   plugins: [],
    // },
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
}

export default config
