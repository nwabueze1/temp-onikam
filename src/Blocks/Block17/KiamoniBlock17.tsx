import { FC, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBlogPosts, useGetCategoryPosts } from './hooks';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import {
  BlockProvider,
  Button,
  Dropdown,
  KiamoniState,
} from '../../components';
import { useGetColor, useLayoutParameter } from '../../hooks';
import { useKiamoniBlock17Styles } from './styles';
import { DisplayBlogCard } from './components';
import clx from 'classnames';
import {
  sortDataByName,
  dropDownList,
  removeDuplicatesByTitle,
} from './helper';
import { BlogCategories, DisplayDropdownList } from './components';
import block17 from '../../mappings/block17';

const { uuid: BLOCK_UUID } = block17;

export const KiamoniBlock17: FC<KiamoniPropType> = ({
  mode = 'view',
  configuration,
  layouts,
  index,
  handleSelect,
  activeElement,
  uuid,
}) => {
  const { blog } = useSelector<KiamoniState, KiamoniState>((store) => store);
  const dispatch = useDispatch();
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const buttonConfig = useGetColor(configuration as CustomThemeProps, 'button');
  const classes = useKiamoniBlock17Styles(mainConfig as CustomThemeProps);
  const { selectedLayout, layoutClass, xmd } = useLayoutParameter(layouts);
  const [selectedOption, setSelectedOption] = useState({ name: '', uuid: '' });
  const [operation, setOperation] = useState('');
  const [activeCategory, setActiveCategory] = useState({
    type: '',
    name: 'All',
    uuid: '',
  });
  const blog_uuid = useMemo(() => {
    if (!blog?.posts || blog?.posts?.length === 0) return undefined;

    return JSON.parse(JSON.stringify(blog?.posts))[0]?.blog_uuid;
  }, []);
  const getBlogPosts = useGetBlogPosts();
  const getCategoryPosts = useGetCategoryPosts();
  const key = 'blocks.' + String(index);

  const fetchPosts = async (
    all: boolean,
    isLoadMore: boolean,
    category_uuid: string | null = null
  ) => {
    setOperation(isLoadMore ? 'loading_more_posts' : 'fetching_new_posts');
    const paginatorInfo = blog?.paginatorInfo;
    const response = all
      ? await getBlogPosts(
          blog_uuid as string,
          isLoadMore ? (paginatorInfo?.currentPage as number) + 1 : 1
        )
      : await getCategoryPosts(
          category_uuid ?? (activeCategory?.uuid as string),
          isLoadMore ? (paginatorInfo?.currentPage as number) + 1 : 1
        );

    if (response) {
      const { posts, paginatorInfo } = response;
      const updatedPosts = isLoadMore
        ? [...(blog?.posts ?? []), ...posts]
        : posts;
      console.log(posts);
      dispatch({ type: 'GET_POSTS', payload: updatedPosts });
      dispatch({ type: 'SET_BLOG_PAGINATION', payload: paginatorInfo });
    }
    setOperation('');
  };

  const handleActiveCategory = (type: string, name: string, uuid: string) => {
    setActiveCategory({ type, name, uuid });
    if (name.toLowerCase() === 'all') {
      fetchPosts(true, false);
    } else {
      fetchPosts(false, false, uuid);
    }
  };

  const isDisable =
    (blog?.paginatorInfo?.currentPage ?? 0) <
    (blog?.paginatorInfo?.lastPage ?? 0);

  const checkLayoutPosition = ['layout-2', 'layout-3', 'layout-4'].includes(
    selectedLayout as string
  )
    ? 'horizontal'
    : 'vertical';
  const filteredPosts = removeDuplicatesByTitle(blog?.posts ?? []);
  const handleOptionSelect = (type: string, item: string, uuid: string) => {
    type === 'dropDownList'
      ? setSelectedOption({ name: item, uuid })
      : setActiveCategory({ type, name: item, uuid });
  };

  const allCategories = [
    { name: 'All', uuid: '' },
    ...(blog?.categories ?? []),
  ];

  const handleLoadMore = () => {
    fetchPosts(activeCategory.name.toLowerCase() === 'all', true);
  };

  const getLoader = () => {
    return <div className={classes.loader} />;
  };

  return (
    <BlockProvider
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
      block_uuid={BLOCK_UUID}
    >
      <section
        className={clx(
          classes.root,
          mode === 'edit' &&
            activeElement === key &&
            classes.block17ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-info={uuid}
      >
        <div className={classes.container}>
          <div className={classes.categoryContainer}>
            <div className={classes.blogCategoriesContainer}>
              {!xmd ? (
                <BlogCategories
                  activeCategory={activeCategory}
                  handleActive={handleActiveCategory}
                  categories={allCategories}
                />
              ) : (
                <Dropdown selectedOption={activeCategory}>
                  <DisplayDropdownList
                    dropDownList={allCategories}
                    handleOptionSelect={handleActiveCategory}
                    type={'allCategories'}
                  />
                </Dropdown>
              )}
            </div>
            <div className={classes.dropdownContainer}>
              <Dropdown selectedOption={selectedOption} position={'right'}>
                <DisplayDropdownList
                  dropDownList={dropDownList}
                  handleOptionSelect={handleOptionSelect}
                  type={'dropDownList'}
                />
              </Dropdown>
            </div>
          </div>
          <h1 className={classes.blogContainerHeader}>
            {activeCategory.name === 'All'
              ? 'All Posts'
              : activeCategory.name.charAt(0).toUpperCase() +
                activeCategory.name.slice(1).toLowerCase()}
          </h1>
          {operation === 'fetching_new_posts' && (
            <div className={classes.spinnerContainer}>{getLoader()}</div>
          )}
          {filteredPosts?.length === 0 && !operation && (
            <div className={classes.spinnerContainer}>No Posts</div>
          )}
          <div className={clx(classes.blogContainer, layoutClass)}>
            {DisplayBlogCard(
              sortDataByName(filteredPosts, selectedOption.name),
              checkLayoutPosition,
              layoutClass ?? '',
              operation === 'fetching_new_posts',
              mode
            )}
          </div>
          {isDisable && operation !== 'fetching_new_posts' && (
            <div onClick={handleLoadMore} className={classes.buttonContainer}>
              <Button type="secondary" mode={mode}>
                <p>
                  {operation === 'loading_more_posts' && (
                    <span className="spinner" />
                  )}
                  Load More
                </p>
              </Button>
            </div>
          )}
        </div>
      </section>
    </BlockProvider>
  );
};
