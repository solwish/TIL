Rails.application.routes.draw do

  resources :blogs
  root 'posts#index'
  resources :posts

  # get 'posts/new' => 'posts#new'
  # #read 1개 읽는거
  # get 'posts/:id' => 'posts#show'
  # #read 전체 읽는 거
  # get 'posts' => 'posts#index'
  # get 'posts/index'
  # #create
  # post 'posts' => 'posts#create'
  # #update
  # get 'posts/:id/edit' => 'posts#edit'
  # put 'posts/:id' => 'posts#update'
  # #delete
  # delete 'posts/:id' => 'posts#destroy'

#####



  # get 'posts/create'
  # post 'posts/create'

  # get 'posts/show/:id' => 'posts#show'

  # get 'posts/edit/:id' => 'posts#edit'

  # get 'posts/update/:id' => 'posts#update'
  # post 'posts/update:id' => 'posts#update'

  # get 'posts/destroy:id' => 'posts#destroy'
  # delete 'posts/destroy/:id' => 'posts#destroy'


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
