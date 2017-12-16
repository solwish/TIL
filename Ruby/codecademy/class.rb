class Computer

  @@users = Hash.new

  def initialize(username, password)
    @username = username
    @password = password
    @files = Hash.new
    @@users[username] = password
  end

  def create(filename)
    time = Time.now
    @files[filename] = time
    puts "new file was created"
  end

  def Computer.get_users
    @@users
  end

end

my_computer = Computer.new("js", "1231")
my_computer.create("new file1")
puts Computer.get_users
