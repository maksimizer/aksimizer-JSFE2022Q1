import GarageView from '../views/garageView';
import AppModel from '../model/appModel';

class GarageController {
  garageView: GarageView;

  appModel: AppModel;

  page: number;

  selectedCarId: null | number;

  constructor() {
    this.page = 1;
    this.selectedCarId = null;
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
    (document.querySelector('.garage-view') as HTMLElement).addEventListener('click', (event) => this.selectCar(event));
    (document.querySelector('.button-update-car') as HTMLElement).addEventListener('click', () => this.updateCar());
  }

  selectCar(event: Event) {
    const nameUpdateInput = document.querySelector('.update-name-input') as HTMLInputElement;
    const colorUpdateInput = document.querySelector('.update-color-input') as HTMLInputElement;
    const target = event.target as HTMLElement;
    if (target.classList.contains('button-select-car')) {
      this.selectedCarId = Number(target.getAttribute('data-id'));
      this.appModel.getCar(this.selectedCarId).then(({ name, color }) => {
        nameUpdateInput.value = name;
        colorUpdateInput.value = color;
      });
    }
  }

  unselectCar() {
    const nameUpdateInput = document.querySelector('.update-name-input') as HTMLInputElement;
    const colorUpdateInput = document.querySelector('.update-color-input') as HTMLInputElement;
    this.selectedCarId = null;
    nameUpdateInput.value = '';
    colorUpdateInput.value = '#ffffff';
  }

  updateCar() {
    const nameUpdateInput = document.querySelector('.update-name-input') as HTMLInputElement;
    const colorUpdateInput = document.querySelector('.update-color-input') as HTMLInputElement;
    const newCar = {
      name: nameUpdateInput.value,
      color: colorUpdateInput.value,
    };
    if (this.selectedCarId) {
      this.appModel.updateCar(this.selectedCarId, newCar).then(() => {
        this.unselectCar();
        this.updateGarage();
      });
    }
  }

  deleteCar(event:Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('button-remove-car')) {
      const id = Number(target.getAttribute('data-id'));
      this.appModel.deleteCar(id).then(() => {
        if (id === this.selectedCarId) this.unselectCar();
        this.updateGarage();
      });
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
