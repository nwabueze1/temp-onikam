import { FC } from 'react';
import { KiamoniPropType } from '../../types';
import { useKiamoniBlock22Styles } from './styles';
import clx from 'classnames';

export const KiamoniBlock22: FC<KiamoniPropType> = ({
  mode = 'view',
  content,
  index,
  handleSelect,
  activeElement,
  uuid,
}) => {
  const classes = useKiamoniBlock22Styles();
  const key = 'blocks.' + String(index);

  return (
    <section
      className={clx(
        mode === 'edit' && classes.padded,
        mode === 'edit' && activeElement === key && classes.block22ActiveElement
      )}
      onClick={() => {
        handleSelect?.(key);
      }}
      data-uuid={uuid}
    >
      <div className={classes.container}>
        <iframe
          width="100%"
          height="600"
          src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${content?.text?.latitude},${content?.text?.longitude}(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
        ></iframe>
      </div>
    </section>
  );
};
