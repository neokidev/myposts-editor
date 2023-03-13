import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreatePostInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  published: Scalars['Boolean'];
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
};

export type CreateUserInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createUser: User;
  removePost: Post;
  removeUser: User;
  updatePost: Post;
  updateUser: User;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemovePostArgs = {
  id: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  helloWorld: Scalars['String'];
  post: Post;
  posts: Array<Post>;
  user: User;
  users: Array<User>;
};


export type QueryHelloArgs = {
  name: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type UpdatePostInput = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  posts: Scalars['Int'];
};

export type GetPostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, createdAt: any, updatedAt: any, published: boolean, title: string, content: string } };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, createdAt: any, updatedAt: any, published: boolean, title: string, content: string }> };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
  published: Scalars['Boolean'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, createdAt: any, updatedAt: any, published: boolean, title: string, content: string } };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string, createdAt: any, updatedAt: any, published: boolean, title: string, content: string } };

export type RemovePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemovePostMutation = { __typename?: 'Mutation', removePost: { __typename?: 'Post', id: string, createdAt: any, updatedAt: any, published: boolean, title: string, content: string } };

export type PostDataFragment = { __typename?: 'Post', id: string, createdAt: any, updatedAt: any, published: boolean, title: string, content: string };

export const PostDataFragmentDoc = gql`
    fragment PostData on Post {
  id
  createdAt
  updatedAt
  published
  title
  content
}
    `;
export const GetPostDocument = gql`
    query GetPost($id: String!) {
  post(id: $id) {
    ...PostData
  }
}
    ${PostDataFragmentDoc}`;

export function useGetPostQuery(options: Omit<Urql.UseQueryArgs<GetPostQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostQuery, GetPostQueryVariables>({ query: GetPostDocument, ...options });
};
export const GetPostsDocument = gql`
    query GetPosts {
  posts {
    ...PostData
  }
}
    ${PostDataFragmentDoc}`;

export function useGetPostsQuery(options?: Omit<Urql.UseQueryArgs<GetPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostsQuery, GetPostsQueryVariables>({ query: GetPostsDocument, ...options });
};
export const CreatePostDocument = gql`
    mutation CreatePost($title: String!, $content: String!, $published: Boolean!) {
  createPost(
    createPostInput: {title: $title, content: $content, published: $published}
  ) {
    ...PostData
  }
}
    ${PostDataFragmentDoc}`;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: String!, $title: String, $content: String, $published: Boolean) {
  updatePost(
    updatePostInput: {id: $id, title: $title, content: $content, published: $published}
  ) {
    ...PostData
  }
}
    ${PostDataFragmentDoc}`;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument);
};
export const RemovePostDocument = gql`
    mutation RemovePost($id: String!) {
  removePost(id: $id) {
    ...PostData
  }
}
    ${PostDataFragmentDoc}`;

export function useRemovePostMutation() {
  return Urql.useMutation<RemovePostMutation, RemovePostMutationVariables>(RemovePostDocument);
};