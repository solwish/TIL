Rails.application.routes.draw do

  namespace :admin do
    resources :users do
      member do
        get '/to_ma' => 'users#to_manager'
        get '/to_us' => 'users#to_user'
      end
    end

    get '/posts/:id' => 'posts#delete'
    get '/reviews/:id' => 'reviews#delete'

    resources :posts
    resources :reviews
    # get '/users/index' => 'users#index'
    # get '/users/to_manager/:id' => 'users#to_manager'
    # get '/users/to_user/:id' => 'users#to_user'
    # get '/users/posts'
    # get '/users/posts_destroy/:id' => 'users#posts_destroy'
    # get '/users/reviews'
    # get '/users/reviews_destroy/:id' => 'users#reviews_destroy'
  end

  # get 'admin/index'

  get 'posts/privacy' => 'posts#privacy'

  get 'movies/index'

  resources :posts do
    member do
      post'comment'
    end
  end

  devise_for :users

  root 'movies#index'

  #get 'movies/show/:id' => 'movies#show'
  resources :movies do
    member do
      post 'review'
    end
  end


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
