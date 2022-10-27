class RemoveAverageScoreFromAirlines < ActiveRecord::Migration[7.0]
  def change
    remove_column :airlines, :average_score, :integer
  end
end
