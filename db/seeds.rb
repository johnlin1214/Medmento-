require 'faker'

5.times {
  demo = Demo.create!(title: Faker::Company.name)
  7.times {
    attendant = Attendant.create!(first_name: Faker::Internet.user_name, last_name: Faker::Name.last_name, email: Faker::Internet.free_email, npi: 1376954206)
    demo.attendants << attendant
  }
}
