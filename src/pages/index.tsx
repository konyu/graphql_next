import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { useQuery } from "@apollo/client";
import { graphql } from "@/gql";
import { Post } from "@/components/Post";
import { CommentFragment, PostFragment } from "@/gql/graphql";

const allPostsQueryDocument = graphql(/* GraphQL */ `
  query allPosts {
    posts {
      name
      ...Post
    }
  }
`);

export default function Home() {
  const { data } = useQuery(allPostsQueryDocument);
  const posts: PostFragment[] | undefined = data?.posts;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="App">
          {posts && (
            <ul>
              {posts.map((post: PostFragment, i: number) => (
                <li key={`${i}`}>
                  <Post
                    name={post.name}
                    comments={post.comments as CommentFragment[]}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
