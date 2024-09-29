import { FiFacebook, FiYoutube } from 'react-icons/fi';
import { RenderLinkProps } from './types';
import { BsInstagram } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

export function renderIcon(link: RenderLinkProps) {
  switch (link?.icon?.toLowerCase()) {
    case 'facebook':
      return (
        <a href={link?.url} style={{ textAlign: 'center' }}>
          <FiFacebook />
          <p>{link?.icon}</p>
        </a>
      );
    case 'instagram':
      return (
        <a href={link?.url} style={{ textAlign: 'center' }}>
          <BsInstagram />
          <p>{link?.icon}</p>
        </a>
      );
    case 'youtube':
      return (
        <a href={link?.url} style={{ textAlign: 'center' }}>
          <FiYoutube />
          <p>{link?.icon}</p>
        </a>
      );
    case 'linkedin':
      return (
        <a href={link?.url} style={{ textAlign: 'center' }}>
          <CiLinkedin />
          <p>{link?.icon}</p>
        </a>
      );
    case 'whatsapp':
      return (
        <a href={link?.url} style={{ textAlign: 'center' }}>
          <FaWhatsapp />
          <p>{link?.icon}</p>
        </a>
      );
    default:
      return null;
  }
}
