class AddIndexToAttendantNpi < ActiveRecord::Migration
  def change
    add_index :attendants, :npi, unique: true
  end
end

