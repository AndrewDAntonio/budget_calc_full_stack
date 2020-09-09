class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :charge
      t.integer :amount
      t.datetime :date

    end
  end
end
