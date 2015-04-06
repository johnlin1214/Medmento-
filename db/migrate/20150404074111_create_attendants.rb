class CreateAttendants < ActiveRecord::Migration
  def change
    create_table :attendants do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :npi, :limit => 8
      t.references :demo, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
