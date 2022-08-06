import GarageView from "../views/garageView";
import AppModel from "../model/appModel";
import { Cars } from "../types/types";

class GarageController {
  garageView: GarageView;
  appModel: AppModel;
  page: number;
  
  constructor() {
    this.page = 1;
    this.appModel = new AppModel();
    this.garageView = new GarageView();
    // this.garageView.render();
  }
  getData = async () => {
    await this.appModel.getCars(this.page);
  }

}

export default GarageController;
