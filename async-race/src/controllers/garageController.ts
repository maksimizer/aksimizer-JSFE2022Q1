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
    this.updateGarage();
    this.addEventListeners();
  }

  updateGarage() {
    this.appModel.getCars(this.page).then(({ cars, carsCount }) => {
      this.garageView.renderGarage(cars, carsCount, this.page);
    });
  }

  addEventListeners() {
    (document.querySelector('.button-create-car') as HTMLElement).addEventListener('click', () => this.createCar());
  }

  createCar() {
    const nameInput = document.querySelector('.name-input') as HTMLInputElement;
    const colorInput = document.querySelector('.color-input') as HTMLInputElement;
    const newCar = {
      name: nameInput.value,
      color: colorInput.value,
    };
    if (nameInput.value.trim() !== '') {
      this.appModel.createCar(newCar);
      nameInput.value = '';
      colorInput.value = '#ffffff';
      (document.querySelector('.garage-container') as HTMLElement).remove();
      this.updateGarage();
    }
  }
}

export default GarageController;
