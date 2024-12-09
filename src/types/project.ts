export type ItemProject = {
  ID: number;
  TITLE: string;
  THUMBNAIL: string;
  CONTENT: any;
  ACTIVE: string;
  YEAR: string;
  PROJECT_CATEGORY: string;
};

export type ResponseProject = {
  ITEMS: ItemProject[];
  CODE: number;
  PAGE: number;
  TOTAL_PAGES: number;
  TOTAL_ITEMS: number;
};
