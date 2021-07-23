export default interface IPost {
    title: string;
    slug: string;
    coverImageUrl: string;
    author: {
        name: string;
        pictureUrl: string;
    }
    date: Date
}
