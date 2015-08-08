# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ActiveRecord::Base
  validates :title, :board, :ord, presence: true

  belongs_to :board
  has_one :user, through: :board, source: :user

  after_initialize :ensure_ord

  private

  def ensure_ord
    self.ord ||= 1
  end
end
