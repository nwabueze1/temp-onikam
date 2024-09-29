import { FC, HTMLAttributes } from 'react';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { useScheduleStyles } from './useScheduleStyles';
import { CustomThemeProps } from '../../../../types';
import clx from 'classnames';

type TSchedule = {
  day?: string;
  time?: string;
};
const Schedule: FC<TSchedule> = (props) => {
  const { mainConfig, buttonConfig } = useBlockSelector(
    (state: BlockProviderProps) => state
  );
  const classes = useScheduleStyles(mainConfig as CustomThemeProps);
  const clockSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.98906 1.66406C5.38906 1.66406 1.66406 5.3974 1.66406 9.9974C1.66406 14.5974 5.38906 18.3307 9.98906 18.3307C14.5974 18.3307 18.3307 14.5974 18.3307 9.9974C18.3307 5.3974 14.5974 1.66406 9.98906 1.66406ZM9.9974 16.6641C6.31406 16.6641 3.33073 13.6807 3.33073 9.9974C3.33073 6.31406 6.31406 3.33073 9.9974 3.33073C13.6807 3.33073 16.6641 6.31406 16.6641 9.9974C16.6641 13.6807 13.6807 16.6641 9.9974 16.6641Z" fill="url(#paint0_linear_6021_27185)"/>
<path d="M10.4141 5.83594H9.16406V10.8359L13.5391 13.4609L14.1641 12.4359L10.4141 10.2109V5.83594Z" fill="url(#paint1_linear_6021_27185)"/>
<defs>
<linearGradient id="paint0_linear_6021_27185" x1="1.66406" y1="18.3307" x2="18.3307" y2="18.3307" gradientUnits="userSpaceOnUse">
<stop stop-color="${buttonConfig?.colors?.[400]}"/>
<stop offset="1" stop-color="${buttonConfig?.colors?.[500]}"/>
</linearGradient>
<linearGradient id="paint1_linear_6021_27185" x1="9.16406" y1="13.4609" x2="14.1641" y2="13.4609" gradientUnits="userSpaceOnUse">
<stop stop-color="${buttonConfig?.colors?.[400]}"/>
<stop offset="1" stop-color="${buttonConfig?.colors?.[500]}"/>
</linearGradient>
</defs>
</svg>`;

  const imageUrl = `data:image/svg+xml;base64,${btoa(clockSvg)}`;

  return (
    <div className={classes.container}>
      <img
        src={imageUrl}
        height={20}
        width={20}
        alt={'clock-svg'}
        className={classes.image}
      />
      <p className={classes.title}>{props?.day}: </p>
      <p className={classes.subtitle}>{props?.time}</p>
    </div>
  );
};

export const Schedules: FC<
  { schedules: TSchedule[] } & HTMLAttributes<HTMLDivElement>
> = ({ schedules, className, ...props }) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useScheduleStyles(mainConfig as CustomThemeProps);

  const renderSchedules = () =>
    schedules?.map((schedule, index) => <Schedule {...schedule} key={index} />);

  return (
    <div className={clx(classes.baseContainer, className)} {...props}>
      {renderSchedules()}
    </div>
  );
};
