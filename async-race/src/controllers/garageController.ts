import GarageView from '../views/garageView';
import AppModel from '../model/appModel';

class GarageController {
  garageView: GarageView;

  appModel: AppModel;

  page: number;

  constructor() {
    this.page = 1;
    this.appModel = new AppModel();
    this.garageView = new GarageView();
    this.appModel.getCars(this.page).then(({ cars, carsCount }) => {
      this.garageView.renderGarage(cars, carsCount, this.page);
    });
  }
}

export default GarageController;
