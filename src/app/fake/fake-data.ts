import { BlogModel } from '../modules/blogs/models/blog';

export interface FakeData {
    [key: string]: any
}

export const BLOGS: Array<BlogModel> = [
    {
        author: {
            name: 'Michael Henderson'
        },
        slug: 'creating-a-new-theme',
        date: 1538092800000,
        description: '',
        linktitle: '',
        type: ['post', 'posts'],
        title: 'Creating a New Theme',
        series: ['Hugo 101'],
        tags: [
            "theme",
        ],
    },
    {
        author: {
            name: 'Hugo Authors'
        },
        slug: 'goisforlovers',
        date: 1517677200000,
        description: '',
        linktitle: '',
        type: ['post', 'posts'],
        title: '(Hu)go Template Primer',
        series: ['Hugo 101'],
        tags: [
            "go",
            "golang",
            "templates",
            "themes",
            "development",
        ],
        categories: [
            "Development",
            "golang",
        ]
    },
];