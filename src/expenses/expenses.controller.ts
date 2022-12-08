import { Controller, Get } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expenses } from './interfaces/expenses.interface';

@Controller()
export class ExpensesController {
  constructor(private expenses: ExpensesService) {}

  @Get('expenses')
  getExpenses(): Expenses {
    return this.expenses.getExp();
  }
}
