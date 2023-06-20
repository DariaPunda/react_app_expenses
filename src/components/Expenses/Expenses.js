import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [chosenYear, setChosenYear] = useState("2022");

  const filterChangeHandler = (enteredYear) => {
    setChosenYear(enteredYear);
  };

  const filteredExpenses = props.items.filter(expense => { return expense.date.getFullYear().toString() === chosenYear });



  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={chosenYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={ filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
