import { FC } from "react";
import { CommentFragment } from "@/gql/graphql";
import { Comment } from "@/components/Comment";

import { gql } from "@apollo/client";

gql`
  fragment Post on Post {
    name
    comments {
      ...Comment
    }
  }
`;

type Props = {
  name: string;
  comments: CommentFragment[];
};

export const Post: FC<Props> = ({ name, comments }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
      </div>
      {comments && (
        <ul>
          {comments.map((comment: CommentFragment, i: number) => (
            <li key={`${i}`}>
              <Comment name={comment.name} postId={comment.postId} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
