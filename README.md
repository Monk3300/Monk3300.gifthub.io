# Monk3300.gifthub.io
provider "heroku" {
  email   = "Monk3300agmail.com"
  api_key = var.heroku_api_key
}

resource "heroku_app" "hrgenesis" {
  name   = "hrgenesis-app"
  region = "us"
}

resource "heroku_addon" "heroku_postgresql" {
  app  = heroku_app.hrgenesis.name
  plan = "heroku-postgresql:hobby-dev"
