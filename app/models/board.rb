# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  title      :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ActiveRecord::Base
  validates :title, :user, presence: true

  belongs_to :user
  has_many :lists
end
