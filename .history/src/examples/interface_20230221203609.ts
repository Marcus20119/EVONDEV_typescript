export interface Product {
  name: string;
  brand: string;
  color: string;
}

export interface ProductNewFeature extends Product {
  speed?: string;
}

export const product: ProductNewFeature = {
  name: 'car',
  brand: 'BMW',
  color: 'red',
};

export const addProduct = (product: ProductNewFeature) => {};
