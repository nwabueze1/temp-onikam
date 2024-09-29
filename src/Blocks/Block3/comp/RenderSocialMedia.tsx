import clx from 'classnames';
import { ReactNode } from 'react';
import { FaDiscord, FaGithub, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';

export type TSocialMediaButton = {
  text:
  | 'facebook'
  | 'instagram'
  | 'youtube'
  | 'twitter'
  | 'linkedin'
  | 'tiktok'
  | 'github'
  | 'discord'
  | 'whatsapp';
  url: string;
};

export const renderSocialMedia = (
  button: TSocialMediaButton,
  index: number,
  {
    mode,
    classes,
    layout,
  }: {
    mode: 'view' | 'edit';
    classes: { icon: string; iconContainer: string };
    layout: string;
  }
) => {
  const props = { className: clx(classes.icon, layout), key: index };
  let element: ReactNode = null;
  switch (button?.text?.toLocaleLowerCase()) {
    case 'facebook':
    case 'fb':
    case 'fbk':
      element = <FiFacebook {...props} />;
      break;
    case 'instagram':
    case 'insta':
    case 'ig':
    case 'inst':
      element = <FiInstagram {...props} />;
      break;
    case 'youtube':
    case 'yt':
      element = <FiYoutube {...props} />;
      break;
    case 'twitter':
    case 'x':
      element = <FiTwitter {...props} />;
      break;
    case 'linkedin':
    case 'in':
      element = <FiLinkedin {...props} />;
      break;
    case 'tiktok':
    case 'tik':
    case 'tt':
      element = <FaTiktok {...props} />;
      break;
    case 'whatsapp':
      element = <FaWhatsapp {...props} />;
      break;
    case 'github':
      element = <FaGithub {...props} />;
      break;
    case 'discord':
      element = <FaDiscord {...props} />;
      break;
    default:
      element = null;
      break;
  }

  return (
    <a
      href={mode === 'edit' ? undefined : button?.url}
      className={clx(classes.iconContainer, layout)}
      key={index}
      target={mode !== 'edit' ? '_blank' : undefined}
      rel="noopener noreferrer"
    >
      {element} {button?.text}
    </a>
  );
};
