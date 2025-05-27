class CreateClaimedDomains < ActiveRecord::Migration[8.0]
  def change
    create_table :claimed_domains do |t|
      t.string :name
      t.string :owner
      t.references :SharedDomain, null: false, foreign_key: true

      t.timestamps
    end
  end
end
