import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title);

    // const ClickHandler = () => {
    //     setTitle('Updated');
    //     console.log(title);
    // }
  //  const [delExpense, setDelExpense] = useState(false);
  
  // const deleteExpense = (event) => {

  //   console.log(event.target.value)
  //   setDelExpense(true);
  // }
    return (
   <li> <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
         
          <button className='expense-item__button'>Delete</button> </div>
    </Card></li>
  );
}

export default ExpenseItem;