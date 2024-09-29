import { useGetColor, useLayoutParameter } from '../../hooks';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { RelatedCards, TagCards } from './components';
import { useKiamoniBlock18Styles } from './styles';
import { FC, useEffect } from 'react';
import { BlockProvider } from '../../components';
import { HeaderComponent } from './components';
import clx from 'classnames';
import { CorePostFields } from '../../models';
import { useRecordPostView, formatDate } from '../../helper';
import block18 from '../../mappings/block18';

const { uuid: BLOCK_UUID } = block18;

export const KiamoniBlock18: FC<KiamoniPropType> = ({
  mode = 'view',
  content,
  layouts,
  configuration,
  index,
  handleSelect,
  activeElement,
  uuid,
}) => {
  const key = 'blocks.' + String(index);

  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const classes = useKiamoniBlock18Styles(mainConfig as CustomThemeProps);
  const { layoutClass } = useLayoutParameter(layouts);
  const recordPostView = useRecordPostView();

  useEffect(() => {
    recordPostView(content?.post?.uuid);
  }, []);

  const isHeader = ['layout_5', 'layout_4'].includes(layoutClass as string);

  const blogData = content?.post as CorePostFields;

  const headerData = {
    title: blogData?.title,
    date: formatDate(blogData?.published_at),
    category_name: blogData?.category_name,
    image: blogData?.featured_image,
    author_name: blogData?.author?.name ?? '',
    author_image: blogData?.author?.avatar?.src ?? '',
    content: blogData?.content ?? '',
  };

  return (
    <BlockProvider mainConfig={mainConfig} block_uuid={BLOCK_UUID}>
      <section
        className={clx(
          classes.root,
          mode === 'edit' &&
            activeElement === key &&
            classes.block18ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        {isHeader && (
          <div className={clx(classes.header, layoutClass)}>
            <HeaderComponent
              mode={mode}
              content={headerData}
              layoutClass={layoutClass ?? ''}
            />
          </div>
        )}
        <div className={clx(classes.container, layoutClass)}>
          <div className={clx(classes.leftSideBar, layoutClass)}>
            <div className={classes.relatedContainer}>
              <RelatedCards
                header="Related Post"
                content={blogData?.related_posts ?? []}
                mode={mode}
              />
            </div>
            <div className={classes.relatedContainer}>
              <TagCards
                content={blogData?.tags ?? []}
                header={'Popular Tags'}
                mode={mode}
              />
            </div>
          </div>
          <div className={clx(classes.rightSideBar, layoutClass)}>
            {!isHeader && (
              <HeaderComponent
                mode={mode}
                content={headerData}
                layoutClass={layoutClass ?? ''}
              />
            )}
            <div
              className={clx(classes.loadContent, layoutClass)}
              dangerouslySetInnerHTML={{ __html: blogData?.content as string }}
            />
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
