export interface Plugin {
  id: number;
  name: string;
  selectorName: string;
  value: any;
  icon?: string;
  description?: string;
  categories: string[];
  isInstalled: boolean;
  isPremium: boolean;
}
