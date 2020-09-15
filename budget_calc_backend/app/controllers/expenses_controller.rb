class ExpensesController < ApplicationController

    def index
        expenses = Expense.all

        render json: expenses
    end

    def show
        expense = Expense.find(params[:id])

        render json: expense
    end

    def create
        
        expense = Expense.create(
                charge: params[:charge],
                amount: params[:amount]
            )

        render json: expense
    end

    def destroy
        expense = Expense.find(params[:id])
        expense.destroy

        render json: expense
    end

end