class CreateDomains < ActiveRecord::Migration[8.0]
  def change
    create_table :domains do |t|
      t.string :root
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
