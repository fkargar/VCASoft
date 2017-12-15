package models

case class Dashboard(
  clients: Array[Client],
  services: Array[Vehicle],
  parts: Array[Service]
  )