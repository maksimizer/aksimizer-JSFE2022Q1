import { WinnersView, winnersView } from '../views/winnersView';
import { AppModel, appModel } from '../model/appModel';

class WinnersController {
  winnersView: WinnersView;

  appModel: AppModel;

  constructor() {
    this.appModel = appModel;
    this.winnersView = winnersView;
    this.appModel.getWinners(this.appModel.winnersPage, this.appModel.sort, this.appModel.order)
      .then(({ winners, winnersCount }) => {
        this.winnersView.render(this.appModel.winnersPage, winners, winnersCount);
        this.appModel.winnersCount = Number(winnersCount);
      });
  }
}

export default WinnersController;
