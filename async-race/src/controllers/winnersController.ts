import { WinnersView, winnersView } from '../views/winnersView';
import { AppModel, appModel } from '../model/appModel';

class WinnersController {
  winnersView: WinnersView;

  appModel: AppModel;

  page: number;

  sort: string;

  order: string;

  constructor() {
    this.page = 1;
    this.sort = 'id';
    this.order = 'asc';
    this.appModel = appModel;
    this.winnersView = winnersView;
    this.appModel.getWinners(this.page, this.sort, this.order).then(({ winners, winnersCount }) => {
      this.winnersView.render(this.page, winners, winnersCount);
    });
  }
}

export default WinnersController;
