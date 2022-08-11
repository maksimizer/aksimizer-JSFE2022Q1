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
    (document.querySelector('.winners-view') as HTMLElement).addEventListener('click', (event) => this.goToPrevPage(event));
    (document.querySelector('.winners-view') as HTMLElement).addEventListener('click', (event) => this.goToNextPage(event));
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

  goToPrevPage(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('winners-prev-button') && this.appModel.winnersPage > 1) {
      this.appModel.winnersPage -= 1;
      this.updateWinnersContainer();
    }
  }

  goToNextPage(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('winners-next-button') && (this.appModel.winnersCount / this.appModel.winnersPage) > 7) {
      this.appModel.winnersPage += 1;
      this.updateWinnersContainer();
    }
  }
}

export default WinnersController;
