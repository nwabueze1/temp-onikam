import { gql } from '@apollo/client';

export const SEARCH_MENU_ITEMS = gql`
  query GqlSearchMenuItems($menu_uuid: ID, $search: String, $page: Int) {
    getMenuItems(
      input: { menu_uuid: $menu_uuid, search: $search, first: 9, page: $page }
    ) {
      data {
        uuid
        price
        name
        image
        slug
        menu {
          restaurant {
            bank_info {
              currency
            }
          }
        }
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;

export const SEARCH_POSTS = gql`
  query GqlSearchPosts($blog_uuid: ID, $search: String, $page: Int) {
    getPostsByBlogUuid(
      input: { blog_uuid: $blog_uuid, search: $search, first: 9, page: $page }
    ) {
      data {
        uuid
        title
        featured_image
        excerpt
        published_at
        slug
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;
