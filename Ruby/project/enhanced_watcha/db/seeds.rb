# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# JSON 파일 watcha_boxoffice.json 파일을 가지고 와서 정보 읽어올거야

movies = JSON.parse(File.read('./watcha_boxoffice.json'))

  # ap  title: movies["cards"][0]["items"][0]["item"]["title"]
  # ap  poster: movies["cards"][0]["items"][0]["item"]["poster"]["original"]
  # ap  genre: movies["cards"][0]["items"][0]["item"]["main_genre"]
  # ap  nation: movies["cards"][0]["items"][0]["item"]["nation"]
  # ap  director: movies["cards"][0]["items"][0]["item"]["directors"][0]["name"]

###################
  list = movies["cards"]

  list.each do |movie|
    # ap movie
      Movie.create(
        title: movie["items"][0]["item"]["title"],
        remote_poster_url: movie["items"][0]["item"]["poster"]["original"],
        # poster: movie["items"][0]["item"]["poster"]["original"],
        genre: movie["items"][0]["item"]["main_genre"],
        nation: movie["items"][0]["item"]["nation"],
        director: movie["items"][0]["item"]["directors"][0]["name"]
      )
  end

User.create(
  email: "admin@admin.com",
  password: "123123",
  password_confirmation: "123123",
  nickname: "관리자",
  role: "admin"
)

User.create(
  email: "ma@ma.com",
  password: "123123",
  password_confirmation: "123123",
  nickname: "매니저",
  role: "manager"
)

User.create(
  email: "user@user.com",
  password: "123123",
  password_confirmation: "123123",
  nickname: "유저"
)
