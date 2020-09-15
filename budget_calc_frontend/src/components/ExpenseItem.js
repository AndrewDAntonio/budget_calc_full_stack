import React from 'react';
import {MdEdit, MdDelete} from "react-icons/md"


export const ExpenseItem= ({expense, handleDelete}) => {

const {id, charge, amount} = expense
    return (
        <li className='item'>
            <div className="info">
                <span className="expense">{charge}</span>
                <span className='amount'>${amount}</span>
            </div>
            <div>
                <button className='edit-btn' aria-label="edit button">
                    <MdEdit/>
                </button>
                <button  onClick={handleDelete} value={id} className='clear-btn' >
                    <MdDelete  />
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem;