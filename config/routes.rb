Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#index'
  get '/', to: 'posts#index'
  get '/posts/:id', to: 'posts#show'

  # API
  namespace :api, deafults: {format: :json} do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create]
    end
  end
end
