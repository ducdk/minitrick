export interface Blog {
    author?: object;
    date?: number;
    linktitle?: string;
    type?: Array<string>;
    title?: string;
    series?: Array<string>;
    categories?: Array<string>;
    description?: string,
    feature?: object;
    slug?: string;
    tag?: Array<string>;
}

export class BlogModel implements Blog {
    [key: string]: any
}