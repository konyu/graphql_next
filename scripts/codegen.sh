SCHEMA_FILE=/repos/konyu/graphql_rails/contents/docs/schema.graphql

if [ -e schema.graphql ]; then
  rm schema.graphql
fi

gh api $SCHEMA_FILE -H "Accept: application/vnd.github.raw" > schema.graphql
npx graphql-codegen