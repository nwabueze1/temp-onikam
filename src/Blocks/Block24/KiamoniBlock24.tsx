import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useKiamoniBlock24Styles } from './styles';
import { useGetColor } from '../../hooks';
import { capitalizeEveryWord, getCurrency } from '../../helper';
import {
  BlockProvider,
  Button,
  FeatureCard,
  KiamoniState,
} from '../../components';
import { useSearchPosts, useSearchMenuItems } from './hooks';
import { DisplayBlogCard } from './components';
import clx from 'classnames';
import block24 from '../../mappings/block24';

const { uuid: BLOCK_UUID } = block24;

export const KiamoniBlock24: FC<KiamoniPropType> = ({
  configuration,
  mode = 'view',
  uuid,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const buttonConfig = useGetColor(configuration as CustomThemeProps, 'button');
  const classes = useKiamoniBlock24Styles(mainConfig as CustomThemeProps);
  const { restaurant, blog } = useSelector<KiamoniState, KiamoniState>(
    (state) => ({ restaurant: state?.restaurant, blog: state?.blog })
  );
  const [operation, setOperation] = useState('');
  const dispatch = useDispatch();
  const menuItems = restaurant?.menu?.menuItems;
  const menuPaginatorInfo = restaurant?.menu?.paginatorInfo;
  const posts = blog?.posts;
  const postsPaginatorInfo = blog?.paginatorInfo;
  const [searchValue, setSearchValue] = useState('');

  const searchPosts = useSearchPosts();
  const searchMenuItems = useSearchMenuItems();

  const loadMoreMenuItems = async () => {
    setOperation('search_menu_items');
    const response = await searchMenuItems(
      searchValue,
      (menuPaginatorInfo?.currentPage as number) + 1
    );

    if (response) {
      const { menuItems: fetchedMenuItems, paginatorInfo } = response;
      dispatch({
        type: 'GET_MENU_ITEMS',
        payload: [...(menuItems ?? []), ...fetchedMenuItems],
      });
      dispatch({ type: 'SET_MENU_PAGINATION', payload: paginatorInfo });
    }
    setOperation('');
  };

  const loadMorePosts = async () => {
    setOperation('search_posts');
    const response = await searchPosts(
      searchValue,
      (postsPaginatorInfo?.currentPage as number) + 1
    );

    if (response) {
      const { posts: fetchedPosts, paginatorInfo } = response;
      dispatch({
        type: 'GET_POSTS',
        payload: [...(posts ?? []), ...fetchedPosts],
      });
      dispatch({ type: 'SET_BLOG_PAGINATION', payload: paginatorInfo });
    }

    setOperation('');
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchValue(params.get('query') ?? '');
  }, []);

  const getDishes = () => {
    return (menuItems ?? [])?.map((item, i: number) => {
      return (
        <div key={i} className={'cardBorder'}>
          <FeatureCard
            rating={5}
            dish={item?.image}
            price={item?.price}
            dishName={item?.name}
            favorite={true}
            link={item?.slug}
            currency={getCurrency(
              item?.menu?.restaurant?.bank_info?.currency ?? ''
            )}
            mode={mode}
          />
        </div>
      );
    });
  };

  return (
    <BlockProvider
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
      block_uuid={BLOCK_UUID}
    >
      <section className={classes.root} data-uuid={uuid}>
        <div className={classes.container}>
          <h1 className={classes.header}>
            <span>Search Results for:</span>
            <span>"{capitalizeEveryWord(searchValue)}"</span>
          </h1>
          <div className={classes.boxHeader}>
            <p>Dishes</p>
          </div>
          <div
            className={clx(classes.itemsContainer, classes.itemsContainerMenu)}
          >
            {(menuItems ?? []).length > 0 ? (
              <div className={classes.dishContainer}>{getDishes()}</div>
            ) : (
              <p className={classes.noMenu}>No Dishes available</p>
            )}
            {(menuPaginatorInfo?.currentPage as number) <
              (menuPaginatorInfo?.lastPage as number) && (
              <div
                className={classes.loadMoreParent}
                onClick={loadMoreMenuItems}
              >
                <Button type="tertiary" mode={mode}>
                  <p>
                    {operation === 'search_menu_items' && (
                      <span className="spinner" />
                    )}
                    Load More Results
                  </p>
                </Button>
              </div>
            )}
          </div>
          <div className={classes.boxHeader}>
            <p>Posts</p>
          </div>
          <div className={classes.itemsContainer}>
            {(posts ?? [])?.length === 0 && (
              <div className={classes.spinnerContainer}>No Posts available</div>
            )}
            <div className={classes.blogContainer}>
              {DisplayBlogCard(posts ?? [], 'vertical', 'layout_1', mode)}
            </div>

            {(postsPaginatorInfo?.currentPage as number) <
              (postsPaginatorInfo?.lastPage as number) && (
              <div
                className={clx(
                  classes.loadMoreParent,
                  classes.loadMoreParentBlog
                )}
                onClick={loadMorePosts}
              >
                <Button type="tertiary" mode={mode}>
                  <p>
                    {operation === 'search_posts' && (
                      <span className="spinner" />
                    )}
                    Load More Results
                  </p>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
