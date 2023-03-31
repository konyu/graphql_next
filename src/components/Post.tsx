import { FC } from "react";
import { Post as PostType, Comment as CommentType } from "@/gql/graphql";
import { Comment } from "@/components/Comment";

import { gql } from "@apollo/client";

gql`
  fragment PostFragment on Post {
    name
    comments {
      id
      ...CommentFragment
    }
  }
`;

export const Post: FC<PostType> = ({ name, comments }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
      </div>
      {comments && (
        <ul>
          {comments.map((comment: CommentType, i: number) => (
            <li key={`${i}`}>
              <Comment name={comment.name} postId={comment.postId} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
