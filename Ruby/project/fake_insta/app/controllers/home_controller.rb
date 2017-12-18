class HomeController < ApplicationController
  def index

  end

  def hello
    @name = params[:name]
  end

  def lotto
    @result = (1..45).to_a.sample(6).sort
  end

  def lunch
    list = ["참치회", "스테이크", "파이어볼"]
    @recom = list.sample
  end

  def search
  end
end
