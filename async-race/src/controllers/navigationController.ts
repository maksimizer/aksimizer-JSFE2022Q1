import NavigationView from '../views/navigationView';

class NavigationController {
  private navigationView: NavigationView;

  constructor() {
    this.navigationView = new NavigationView();
    this.navigationView.render();
    this.addNavEventlisteners();
  }

  addNavEventlisteners() {
    (document.querySelector('.button-garage') as HTMLElement).addEventListener('click', this.showGarageView);
    (document.querySelector('.button-winners') as HTMLElement).addEventListener('click', this.showWinnersView);
  }

  showGarageView() {
    (document.querySelector('.garage-view') as HTMLElement).classList.remove('hidden');
    (document.querySelector('.winners-view') as HTMLElement).classList.add('hidden');
  }

  showWinnersView() {
    (document.querySelector('.winners-view') as HTMLElement).classList.remove('hidden');
    (document.querySelector('.garage-view') as HTMLElement).classList.add('hidden');
  }
}

export default NavigationController;
