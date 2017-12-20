# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Faker::Config.locale = 'ko'

User.create([
  {
    email: "as@as.as",
    password: "1231"},
  {
    email: "as@as.as1",
    password: "1231"},
  {
    email: "as@as.as",
    password: "1231"}
])

5.times do
  Post.create(
    title: Faker::Address.state,
    content: Faker::Lorem.words,
    user_id: rand(1..3)
  )
end

10.times do
  Comment.create(
    content: Faker::Internet.email,
    user_id: rand(1..3),
    post_id: rand(1..5)
  )
end
