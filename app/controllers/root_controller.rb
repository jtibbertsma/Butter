class RootController < ApplicationController
  def root
    unless signed_in?
      redirect_to new_session_url
    end
  end
end
