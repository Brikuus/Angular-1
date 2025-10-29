export type ProductModel = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  inStock: boolean;
  stock: number;
  rating: number;
  reviews?: number[];
}
