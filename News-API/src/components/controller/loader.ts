import { ILoaderOptions } from '../../types/index';

class Loader {
    private _baseLink: string;
    private _options: ILoaderOptions;
    constructor(baseLink: string, options: ILoaderOptions) {
        this._baseLink = baseLink;
        this._options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: { endpoint: string; options?: { sources?: string } },
        callback:(data: T) => void): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: { sources?: string }, endpoint: string): string {
        const urlOptions: { [index: string]: string } = { ...this._options, ...options };
        let url = `${this._baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: (data: T) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
