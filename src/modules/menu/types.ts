export interface Pizza {
  id: number;
  image: string;
  weight?: number | null;
  title: string;
  ingredients?: string | null;
  price: number;
}
