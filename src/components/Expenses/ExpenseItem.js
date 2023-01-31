import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	//takes an array, where the first is the value, and the other is the function that produces desired result
    //title = props.title
	const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        //This function will cause React to refresh
		setTitle('Scooby DOO');
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
