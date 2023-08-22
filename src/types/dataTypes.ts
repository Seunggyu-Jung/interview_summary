export interface Item {
  title: string;
  link: string;
}

export interface Category {
  title: string;
  items: Item[];
}
