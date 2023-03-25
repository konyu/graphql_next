
export const aComment = (overrides?: Partial<Comment>): Comment => {
    return {
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : "1992-09-11T10:13:06.000Z",
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '6046ffb2-6bf2-4352-8bd1-399138ba33c0',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'est',
        postId: overrides && overrides.hasOwnProperty('postId') ? overrides.postId! : 7777,
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : "2000-03-08T05:06:22.000Z",
    };
};

export const aCreateCommentInput = (overrides?: Partial<CreateCommentInput>): CreateCommentInput => {
    return {
        clientMutationId: overrides && overrides.hasOwnProperty('clientMutationId') ? overrides.clientMutationId! : 'reprehenderit',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'veritatis',
        postId: overrides && overrides.hasOwnProperty('postId') ? overrides.postId! : 945,
    };
};

export const aCreateCommentPayload = (overrides?: Partial<CreateCommentPayload>): CreateCommentPayload => {
    return {
        clientMutationId: overrides && overrides.hasOwnProperty('clientMutationId') ? overrides.clientMutationId! : 'velit',
        comment: overrides && overrides.hasOwnProperty('comment') ? overrides.comment! : aComment(),
    };
};

export const aCreatePostInput = (overrides?: Partial<CreatePostInput>): CreatePostInput => {
    return {
        clientMutationId: overrides && overrides.hasOwnProperty('clientMutationId') ? overrides.clientMutationId! : 'consequuntur',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'rerum',
    };
};

export const aCreatePostPayload = (overrides?: Partial<CreatePostPayload>): CreatePostPayload => {
    return {
        clientMutationId: overrides && overrides.hasOwnProperty('clientMutationId') ? overrides.clientMutationId! : 'voluptatum',
        post: overrides && overrides.hasOwnProperty('post') ? overrides.post! : aPost(),
    };
};

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
    return {
        createComment: overrides && overrides.hasOwnProperty('createComment') ? overrides.createComment! : aCreateCommentPayload(),
        createPost: overrides && overrides.hasOwnProperty('createPost') ? overrides.createPost! : aCreatePostPayload(),
    };
};

export const aPost = (overrides?: Partial<Post>): Post => {
    return {
        comments: overrides && overrides.hasOwnProperty('comments') ? overrides.comments! : [aComment()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : "2005-02-03T09:05:48.000Z",
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f81fef6f-cb78-4de4-a2be-00983c978adf',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'qui',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : "2001-01-17T00:21:21.000Z",
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        posts: overrides && overrides.hasOwnProperty('posts') ? overrides.posts! : [aPost()],
    };
};
