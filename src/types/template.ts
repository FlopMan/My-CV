export type ItemCategoryTemplate = {
  ID: number;
  TITLE: string;
};

export type ItemTemplate = {
  ID: number;
  TITLE: string;
  THUMBNAIL: string;
  CATEGORIES: ItemCategoryTemplate[];
};

export type ResponseTemplate = {
  ITEMS: ItemTemplate[];
  CODE: number;
  PAGE: number;
  TOTAL_PAGES: number;
  TOTAL_ITEMS: number;
};
