# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Initial reset
Expense.destroy_all

# Expenses

rent = Expense.create(charge:"rent", amount:2500, date: "09/8/2020")
groceries = Expense.create(charge:'groceries', amount:200, date: '09/07/2020')
implants = Expense.create(charge:'Cardi B butt implants', amount: 500, date: '09/06/2020')



puts("Seeding Succesful!")