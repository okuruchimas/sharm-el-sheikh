import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "gql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
      presetConfig: {
        dedupeFragments: true,
        fragmentMasking: false,
      },
      plugins: [],
    },
  },
};

export default config;
