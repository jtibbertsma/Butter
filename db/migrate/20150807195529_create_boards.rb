class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title
      t.integer :user_id

      t.timestamps null: false
    end

    add_index :boards, [:title, :user_id], unique: true
  end
end
