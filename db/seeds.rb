# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create!(
  name: "Joseph Tibbertsma",
  email: "email@email.com",
  password: "password123"
)

Board.create!(title: "Awesome Board", user: user)
Board.create!(title: "Cool Board", user: user)
Board.create!(title: "Just Okay Board", user: user)