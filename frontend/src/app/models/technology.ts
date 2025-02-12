export interface Technology {
  _id: string;
  name: string;
  ring: Ring;
  category: Category;
  description: string;
  justification: string;
}

export interface Ring {
  _id: string;
  name: string;
}

export interface Category {
  _id: string;
  name: string;
}
