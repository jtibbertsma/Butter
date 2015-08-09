class Api::BoardsController < ApplicationController
  before_action :ensure_signed_in

  def index
    @boards = current_user.boards
  end

  def show
    @board = Board.find(params[:id])
    if !@board || @board.user_id != current_user.id
      render json: ["Invalid board"], status: :unprocessable_entity
    end
  end

  def create
    params[:board][:user_id] = current_user.id
    @board = Board.new(board_params)
    if @board.save
      render :show
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  private

  def board_params
    params.require(:board).permit(:title, :user_id)
  end
end
