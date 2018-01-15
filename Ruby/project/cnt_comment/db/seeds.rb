# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


10.times do
  Post.create(
    title: Faker::Pokemon.name,
    content: Faker::Lorem.sentence(3)
  )
end

1000.times do
  Comment.create(
    content: Faker::Superhero.name,
    post_id: 1 + rand(10)
    # created_at: DateTime.now
  )
end
