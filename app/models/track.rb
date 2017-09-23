class Track < ApplicationRecord
  belongs_to :artist,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
  has_many :comments
  has_many :plays
  has_many :user_listens,
    through: :plays,
    source: :listener

  validates :title, :genre, :track_url, :user_id, presence: true

end
