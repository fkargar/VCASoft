package models

import akka.http.scaladsl.model.DateTime

case class Bill(billId: Int, BillDate: DateTime)