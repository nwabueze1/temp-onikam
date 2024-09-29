import { gql } from '@apollo/client';

export const CORE_POST_FIELDS = gql`
  fragment CorePostFields on Post {
    uuid
    title
    featured_image
    excerpt
    published_at
    slug
  }
`;
