export interface IEndpointSources {
    status: string;
    sources: ISourceExtended[];
}

export interface ILoaderOptions {
    apiKey: string;
}
export interface IEndpointEverything {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface ISource {
    id: string;
    name: string;
}

export interface ISourceExtended extends ISource {
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IArticle {
    source: ISource;
    autthor: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
