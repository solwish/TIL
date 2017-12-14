student = {
  name: "john",
  age: 10,
  gender: "male",
  school: {
    highschool: ["청학고", "Math"],
    college: ["KAU", "CS"],
    graduate: "KAIST"
  }
}

puts student[:school][:college][1]
