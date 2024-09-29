import { ClassNameMap } from '@mui/material';
import { CoreCartFields } from '../../../../models';

export type PaymentSectionProps = {
  orderUuid: string | null;
  getCartTotal: number;
  content: { [key: string]: any };
  handleGotoCheckout: () => void;
  mode: 'view' | 'edit' | undefined;
  isOrderBooked?: boolean;
  orderData: {
    getCartTotal: number;
    orderDetailsData: (
      | {
          order_no: string;
          total_number_of_dishes?: undefined;
          subTotal?: undefined;
          delivery_fee?: undefined;
          delivery_type?: undefined;
          contact_name?: undefined;
          contact_phone?: undefined;
          payment_method?: undefined;
        }
      | {
          total_number_of_dishes: string;
          order_no?: undefined;
          subTotal?: undefined;
          delivery_fee?: undefined;
          delivery_type?: undefined;
          contact_name?: undefined;
          contact_phone?: undefined;
          payment_method?: undefined;
        }
      | {
          subTotal: string;
          order_no?: undefined;
          total_number_of_dishes?: undefined;
          delivery_fee?: undefined;
          delivery_type?: undefined;
          contact_name?: undefined;
          contact_phone?: undefined;
          payment_method?: undefined;
        }
      | {
          delivery_fee: string;
          order_no?: undefined;
          total_number_of_dishes?: undefined;
          subTotal?: undefined;
          delivery_type?: undefined;
          contact_name?: undefined;
          contact_phone?: undefined;
          payment_method?: undefined;
        }
      | {
          delivery_type: any;
          order_no?: undefined;
          total_number_of_dishes?: undefined;
          subTotal?: undefined;
          delivery_fee?: undefined;
          contact_name?: undefined;
          contact_phone?: undefined;
          payment_method?: undefined;
        }
      | {
          contact_name: string;
          order_no?: undefined;
          total_number_of_dishes?: undefined;
          subTotal?: undefined;
          delivery_fee?: undefined;
          delivery_type?: undefined;
          contact_phone?: undefined;
          payment_method?: undefined;
        }
      | {
          contact_phone: any;
          order_no?: undefined;
          total_number_of_dishes?: undefined;
          subTotal?: undefined;
          delivery_fee?: undefined;
          delivery_type?: undefined;
          contact_name?: undefined;
          payment_method?: undefined;
        }
      | {
          payment_method: any;
          order_no?: undefined;
          total_number_of_dishes?: undefined;
          subTotal?: undefined;
          delivery_fee?: undefined;
          delivery_type?: undefined;
          contact_name?: undefined;
          contact_phone?: undefined;
        }
    )[];
  };
  classes: ClassNameMap<string>;
  cart: CoreCartFields;
  isValidatingOrder?: boolean;
};
