import { useCommentCardStyles } from './style';
import clx from 'classnames';
import { FC } from 'react';
import { CommentCardProps } from './type';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { decodeText } from '../../../../helper/decodeText';

export const CommentCard: FC<CommentCardProps> = ({
  name,
  comment,
  double,
  center = true,
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useCommentCardStyles();

  const imageSrc = `<svg xmlns="http://www.w3.org/2000/svg" width="135" height="113" viewBox="0 0 135 113" fill="none">
<path d="M55.8 0.42627L34.92 80.3463L29.16 53.3463C37.56 53.3463 44.52 55.9863 50.04 61.2663C55.56 66.5463 58.32 73.6263 58.32 82.5063C58.32 91.3863 55.56 98.5863 50.04 104.106C44.52 109.386 37.68 112.026 29.52 112.026C20.88 112.026 13.8 109.266 8.28 103.746C2.76 98.2263 0 91.1463 0 82.5063C0 79.6263 0.12 76.9863 0.359999 74.5863C0.839999 71.9463 1.68 68.8263 2.88 65.2263C4.08 61.6263 5.76 57.0663 7.92 51.5463L27 0.42627H55.8ZM132.12 0.42627L111.24 80.3463L105.48 53.3463C113.88 53.3463 120.84 55.9863 126.36 61.2663C131.88 66.5463 134.64 73.6263 134.64 82.5063C134.64 91.3863 131.88 98.5863 126.36 104.106C120.84 109.386 114 112.026 105.84 112.026C97.2 112.026 90.12 109.266 84.6 103.746C79.08 98.2263 76.32 91.1463 76.32 82.5063C76.32 79.6263 76.44 76.9863 76.68 74.5863C77.16 71.9463 78 68.8263 79.2 65.2263C80.4 61.6263 82.08 57.0663 84.24 51.5463L103.32 0.42627H132.12Z" fill="${mainConfig?.colors?.[300]}"/>
</svg>`;

  const img1 = `data:image/svg+xml;base64,${btoa(imageSrc)}`;

  return (
    <div className={clx(classes.container, { double }, { center })}>
      <h4 className={classes.containerName}>{decodeText(name)}</h4>
      <p className={classes.subheading}>{decodeText(comment)}</p>
      <img src={img1} alt={''} className={classes.image} />
    </div>
  );
};
