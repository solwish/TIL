Rails.application.routes.draw do

  root 'boards#index'

  resources :boards do

    collection do
      get '/:board_id/like' => 'boards#user_like_board', as: :user_like
    end

    member do
      post '/comments' => 'boards#create_comment', as: :create_comment_to
      delete '/comments/:comment_id' => 'boards#delete_comment', as: :delete_comment_to
      patch '/comments/:comment_id' => 'boards#update_comment', as: :update_comment_to
    end

  end


  #sign_in
  get '/signin' => 'sessions#signin', as: :user_signin  #로그인 페이지
  post '/signin' => 'sessions#user_signin' #실제 로그인
  #sign_up
  get '/signup' => 'sessions#signup', as: :user_signup  #회원가입 페이지
  post '/signup' => 'sessions#user_signup'  #실제 회원가입
  #sign_out
  delete '/signout' => 'sessions#signout', as: :user_signout
end
