export interface Item {
  title: string;
  link: string;
}

export interface Category {
  title: string;
  items: Item[];
}

export interface IContent {
  title: string;
  items: Content[];
}

export interface Content {
  id: string;
  title: string;
  topic: string;
  texture: string;
  qna: string;
}
