export type TemplatePortfolio = {
  ID: number;
  TITLE: string;
};

export type UserPortfolio = {
  ID: number;
  NAME: string;
  EMAIL: string;
};

export type ItemPortfolio = {
  ID: number;
  TITLE: string;
  HOME_PAGE: any;
  ABOUT_ME: any;
  PROJECT_LIST: any;
  USER: UserPortfolio;
  TEMPLATE: TemplatePortfolio;
};

export type ResponsePortfolio = {
  ITEMS: ItemPortfolio[];
  CODE: number;
  PAGE: number;
  TOTAL_PAGES: number;
  TOTAL_ITEMS: number;
};
