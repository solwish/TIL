class AddAvatarToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :avatar, :string
  end
end
