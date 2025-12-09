class Post < ApplicationRecord
  has_one_attached :cover_image, dependent: :destroy
  has_rich_text :content
  validates :title, presence: true
end
