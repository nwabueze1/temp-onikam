import clx from 'classnames';
import { FC } from 'react';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { CustomThemeProps } from '../../../../types';
import { useLinkStyles } from './styles';
import { useRecordLinkClick } from '../../../../helper';

const Link: FC<{
  text?: string;
  url?: string;
  mode?: string;
  onClick?: () => void;
}> = (props) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);

  const classes = useLinkStyles(mainConfig as CustomThemeProps);
  const url = props?.mode === 'edit' ? undefined : props.url;

  return (
    <a
      className={clx(classes.link, url?.length === 0 && 'no-link')}
      href={url}
      onClick={props?.mode !== 'view' ? props?.onClick : undefined}
    >
      {props?.text}
    </a>
  );
};

const Links: FC<{
  name: string;
  links: { text: string; url: string }[];
  mode?: 'view' | 'edit';
  className?: string;
}> = (props) => {
  const { mainConfig, block_uuid } = useBlockSelector(
    (state: BlockProviderProps) => state
  );
  const recordLink = useRecordLinkClick();

  const classes = useLinkStyles(mainConfig as CustomThemeProps);

  const renderLinks = () =>
    props?.links?.map((link, index) => (
      <Link
        key={index}
        {...link}
        mode={props?.mode}
        onClick={() => {
          recordLink(link?.text, link?.url, block_uuid);
        }}
      />
    ));

  return (
    <div className={clx(classes.navContainer, props?.className)}>
      <h6 className={classes.linkHeader}>{props?.name}</h6>
      <div className={classes.linkContainer}>{renderLinks()}</div>
    </div>
  );
};

export { Links };
