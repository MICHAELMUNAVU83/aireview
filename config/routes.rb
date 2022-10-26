Rails.application.routes.draw do
  root to: 'pages#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '*path', to: 'pages#index', via: :all

  
  
namespace :api do
  namespace :v1 do
    resources :airlines, param: :slug
    resources :reviews, only: [:create, :destroy]
  end
end   


end
