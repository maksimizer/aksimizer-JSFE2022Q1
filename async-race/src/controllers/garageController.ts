import { garageView, GarageView } from '../views/garageView';
import { appModel, AppModel } from '../model/appModel';
import { winnersView, WinnersView } from '../views/winnersView';

class GarageController {
  garageView: GarageView;

  appModel: AppModel;

  winnersView: WinnersView;

  constructor() {
    this.appModel = appModel;
    this.garageView = garageView;
    this.winnersView = winnersView;
    this.garageView.render();
    this.updateGarage();
    this.addEventListeners();
  }

  updateGarage() {
    const garage = document.querySelector('.garage-container') as HTMLElement;
    if (garage) garage.remove();
    this.appModel.getCars(this.appModel.garagePage).then(({ cars, carsCount }) => {
      this.garageView.renderGarage(cars, carsCount, this.appModel.garagePage);
      this.appModel.carsCount = Number(carsCount);
    });
  }

  addEventListeners() {
    (document.querySelector('.button-create-car') as HTMLElement).addEventListener('click', () => this.createCar());
    (document.querySelector('.garage-view') as HTMLElement).addEventListener('click', (event) => this.deleteCar(event));
    (document.querySelector('.garage-view') as HTMLElement).addEventListener('click', (event) => this.selectCar(event));
    (document.querySelector('.button-update-car') as HTMLElement).addEventListener('click', () => this.updateCar());
    (document.querySelector('.button-generate-cars') as HTMLElement).addEventListener('click', () => this.generateCars());
    (document.querySelector('.garage-view') as HTMLElement).addEventListener('click', (event) => this.goToPrevPage(event));
    (document.querySelector('.garage-view') as HTMLElement).addEventListener('click', (event) => this.goToNextPage(event));
  }

  selectCar(event: Event) {
    const nameUpdateInput = document.querySelector('.update-name-input') as HTMLInputElement;
    const colorUpdateInput = document.querySelector('.update-color-input') as HTMLInputElement;
    const target = event.target as HTMLElement;
    if (target.classList.contains('button-select-car')) {
      this.appModel.selectedCarId = Number(target.getAttribute('data-id'));
      this.appModel.getCar(this.appModel.selectedCarId).then(({ name, color }) => {
        nameUpdateInput.value = name;
        colorUpdateInput.value = color;
      });
    }
  }

  unselectCar() {
    const nameUpdateInput = document.querySelector('.update-name-input') as HTMLInputElement;
    const colorUpdateInput = document.querySelector('.update-color-input') as HTMLInputElement;
    this.appModel.selectedCarId = null;
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
    if (this.appModel.selectedCarId) {
      this.appModel.updateCar(this.appModel.selectedCarId, newCar).then(() => {
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
        if (id === this.appModel.selectedCarId) this.unselectCar();
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

  generateCars() {
    const newCars = new Array(100).fill(1).map(this.appModel.getRandomCar);
    newCars.forEach((car) => this.appModel.createCar(car));
    this.updateGarage();
  }

  goToPrevPage(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('garage-prev-button') && this.appModel.garagePage > 1) {
      this.appModel.garagePage -= 1;
      this.updateGarage();
    }
  }

  goToNextPage(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('garage-next-button') && (this.appModel.carsCount / this.appModel.garagePage) > 7) {
      this.appModel.garagePage += 1;
      this.updateGarage();
    }
  }
}

export default GarageController;
