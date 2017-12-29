require 'parser'

class KakaoController < ApplicationController
  def keyboard
    # home_keyboard = {
    #   type: "text"
    # }
  	home_keyboard = {
  		:type => "buttons",
  		:buttons => ["영화","메뉴","고양이","로또"]
  	}
    render json: home_keyboard
  end

  def message
    # 사용자가 보내준 텍스트를 그대로 다시 말하기
    user_message = params[:content]
    re_msg = "명령어를 확인해주세요"
    image = false
    # 로또
    if user_message == "로또"
      re_msg = (1..45).to_a.sample(6).sort.to_s
    # 메뉴
    elsif user_message == "메뉴"
      menu = ["20층", "라면", "삼겹살", "소고기", "곱창"]
      re_msg = menu.sample.to_s
    # 고양이
    elsif user_message == "고양이"
      image = true
      animal = Parser::Animal.new
      re_msg = animal.cat[0]
      img_url = animal.cat[1]
    #영화
    elsif user_message == "영화"
      image = true
      naver_movie = Parser::Movie.new
      re_msg = naver_movie.naver[0]
      img_url = naver_movie.naver[1]
    end

    # home_keyboard = {
    #   type: "text"
    # }
    home_keyboard = {
  		:type => "buttons",
  		:buttons => ["영화","메뉴","고양이","로또"]
  	}

    return_message = {
      message: {
        text: re_msg
      },
      keyboard: home_keyboard
    }

    return_message_with_img = {
      message: {
        text: re_msg,
        photo: {
          url: img_url,
          width: 640,
          height: 480
        }
      },
      keyboard: home_keyboard
    }

    if image
      render json: return_message_with_img
    else
      render json: return_message
    end

  end
end
