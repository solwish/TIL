class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.string :poster
      t.string :genre
      t.string :nation
      t.string :director

      t.timestamps null: false
    end
  end
end
