require 'faker'

5.times {
  demo = Demo.create!(title: Faker::Company.name)
  7.times {
    random_npi = rand(1000000000...9999999999)
    attendant = Attendant.create!(first_name: Faker::Internet.user_name, last_name: Faker::Name.last_name, email: Faker::Internet.free_email, npi: random_npi)
    demo.attendants << attendant
  }
}
