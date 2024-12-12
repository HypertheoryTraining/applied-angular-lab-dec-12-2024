export type NewsItem = {
  id: string;
  title: string;
  description: string;
  link?: NewsItemLink;
};

export type NewsItemLink = {
  caption: string;
  href: string;
};
