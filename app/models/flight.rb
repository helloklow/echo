class Flight < ApplicationRecord
    belongs_to :user

    validates :date, :aircraft, :departure, :arrival, :duration, presence: true
end