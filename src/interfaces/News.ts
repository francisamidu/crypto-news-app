export default interface NewsItem {
  id: string;
  title: string;
  source: string;
  image: string;
  publishedAt: string | Date;
  url: string;
}
