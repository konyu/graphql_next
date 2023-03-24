import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        scalars: { ISO8601DateTime: "string", ISO8601Date: "string" },
      },
    },
    "./src/gql/mocks.ts": {
      plugins: [
        {
          "typescript-mock-data": {
            scalars: {
              ISO8601DateTime: "moment",
              ISO8601Date: "date",
            },
          },
        },
      ],
    },
  },
};

export default config;
