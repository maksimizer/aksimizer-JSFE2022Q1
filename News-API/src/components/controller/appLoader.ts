import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '8a7e577611d942bd85b253da371bd072', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
