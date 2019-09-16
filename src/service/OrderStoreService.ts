import { observable } from 'mobx';
// 订单store
export class OrderStoreService {
    @observable allDatas: Array<any> = [];

}

const orderStoreService = new OrderStoreService();
export { orderStoreService };
