class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
                  params[:user][:username],
                  params[:user][:password]
    )
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid combination of username and password"]
    end
  end

  def destroy
    # @user = current_user
    # if @user
    #   logout!
    #   render "api/users/show"
    # else
    #   render json: ["Not signed in"], status: 404
    # end

    logout!
    render "api/users/show"
  end
end
