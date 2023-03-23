import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import { Post, Comment } from "../gql/graphql";
// import Film from "../components/File";

const allPostsQueryDocument = graphql(/* GraphQL */ `
  query allPosts {
    posts {
      id
      name
      comments {
        id
        postId
        name
      }
    }
  }
`);

export default function Home() {
  const { data } = useQuery(allPostsQueryDocument);

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
          {data && (
            <ul>
              {data.posts.map((post: Post, i: number) => (
                <li key={`${i}`}>
                  <div>{post.name}</div>
                  {post.comments?.map((comment: Comment, j: number) => (
                    <div key={`${j}`}>{comment.name}</div>
                  ))}
                  <div></div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
