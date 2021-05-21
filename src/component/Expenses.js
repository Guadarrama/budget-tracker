import React from "react";
import "../App.css";
import { expenseData } from "./data";


//expense table
export const Expenses = () => {
	return (
		<table>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Category</th>
				<th>Amount</th>
				<th>Date</th>
			</tr>
			{expenseData.map( a =>
				<tr key={a.key}>
					<td>{a.name} </td>
					<td> {a.description} </td>
					<td> {a.category} </td>
					<td> $ {a.amount} </td>
					<td> {a.date} </td>
				</tr>
			)}
		</table>
	);
};
