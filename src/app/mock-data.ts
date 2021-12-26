import { Transaction, Category } from './mock-interface';

export const TRANSACTIONS: Transaction[] = [
  { id: 1, category: 1, date: '2021-12-10', amount: 100 },
  { id: 2, category: 2, date: '2021-12-11', amount: 50 },
  {
    id: 3,
    category: 3,
    date: '2021-12-12',
    amount: 125,
  },
  { id: 4, category: 4, date: '2021-12-13', amount: 55 },
  { id: 5, category: 5, date: '2021-12-14', amount: 65 },
];

export const CATEGORIES: Category[] = [
  { id: 1, name: 'General' },
  { id: 2, name: 'Fuel' },
  { id: 3, name: 'Entertainment' },
  { id: 4, name: 'Travel' },
  { id: 5, name: 'Shopping' },
];
