class RemoveDateFromSharedDomain < ActiveRecord::Migration[8.0]
  def change
    remove_column :shared_domains, :date_created, :datetime
  end
end
