import clx from 'classnames';
import { FC, useState } from 'react';
import { useGetColor, useLayoutParameter } from '../../hooks';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useContainerStyles } from './containerStyles';
import { useKiamoniBlock21Styles } from './styles';
import { RenderLinkProps } from './types';
import { useRecordLinkClick } from '../../helper';
import { useTheme } from '@mui/material';
import block21 from '../../mappings/block21';
import { decodeText } from '../../helper/decodeText';

const { uuid: BLOCK_UUID } = block21;

export const KiamoniBlock21: FC<KiamoniPropType> = ({
  mode = 'view',
  content,
  configuration,
  layouts,
  index,
  handleSelect,
  activeElement,
  uuid,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const classes = useKiamoniBlock21Styles(mainConfig as CustomThemeProps);
  const containerClasses = useContainerStyles(mainConfig as CustomThemeProps);
  const { layoutClass } = useLayoutParameter(layouts);
  const key = 'blocks.' + String(index);
  const [loading] = useState<boolean>(false);
  const recordLinkClick = useRecordLinkClick();

  const handleClick = (text?: string, href?: string) => {
    mode === 'view' && recordLinkClick(text ?? '', href ?? '', BLOCK_UUID);
  };

  const theme = useTheme();

  const handleSubmitButtonClick = () => {};

  const renderLinks = () => {
    return content?.contentLinks?.map(
      (
        items: {
          name: string;
          links: { text: string; url: string; icon: string }[];
        },
        index: number
      ) => {
        return (
          <div key={index} data-info="links">
            <h5 className={classes.header}>{decodeText(items?.name)}</h5>
            {items?.links?.map((link: RenderLinkProps, index: number) => (
              <a
                key={index}
                href={link?.url}
                onClick={() => handleClick(link?.text, link?.url)}
              >
                <p>{link?.text}</p>
              </a>
            ))}
          </div>
        );
      }
    );
  };

  return (
    <section
      className={clx(
        classes.root,
        mode === 'edit' && activeElement === key && classes.block21ActiveElement
      )}
      onClick={() => {
        handleSelect?.(key);
      }}
      data-info={uuid}
    >
      <div className={clx(classes.container, layoutClass)}>
        <div className={clx(containerClasses.containerTitle, layoutClass)}>
          {decodeText(content?.text?.title)}
        </div>
        <div className={clx(containerClasses.containerSubTitle, layoutClass)}>
          <h3 className={clx(containerClasses.title, layoutClass)}>
            {decodeText(content?.text?.subTitle)}
          </h3>
          <p className={containerClasses.description}>
            {decodeText(content?.text?.description)}
          </p>
        </div>
        <article>
          <div className={classes.buttonContainer}>
            <button
              type={'submit'}
              disabled={loading}
              onClick={handleSubmitButtonClick}
            >
              {loading ? 'Submitting' : 'Submit'}
            </button>
          </div>
        </article>

        <div className={clx(classes.subContainer, layoutClass)}>
          {renderLinks()}
        </div>
      </div>
    </section>
  );
};
