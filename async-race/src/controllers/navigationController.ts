import NavigationView from '../views/navigationView';

class NavigationController {
  private navigationView: NavigationView;

  constructor() {
    this.navigationView = new NavigationView();
    this.navigationView.render();
  }
}

export default NavigationController;
