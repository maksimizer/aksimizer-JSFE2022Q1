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
    const garage = document.querySelector('.garage-container') as HTMLElement;
    if (garage) garage.remove();
    this.appModel.getCars(this.page).then(({ cars, carsCount }) => {
      this.garageView.renderGarage(cars, carsCount, this.page);
    });
  }

  addEventListeners() {
    (document.querySelector('.button-create-car') as HTMLElement).addEventListener('click', () => this.createCar());
    (document.querySelector('.garage-view') as HTMLElement).addEventListener('click', (event) => this.deleteCar(event));
  }

  deleteCar(event:Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('button-remove-car')) {
      const id = Number(target.getAttribute('data-id'));
      this.appModel.deleteCar(id).then(() => this.updateGarage());
    }
  }

  createCar() {
    const nameInput = document.querySelector('.name-input') as HTMLInputElement;
    const colorInput = document.querySelector('.color-input') as HTMLInputElement;
    const newCar = {
      name: nameInput.value,
      color: colorInput.value,
    };
    nameInput.value = '';
    colorInput.value = '#ffffff';
    this.appModel.createCar(newCar).then(() => this.updateGarage());
  }
}

export default GarageController;
