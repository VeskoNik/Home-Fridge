export interface Item {
    name: string;
    date: Date;
    type: string;
    imageUrl: string;
    calories: number;
    description: string;
    owner?: string;
  }