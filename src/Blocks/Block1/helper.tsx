import clx from 'classnames';
import { FC } from 'react';
import { BlockProviderProps, useBlockSelector } from '../../components';
import { useRecordLinkClick } from '../../helper';
import { DisplayLinkProps, OtherLinksProps } from '.';

export const DisplayLink: FC<DisplayLinkProps> = ({
  content,
  classes,
  path,
  mode,
}) => {
  const config = useBlockSelector<BlockProviderProps, BlockProviderProps>(
    (state) => state
  );
  const recordLinkClick = useRecordLinkClick();
  const handleClick = (text?: string, href?: string) => {
    mode === 'view' &&
      recordLinkClick(text ?? '', href ?? '', config.block_uuid);
  };
  const activePath = (url: string) => {
    const regex = /\/([^/]+)$/;
    const match = path?.match(regex);
    return match?.[1] === url || url.toLowerCase() === 'home';
  };

  return content?.links?.map((link: OtherLinksProps, linkIndex: number) => (
    <a
      key={linkIndex}
      href={mode === 'view' ? link?.url : undefined}
      className={clx(classes.links, { active: activePath(link?.text) })}
      onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        handleClick(link?.text, link?.url);
        e.stopPropagation();
      }}
    >
      {link?.text}
    </a>
  ));
};
