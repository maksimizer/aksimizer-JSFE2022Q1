import WinnersView from '../views/winnersView';
import AppModel from '../model/appModel';

class WinnersController {
  winnersView: WinnersView;

  appModel: AppModel;

  page: number;

  sort: string;

  order: string;

  constructor() {
    this.page = 1;
    this.sort = 'wins';
    this.order = 'desc';
    this.appModel = new AppModel();
    this.winnersView = new WinnersView();
    this.appModel.getWinners(this.page, this.sort, this.order).then(({ winners, winnersCount }) => {
      this.winnersView.render(this.page, winners, winnersCount);
    });
  }
}

export default WinnersController;
