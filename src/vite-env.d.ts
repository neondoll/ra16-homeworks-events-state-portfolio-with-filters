/// <reference types="vite/client" />

interface Project {
  img: string;
  category: Category;
}

type Category = 'Business Cards' | 'Flayers' | 'Websites';
type Filter = 'All' | Category;
