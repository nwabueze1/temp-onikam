import { gql } from '@apollo/client';
import { CORE_POST_FIELDS } from '../../../models';
import { CORE_PAGINATOR_INFO_FIELDS } from '../../../models';

export const GET_POSTS_BY_BLOG_UUID = gql`
  ${CORE_PAGINATOR_INFO_FIELDS}
  ${CORE_POST_FIELDS}
  query GqlGetPostsByBlogUuid($blog_uuid: ID, $page: Int!) {
    getPostsByBlogUuid(input: { blog_uuid: $blog_uuid, page: $page, first: 9 }) {
      data {
        ...CorePostFields
      }
      paginatorInfo {
        ...CorePaginatorInfo
      }
    }
  }
`;

export const GET_POSTS_BY_CATEGORY_UUID = gql`
  ${CORE_PAGINATOR_INFO_FIELDS}
  ${CORE_POST_FIELDS}
  query GqlGetPostsByCategoryUuid($category_uuid: ID, $page: Int!) {
    getPostsByCategoryUuid(input: { category_uuid: $category_uuid, page: $page, first: 9 }) {
      data {
        ...CorePostFields
      }
      paginatorInfo {
        ...CorePaginatorInfo
      }
    }
  }
`;
