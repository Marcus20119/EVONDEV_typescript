export interface Product {
  name: string;
  brand: string;
  color: string;
}

// Nếu khai báo trùng tên sẽ merge lại với nhau nhưng không nên làm như vậy
export interface Product {
  cost?: string;
}

// Nên sử dụng extents để kế thừa
export interface ProductNewFeature extends Product {
  speed?: string;
}
export type FinalProduct = Product & ProductNewFeature;

export const product: ProductNewFeature = {
  name: 'car',
  brand: 'BMW',
  color: 'red',
};

export const addProduct = (product: ProductNewFeature) => {};

// Nếu dùng với React Component thì nên thêm "I" phía trước để phân biện với Component
export interface ICard {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
}
