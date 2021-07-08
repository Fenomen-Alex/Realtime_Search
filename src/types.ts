export interface Algolia {
  name:                   string;
  description:            string;
  brand:                  string;
  categories:             string[];
  hierarchicalCategories: HierarchicalCategories;
  type:                   string;
  price:                  number;
  price_range:            string;
  image:                  string;
  url:                    string;
  free_shipping:          boolean;
  popularity:             number;
  rating:                 number;
  objectID:               string;
}

export interface HierarchicalCategories {
  lvl0: string;
  lvl1: string;
}
