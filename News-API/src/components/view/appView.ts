import { IEndpointEverything, IEndpointSources } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private _news: News;
    private _sources: Sources;
    constructor() {
        this._news = new News();
        this._sources = new Sources();
    }

    drawNews(data: IEndpointEverything) {
        const values = data?.articles ? data?.articles : [];
        this._news.draw(values);
    }

    drawSources(data: IEndpointSources) {
        const values = data?.sources ? data?.sources : [];
        this._sources.draw(values);
    }
}

export default AppView;
