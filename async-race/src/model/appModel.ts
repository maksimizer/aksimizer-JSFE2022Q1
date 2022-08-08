import { Car, Winner } from '../types/types';

class AppModel {
  baseURL = 'http://127.0.0.1:3000';

  garage = `${this.baseURL}/garage`;

  winners = `${this.baseURL}/winners`;

  engine = `${this.baseURL}/engine`;

  getCars = async (page: number, limit = 7) => {
    const responce = await fetch(
      `${this.garage}?_page=${page}&_limit=${limit}`,
    );
    return {
      cars: await responce.json(),
      carsCount: responce.headers.get('X-Total-Count'),
    };
  };

  getCar = async (id: number) => (await fetch(`${this.garage}/${id}`)).json();

  createCar = async (body: Car) => (
    await fetch(this.garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  deleteCar = async (id: number) => (await fetch(`${this.garage}/${id}`, { method: 'DELETE' })).json();

  updateCar = async (id: number, body: Car) => (
    await fetch(`${this.garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  startEngine = async (id: number) => (await fetch(`${this.engine}?id=${id}&status=started`)).json();

  stopEngine = async (id: number) => (await fetch(`${this.engine}?id=${id}&status=stopped`)).json();

  driveCar = async (id: number) => {
    const result = await fetch(`${this.engine}?id=${id}&status=drive`).catch();
    return result.status !== 200
      ? { success: false }
      : { ...(await result.json()) };
  };

  getSortAndOrder = (sort: string, order: string) => {
    if (sort && order) return `&_sort=${sort}&_order=${order}`;
    return '';
  };

  getWinners = async (page: number, sort: string, order: string, limit = 10) => {
    const responce = await fetch(
      `${this.winners}?_page=${page}&_limit=${limit}${this.getSortAndOrder(sort, order)}`,
    );
    const winners = await responce.json();
    return {
      winners: await Promise.all(
        winners.map(async (winner: Winner) => ({
          ...winner,
          car: await this.getCar(winner.id),
        })),
      ),
      winnersCount: responce.headers.get('X-Total-Count'),
    };
  };

  createWinner = async (body: Winner) => (
    await fetch(this.winners, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  updateWinner = async (id: number, body: Winner) => (
    await fetch(`${this.winners}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  getWinner = async (id: number) => (await fetch(`${this.winners}/${id}`)).json();

  getWinnerStatus = async (id: number) => (await fetch(`${this.winners}/${id}`)).status;

  deleteWinner = async (id: number) => (await fetch(`${this.winners}/${id}`, { method: 'DELETE' })).json();

  updateWinnersScore = async ({ id, time }: { id: number; time: number }) => {
    const winnerStatus = await this.getWinnerStatus(id);
    if (winnerStatus === 404) {
      await this.createWinner({
        id,
        wins: 1,
        time,
      });
    } else {
      const winner = await this.getWinner(id);
      await this.updateWinner(id, {
        id,
        wins: winner.wins + 1,
        time: time < winner.time ? time : winner.time,
      });
    }
  };

  getRandomCar() {
    const producers = ['Tesla', 'Mercedes', 'BMW', 'Toyota', 'Lada', 'Opel', 'Aston Martin', 'Lotus', 'Cherry', 'Renault', 'Peugeot'];
    const models = ['Kalina', 'Granta', 'Model S', 'GLX', 'GLK', 'Passat', 'Golf', 'Logan', '911', 'Zafira', 'Camry', 'Amulet'];
    const randomProducer = producers[Math.ceil(Math.random() * producers.length)];
    const randomModel = models[Math.floor(Math.random() * producers.length)];
    const randomName = `${randomProducer} ${randomModel}`;

    const chars = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i += 1) {
      randomColor += chars[Math.floor(Math.random() * chars.length)];
    }

    const randomCar = {
      name: randomName,
      color: randomColor,
    };

    return randomCar;
  }
}

export default AppModel;
