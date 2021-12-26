import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { CATEGORIES, TRANSACTIONS } from '../mock-data';
import { Category, Transaction } from '../mock-interface';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = TRANSACTIONS;
  categories: Category[] = CATEGORIES;
  totalExpense: number = 0;
  @Input() Items: Transaction[];
  editDiv: boolean = false;
  editItemValue: any;
  editAmount: any;
  fromDate: any;
  toDate: any;
  constructor(
    private expenseService: ExpenseService,
    public dialog: MatDialog,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.getTotalExpense();
  }

  add(category: any, date: any, amount: any): void {
    if (!(category && date && amount)) {
      return;
    }
    this.expenseService.addTransactions(category, date, amount);
    if (this.fromDate && this.toDate) {
      this.search(this.fromDate, this.toDate);
    }
    this.getTotalExpense();
  }

  getTotalExpense() {
    this.totalExpense = 0;
    for (var item of this.expenseService.getTransactions()) {
      this.totalExpense = this.totalExpense + item.amount;
    }
  }

  edit(item: Transaction) {
    this.editDiv = true;
    this.editItemValue = item;
    this.editItemValue.date = this.datePipe.transform(item.date, 'yyyy-MM-dd');
  }

  update(id: any, category: any, date: any, amount: any): void {
    if (!(id && category && date && amount)) {
      return;
    }
    this.expenseService.updateTransactions(id, category, date, amount);
    if (this.fromDate && this.toDate) {
      this.search(this.fromDate, this.toDate);
    }
    this.editDiv = false;
    this.getTotalExpense();
  }

  delete(item: Transaction) {
    if (!item.id) {
      return;
    }
    this.expenseService.deleteTransactions(item.id);
    if (this.fromDate && this.toDate) {
      this.search(this.fromDate, this.toDate);
    }
    this.getTotalExpense();
  }

  search(fromDate: any, toDate: any) {
    this.fromDate = fromDate;
    this.toDate = toDate;
    if (fromDate && toDate) {
      this.transactions = this.expenseService.searchTransactions(
        fromDate,
        toDate
      );
    }
    this.getTotalExpense();
  }
}
