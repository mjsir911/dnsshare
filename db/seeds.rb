# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
#
#

user = User.create!(email_address: "whatever@example.com", password: "password123")
bret = User.create!(email_address: "bret@example.com", password: "password123")
michael = User.create!(email_address: "michael@example.com", password: "password123")
r = Domain.create!(root: "wizard.gay", user: user)
r2 = Domain.create!(root: "what.lol", user: michael)
a = Site.create!(slug: "gay", domain: r, user: bret)
