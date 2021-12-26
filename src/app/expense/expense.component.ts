import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent implements OnInit {
  totalExpense: number = 0;
  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.getTotalExpense();
  }

  getTotalExpense() {
    for (var item of this.expenseService.getTransactions()) {
      this.totalExpense = this.totalExpense + item.amount;
    }
  }
}
