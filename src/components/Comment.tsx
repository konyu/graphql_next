import { FC } from "react";
import { Comment as CommentType } from "@/gql/graphql";
import { gql } from "@apollo/client";

gql`
  fragment CommentFragment on Comment {
    name
    postId
  }
`;

export const Comment: FC<CommentType> = ({ name }) => {
  return <div>{name}</div>;
};
