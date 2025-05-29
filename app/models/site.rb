class Site < ApplicationRecord
  # after_create :send_rest_api_stuff_to_powerdns!

  belongs_to :domain
  belongs_to :user

  validates :slug, uniqueness: {case_sensitive: false}, presence: true
  normalizes :slug, with: ->(value) { value.strip.downcase }

  private
  def send_rest_api_stuff_to_powerdns!
    CreatePowerdnsRRSet.perform_later(slug)
  end

end
