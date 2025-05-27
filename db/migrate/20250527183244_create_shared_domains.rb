class CreateSharedDomains < ActiveRecord::Migration[8.0]
  def change
    create_table :shared_domains do |t|
      t.string :name
      t.string :owner
      t.datetime :date_created

      t.timestamps
    end
  end
end
