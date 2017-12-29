package models

import play.api.mvc._

case class Vehicle(vehicleId: Int, clientId: Int, make: String, model: String) 