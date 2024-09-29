import clx from 'classnames';
import { FC } from 'react';
import { useGetColor } from '../../hooks';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useKiamoniBlock25Styles } from './styles';

export const KiamoniBlock25: FC<KiamoniPropType> = ({ configuration, uuid }) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const classes = useKiamoniBlock25Styles(mainConfig as CustomThemeProps);

  return (
    <section className={classes.root} data-uuid={uuid}>
      <div className={clx(classes.container)}>
        <div className={classes.box}>
          <h1>Oops, we couldn’t find this page</h1>
          <p>
            Sorry the page you’re looking for does not exist or has been moved,
            try refreshing the page or go back home
          </p>
          <div className={classes.imgContainer}>
            <img
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+8832.png"
              alt="404"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
