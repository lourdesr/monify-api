import { Injectable } from '@nestjs/common';
import { Expenses } from './interfaces/expenses.interface';

@Injectable()
export class ExpensesService {
  private readonly expenses: Expenses[] = [];

  create(expense: Expenses) {
    this.expenses.push(expense);
  }

  findAll(): Expenses[] {
    return this.expenses;
  }

  getExp(): Expenses {
    return {
        name: 'rent',
        type: 'constant',
        cost: 1000
    }
  }
}