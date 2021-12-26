import { Component, Input, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { CATEGORIES } from '../mock-data';
import { Category } from '../mock-interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = CATEGORIES;
  @Input() Items: Category[];
  editDiv: boolean = false;
  editItemValue: any;
  editAmount: any;
  fromDate: any;
  toDate: any;
  constructor(
    private expenseService: ExpenseService,
  ) {}

  ngOnInit() {
  }

  add(name: any): void {
    if (!(name)) {
      return;
    }
    this.expenseService.addCategories(name);
  }

  

  edit(item: Category) {
    this.editDiv = true;
    this.editItemValue = item;
  }

  update(id: any, name: any): void {
    if (!(id && name)) {
      return;
    }
    this.expenseService.updateCategories(id, name);
    this.editDiv = false;
  }

  delete(item: Category) {
    if (!item.id) {
      return;
    }
    this.expenseService.deleteCategories(item.id);
  }

 
}
