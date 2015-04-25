# Medmento-
An application to help verify attendants in accordance to the Physician Payments Sunshine Act

About the App: Pharmaceutical companies usually have "Lunch and learns" to demo and showcase their drugs to doctors and physicians. The Physician Payments Sunshine Act requires all of these demos to record attendees and their NPI number (physician ID number). My app currently allows you to verify Doctor's NPI numbers when they sign in by making an AJAX call to an NPI API Database. Also doctors are allows to search for their NPI by first and last name if they do not know their NPI number.

Currently sign-ins at these lunch and learns are done by paper or excel on a laptop. Eventually my app will allow you to export the data as an excel file.

My Models for this app
Demo - has_many :attendants
Attendant - belongs_to :demo

YouTube Video Demo
https://youtu.be/o6ubWoobgeg
