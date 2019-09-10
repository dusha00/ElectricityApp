import { observable, action } from 'mobx';
export class HomeService {
  @observable text: string;
  @observable num: number;
  constructor() {
    this.num = 1;
    this.text = 'mobx';
  }

  @action
  plus = () => {
    this.num += 1;
  }
}
const homeService = new HomeService();
export { homeService }; 