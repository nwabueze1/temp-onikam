import { useSelector } from 'react-redux';
import { SEARCH_MENU_ITEMS, SEARCH_POSTS } from '../graphql';
import { createApolloClient } from '../../../helper';
import { KiamoniState } from '../../../components';
import { extractCurrencyToMenuItems } from '../helper';
import { CorePostFields } from '../../../models';

export const useSearchMenuItems = () => {
  const { gatewayUrl, restaurant } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const client = createApolloClient(gatewayUrl ?? '');

  return async (search: string, page: number) => {
    const menu_uuid = JSON.parse(
      JSON.stringify(restaurant?.menu?.menuItems?.[0])
    )?.menu_uuid;
    try {
      const { data, errors } = await client.query({
        query: SEARCH_MENU_ITEMS,
        variables: { menu_uuid, search, page },
      });

      if (!data || errors) {
        return undefined;
      }

      return {
        menuItems: extractCurrencyToMenuItems(data?.getMenuItems?.data),
        paginatorInfo: data?.getMenuItems?.paginatorInfo,
      };
    } catch (error) {
      //TODO: log this sentry
      return undefined;
    }
  };
};

export const useSearchPosts = () => {
  const { gatewayUrl, blog } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const client = createApolloClient(gatewayUrl ?? '');

  return async (search: string, page: number) => {
    const blog_uuid = JSON.parse(JSON.stringify(blog?.posts?.[0]))?.blog_uuid;
    try {
      const { data, errors } = await client.query({
        query: SEARCH_POSTS,
        variables: { blog_uuid, search, page },
      });
      if (!data?.getPostsByBlogUuid || errors) {
        return undefined;
      }

      return {
        posts: data?.getPostsByBlogUuid?.data?.map(
          (
            post: Omit<CorePostFields, 'featured_image'> & {
              featured_image: string;
            }
          ) => ({
            ...post,
            featured_image: JSON.parse(post?.featured_image ?? '{}'),
          })
        ),
        paginatorInfo: data?.getPostsByBlogUuid?.paginatorInfo,
      };
    } catch (error) {
      //TODO: log this sentry
      return undefined;
    }
  };
};
