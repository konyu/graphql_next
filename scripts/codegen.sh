SCHEMA_FILE=/repos/konyu/graphql_rails/contents/docs/schema.graphql
# github cliでファイルを取得する
gh api $SCHEMA_FILE -H "Accept: application/vnd.github.raw" > schema.graphql_new

# schema.graphqlが存在しない場合
if [ ! -e schema.graphql ]; then
  mv schema.graphql_new schema.graphql
  npx graphql-codegen
  return 0
fi

# schema.graphqlが存在する場合、新旧のファイルに差分があるかチェック
diff -sq schema.graphql_new schema.graphql
if [ $? -eq 1 ]; then
  rm schema.graphql
  mv schema.graphql_new schema.graphql
  npx graphql-codegen
else
  rm schema.graphql_new
fi
