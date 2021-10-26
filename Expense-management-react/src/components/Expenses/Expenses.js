import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter"
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'
import Card from "../UI/Card"
import { useState } from "react";


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2021");

    const selectYear = (year) => {
        console.log(year + " from Expenses.js");
        setFilteredYear(year)
    }

    const filteredExpenses = props.items.filter(expense => {
        return (expense.date.getFullYear().toString() === filteredYear)
    });



    return (
        <li>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onSelectYear={selectYear}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />

            </Card>
        </li>
    );
}

export default Expenses;