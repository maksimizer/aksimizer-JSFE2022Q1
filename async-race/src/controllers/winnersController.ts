import { WinnersView, winnersView } from '../views/winnersView';
import { AppModel, appModel } from '../model/appModel';

class WinnersController {
  winnersView: WinnersView;

  appModel: AppModel;

  constructor() {
    this.appModel = appModel;
    this.winnersView = winnersView;
    this.appModel.getWinners(this.appModel.winnersPage, 'id', 'asc')
      .then(({ winners, winnersCount }) => {
        this.winnersView.render(this.appModel.winnersPage, winnersCount);
        this.winnersView.renderWinnersContainer(winners);
        this.appModel.winnersCount = Number(winnersCount);
        this.addEventListeners();
      });
  }

  addEventListeners() {
    (document.querySelector('.winners-view') as HTMLSelectElement).addEventListener('change', () => this.sortAndOrder());
  }

  sortAndOrder() {
    this.appModel.setSortAndOrder();
    this.updateWinnersContainer();
  }

  updateWinnersContainer() {
    const winnersContainer = (document.querySelector('.winners-container') as HTMLElement);
    this.appModel.getWinners(this.appModel.winnersPage, this.appModel.sort, this.appModel.order)
      .then(({ winners, winnersCount }) => {
        if (winnersContainer) winnersContainer.remove();
        this.winnersView.renderWinnersContainer(winners);
        this.appModel.winnersCount = Number(winnersCount);
      });
  }
}

export default WinnersController;
