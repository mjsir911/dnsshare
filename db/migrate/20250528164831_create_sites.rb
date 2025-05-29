class CreateSites < ActiveRecord::Migration[8.0]
  def change
    create_table :sites do |t|
      t.string :slug
      t.references :domain, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
