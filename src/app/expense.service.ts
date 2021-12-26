import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Transaction, Category } from './mock-interface';
import { CATEGORIES, TRANSACTIONS } from './mock-data';

@Injectable()
export class ExpenseService {
  transactions: Transaction[] = TRANSACTIONS;
  categories: Category[] = CATEGORIES;

  constructor() {}

  getTransactions() {
    return this.transactions;
  }

  addTransactions(category: number, date: Date, amount: number) {
    let count: number = this.transactions.length;
    let id: number = count + 1;
    return this.transactions.push({
      id: id,
      category: category,
      date: date,
      amount: +amount,
    });
  }

  updateTransactions(id: number, category: number, date: Date, amount: number) {
    let itemIndex = this.transactions.findIndex((item) => item.id == id);
    this.transactions[itemIndex] = {
      id: id,
      category: category,
      date: date,
      amount: +amount,
    };
    return this.transactions;
  }

  deleteTransactions(id: number) {
    let itemIndex = this.transactions.findIndex((item) => item.id == id);
    this.transactions.splice(itemIndex, 1);
    return this.transactions;
  }

  searchTransactions(fromDate: any, toDate: any) {
    let searchArray: any = [];
    for (let item of this.transactions) {
      if (item.date >= fromDate && item.date <= toDate) {
        searchArray.push(item);
      }
    }
    return searchArray;
  }

  addCategories(name: any) {
    let count: number = this.categories.length;
    let id: number = count + 1;
    return this.categories.push({
      id: id,
      name: name,
    });
  }

  updateCategories(id: number, name: string) {
    let itemIndex = this.categories.findIndex((item) => item.id == id);
    this.categories[itemIndex] = {
      id: id,
      name: name,
    };
    return this.categories;
  }

  deleteCategories(id: number) {
    let itemIndex = this.categories.findIndex((item) => item.id == id);
    this.categories.splice(itemIndex, 1);
    return this.categories;
  }
}
