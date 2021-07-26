export interface IRawProject {
    id: string;
    name: string;
    description: string;
    created_at: string
    updated_at: string;
    html_url: string
    [index: string]: string;
}

export interface IProject {
    id: string;
    name: string;
    description: string;
    createdAt: string
    updatedAt: string;
    url: string
}
