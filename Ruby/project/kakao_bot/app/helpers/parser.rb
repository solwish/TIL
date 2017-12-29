module Parser

  class Movie
    def naver
      url = "http://movie.naver.com/movie/running/current.nhn?view=list&tab=normal&order=reserve"
      html = RestClient.get(url)
      doc = Nokogiri::HTML(html)
      # doc = Nokogiri::HTML(open(url))
      movies = Hash.new
      movie_title = Array.new

      doc.css("ul.lst_detail_t1 dt a").each do |tit|
        movie_title << tit.text
      end

      doc.css("ul.lst_detail_t1 li").each do |mv|
        movies[mv.css("dl dt.tit a").text] = {
          url: mv.css("div.thumb img").attribute('src').to_s,
          rating: mv.css("dl dd.star dl.info_star dd div.star_t1 span.num").text
        }
      end

      title = movie_title.sample
  		return_text = title + " " + movies[title][:rating]
      re_url = movies[title][:url]

      # return_text = movie_title.inspect.to_s + "///////" + movies.inspect.to_s

      return [return_text, re_url]
    end
  end

  class Animal
    def cat
  		url = "http://thecatapi.com/api/images/get?format=xml&type=jpg"
  		cat_xml = RestClient.get(url)
  		doc = Nokogiri::XML(cat_xml)
      cat_url = doc.xpath("//url").text
      return ["고양", cat_url]
      #태그까지 같이 출력되기 때문에 .text
    end
  end

end
