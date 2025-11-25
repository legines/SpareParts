# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Seed data is loaded from Rails credentials to keep sensitive information secure.

# Load seed users from credentials
Rails.application.credentials.seed_users&.each do |user_data|
  user = User.where(email: user_data[:email]).first_or_initialize
  user.update!(password: user_data[:password], password_confirmation: user_data[:password])
end

# 100.times do |i|
#   Post.create!(title: "Sample Post #{i + 1}", content: "This is the content for sample post #{i + 1}.", posted_at: Time.now - rand(100).days)
# end