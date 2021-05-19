import React from "react";
import "./App.css";
import { expenseData } from "./data";

export const Expenses = () => {
	return (
		<table>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Category</th>
				<th>Amount</th>
			</tr>
			{expenseData.map( stock =>
				<tr key={stock.key}>
					<td>{stock.name} </td>
					<td> {stock.description} </td>
					<td> {stock.category} </td>
					<td> $ {stock.amount} </td>
				</tr>
			)}
		</table>
	);
};