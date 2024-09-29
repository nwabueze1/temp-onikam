import { useCallback, useState } from 'react';
import { NotificationType } from '../../helper/type';

export const usePluginFormNotification = () => {
  const [notification, setNotification] = useState<NotificationType>({
    open: false,
    message: null,
    message_type: null,
  });
  let timeout: any;

  const handleNotify = (
    message_type: 'success' | 'error',
    message: string | null
  ) => {
    if (message_type === 'error') {
      setNotification({
        ...notification,
        message_type: 'error',
        open: true,
        message,
      });
    } else if (message_type === 'success') {
      setNotification({
        ...notification,
        message_type: 'success',
        message: message,
        open: true,
      });
    }
    onResetNotification();
  };

  const onResetNotification = useCallback(() => {
    timeout = setTimeout(() => {
      handleResetNotification();
    }, 5000);
  }, []);

  const handleResetNotification = () => {
    setNotification({
      ...notification,
      open: false,
      message: null,
      message_type: null,
    });
    clearTimeout(timeout);
  };

  return {
    handleNotify,
    handleResetNotification,
    notification,
  };
};
