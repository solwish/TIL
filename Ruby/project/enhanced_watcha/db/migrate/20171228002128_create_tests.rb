class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      # t.references :user_id, index: true, foreign_key: true
      t.integer :post_id
      t.string :content
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
