import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '9ce8582457804c829f19995dcac3ee0c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
