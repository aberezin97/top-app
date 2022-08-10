export interface IProductCharacteristic {
  name: string;
  value: string;
}

export interface IBlog {
  text: string;
  _id: string;
  bigImage: string;
}

export interface IReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface IProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  image: string;
  description: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  characteristics: IProductCharacteristic[];
  advantages: string;
  initialRating: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  html: string;
  blog: IBlog;
  companyId: string;
  clicks: number;
  reviews: IReviewModel[];
  reviewCount: number;
  reviewAvg?: number;
}
