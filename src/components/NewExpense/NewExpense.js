import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const enteredDataHandler = (collectedData) => {
    props.onAddNewExpenseHandler(collectedData);
    setIsRendered(false);
  };
  const [isRendered, setIsRendered] = useState(false);

  const openFormHandler = () => {
    setIsRendered(true);
  };

  const cancelHandler = () => {
    setIsRendered(false);
  };

  return (
    <div className="new-expense">
      {!isRendered && (
        <button type="button" onClick={openFormHandler}>
          Add new expense
        </button>
      )}
      {isRendered && (
        <ExpenseForm
          onSubmitHandler={enteredDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
