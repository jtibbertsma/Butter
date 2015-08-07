class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      user_params[:email],
      user_params[:password],
    )

    if @user
      login!
      redirect_to root_url
    else
      render :new
    end
  end
end
