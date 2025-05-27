class CreateUpstreamZones < ActiveRecord::Migration[8.0]
  def change
    create_table :upstream_zones do |t|
      t.integer :id

      t.timestamps
    end
  end
end
