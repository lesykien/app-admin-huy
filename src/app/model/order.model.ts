interface orderDTOs {
  id: number;
  total: number;
  time: Date;
  statusOrder: number;
  statusDelivery: number;
  payMentMethod: number;
  accountId: number;
}
interface orderItem {
  quantity: number;
  id: number;
  name: string;
  price: number;
  link: string;
}
interface order {
  id: number;
  accountId: number;
  time?: Date;
  total: number;
  statusDelivery: number;
  detal: orderItem[];
}
interface orderResponse {
  id: number;
  fullName: string;
  phone: string;
  amount: number;
  date: Date;
  statusDelivery: number;
}

interface user {
  id: number;
  email: string;
  phoneNumber: string;
  fullName: string;
  address: string;
}
class _orderModel {
  static newModel(): order {
    return {
      id: 0,
      accountId: 0,
      total: 0,
      statusDelivery: 0,
      detal: [],
    };
  }

  static newUse(): user {
    return {
      id: 0,
      email: '',
      phoneNumber: '',
      fullName: '',
      address: '',
    };
  }
}

export { orderDTOs, orderResponse, order, _orderModel, user };
