class AddAverageScoreToAirlines < ActiveRecord::Migration[7.0]
  def change
    add_column :airlines, :average_score, :integer
  end
end
