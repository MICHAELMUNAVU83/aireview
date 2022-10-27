class Api::V1::ReviewsController < ApplicationController
    protect_from_forgery with: :null_session

    def index
        reviews = Review.where(user_id: current_user.id)
        render json: reviews
    end

    def create
        review = Review.new(review_params)
        review.user = current_user
        if review.save
            render json: review
        else
            render json: {error: review.errors.messages}, status: 422
        end
    end
    def destroy
        review = Review.find(params[:id])
        if review.destroy
            head :no_content
        else
            render json: {error: review.errors.messages}, status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:title, :description, :score, :airline_id)
    end
end
