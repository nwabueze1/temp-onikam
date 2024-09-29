import { useDispatch, useSelector } from 'react-redux';
import { GET_POSTS_BY_CATEGORY_UUID, GET_POSTS_BY_BLOG_UUID } from '../graphql';
import { createApolloClient } from '../../../helper';
import { KiamoniState } from '../../../components';
import { CorePostFields } from '../../../models';

export const useGetBlogPosts = () => {
  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const client = createApolloClient(gatewayUrl ?? '');
  const dispatch = useDispatch();

  return async (blog_uuid: string, page: number) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const { data, errors } = await client.query({
        query: GET_POSTS_BY_BLOG_UUID,
        variables: { blog_uuid, page },
      });
      if (!data?.getPostsByBlogUuid || errors) return undefined;

      dispatch({ type: 'SET_LOADING', payload: false });

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
      dispatch({ type: 'SET_LOADING', payload: false });
      return undefined;
    }
  };
};

export const useGetCategoryPosts = () => {
  const dispatch = useDispatch();
  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const client = createApolloClient(gatewayUrl ?? '');

  return async (category_uuid: string, page: number) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const { data, errors } = await client.query({
        query: GET_POSTS_BY_CATEGORY_UUID,
        variables: { category_uuid, page },
      });
      if (!data?.getPostsByCategoryUuid || errors) return undefined;

      dispatch({ type: 'SET_LOADING', payload: false });

      return {
        posts: data?.getPostsByCategoryUuid?.data?.map(
          (
            post: Omit<CorePostFields, 'featured_image'> & {
              featured_image: string;
            }
          ) => ({
            ...post,
            featured_image: JSON.parse(post?.featured_image ?? '{}'),
          })
        ),
        paginatorInfo: data?.getPostsByCategoryUuid?.paginatorInfo,
      };
    } catch (error) {
      //TODO: log this sentry
      dispatch({ type: 'SET_LOADING', payload: false });
      return undefined;
    }
  };
};
