import { FC, useEffect, useRef, useState } from 'react';
import { useDishCard } from '.';
import { CustomThemeProps } from '../../types';
import clx from 'classnames';
import { FiSearch } from 'react-icons/fi';
import { BlockProviderProps, useBlockSelector } from '../';
import { DishCardProps } from './type';
import { useRecordLinkClick } from '../../helper';

export const DishCard: FC<DishCardProps> = ({
  children,
  link,
  hasSearch = true,
  mode,
  size = 'md',
}) => {
  const { mainConfig, block_uuid } = useBlockSelector(
    (state: BlockProviderProps) => state
  );
  const classes = useDishCard({ ...(mainConfig as CustomThemeProps), size });
  const divRef = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState(0);
  const [move, setMove] = useState(false);

  const recordLinkClick = useRecordLinkClick();
  const handleClick = (text?: string, href?: string) => {
    mode === 'view' && recordLinkClick(text ?? '', href ?? '', block_uuid);
  };

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const width = divRef.current.offsetWidth;
        setDivWidth(width);
      }
    };
    window.addEventListener('resize', handleResize);
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setDivWidth(width);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={classes.parentCard}
      style={{ height: divWidth }}
      onMouseMove={() => {
        setMove(true);
      }}
      onMouseLeave={() => {
        setMove(false);
      }}
      data-info={'dish-card'}
    >
      <a
        href={mode === 'view' ? link : undefined}
        className={classes.anchor}
        onClick={() => handleClick(String(children), link)}
      >
        <div
          ref={divRef}
          className={clx(classes.cardContainer, 'dishCard', { rotate: move })}
          style={{ height: divWidth }}
        >
          <div className={classes.cardContainerLeft}></div>
          <div className={classes.cardContainerRight}></div>
        </div>
        <div
          style={{ height: divWidth * 0.975, width: divWidth * 0.975 }}
          className={clx(classes.dish)}
        >
          {children}
        </div>
        {hasSearch && (
          <div className={classes.searchContainer}>
            <FiSearch className={classes.search} />
          </div>
        )}
      </a>
    </div>
  );
};
