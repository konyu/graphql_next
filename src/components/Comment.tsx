import { FC } from "react";
import { CommentFragment } from "@/gql/graphql";
import { gql } from "@apollo/client";

gql`
  fragment Comment on Comment {
    name
    postId
  }
`;

export const Comment: FC<CommentFragment> = ({ name, postId }) => {
  return <div>{name}</div>;
};
