package controllers

import javax.inject.Inject

import play.api.db._
import play.api.mvc._
import models.Person._
import models.Person
import play.api.libs.json._
import models.Vehicle

class MySQLController @Inject()(db: Database, controllerComponents: ControllerComponents) extends AbstractController(controllerComponents) {
  val clients = scala.collection.mutable.ArrayBuffer[JsValue]()
  val vehicles = scala.collection.mutable.ArrayBuffer[JsValue]()
  val clientVehicles = scala.collection.mutable.ArrayBuffer[JsValue]()
  
  def getClient(clientId: Int) = Action {
    var outString = "";
//    var outString = "Number is \n"
    val conn = db.getConnection()
    
    try {
      val sql = "SELECT * FROM client WHERE client_id = ?"
      val stmt = conn.prepareStatement(sql)
      stmt.setInt(1, clientId)
      val rs = stmt.executeQuery()
//      val rs = stmt.executeQuery("SELECT * FROM client WHERE firstName = ?")
      
      rs.beforeFirst()
      
      while(rs.next()) {
        val id = rs.getInt("client_id")
        val firstName = rs.getString("first_name")
        val lastName = rs.getString("last_name")
        val middleInitial = rs.getString("middle_initial")
        
        var p1 = Person(id, firstName, lastName, middleInitial)
  
        implicit val p1Writes = Json.writes[Person]
  
        val personJson: JsValue = Json.toJson(p1)
        
        outString += personJson
        outString += "\n"
      }
      while (rs.next()) {
        outString += rs.getString("client_id")
        outString += "\n"
      }
    } finally {
      conn.close()
    }
    Ok(outString)
  }
  
  def getVehicle(clientId: Int) = Action {
    clientVehicles.clear()
    var outString = "";
//    var outString = "Number is \n"
    val conn = db.getConnection()
    
    try {
      val sql = "SELECT * FROM vehicle WHERE client_id = ?"
      val stmt = conn.prepareStatement(sql)
      stmt.setInt(1, clientId)
      val rs = stmt.executeQuery()
//      val rs = stmt.executeQuery("SELECT * FROM client WHERE firstName = ?")
      
      rs.beforeFirst()
      
      while(rs.next()) {
        val vehicleId = rs.getInt("vehicle_id")
        val clientId = rs.getInt("client_id")
        val make = rs.getString("make")
        val model = rs.getString("model")
        
        var v1 = Vehicle(vehicleId, clientId, make, model)
  
        implicit val v1Writes = Json.writes[Vehicle]
  
        val clientVehicleJson: JsValue = Json.toJson(v1)
        
        clientVehicles.append(clientVehicleJson)
        
        outString += clientVehicleJson
        outString += "\n"
      }
      while (rs.next()) {
        outString += rs.getString("client_id")
        outString += "\n"
      }
    } finally {
      conn.close()
    }
    Ok(Json.toJson(clientVehicles))
  }
  
  def getAllClients() = Action {
    clients.clear()
    var outString = "";
//    var outString = "Number is \n"
    val conn = db.getConnection()
    
    try {
      val sql = "SELECT * FROM client"
      val stmt = conn.prepareStatement(sql)
      val rs = stmt.executeQuery()
//      val rs = stmt.executeQuery("SELECT * FROM client WHERE firstName = ?")
      
      rs.beforeFirst()
      
      while(rs.next()) {
        val id = rs.getInt("client_id")
        val firstName = rs.getString("first_name")
        val lastName = rs.getString("last_name")
        val middleInitial = rs.getString("middle_initial")
        
        var p = Person(id, firstName, lastName, middleInitial)
  
        implicit val p1Writes = Json.writes[Person]
  
        val personJson: JsValue = Json.toJson(p)
        
        clients.append(personJson)
        
        outString += personJson
        outString += "\n"
      }
      while (rs.next()) {
        outString += rs.getString("client_id")
        outString += "\n"
      }
    } finally {
      conn.close()
    }
    Ok(Json.toJson(clients))
  }
  
  def getAllVehicles() = Action {
    vehicles.clear()
    var outString = "";
//    var outString = "Number is \n"
    val conn = db.getConnection()
    
    try {
      val sql = "SELECT * FROM vehicle"
      val stmt = conn.prepareStatement(sql)
      val rs = stmt.executeQuery()
//      val rs = stmt.executeQuery("SELECT * FROM client WHERE firstName = ?")
      
      rs.beforeFirst()
      
      while(rs.next()) {
        val vehicleId = rs.getInt("vehicle_id")
        val clientId = rs.getInt("client_id")
        val make = rs.getString("make")
        val model = rs.getString("model")
        
        var v = Vehicle(vehicleId, clientId, make, model)
  
        implicit val vWrites = Json.writes[Vehicle]
  
        val vehicleJson: JsValue = Json.toJson(v)
        
        vehicles.append(vehicleJson)
        
        outString += vehicleJson
        outString += "\n"
      }
      while (rs.next()) {
        outString += rs.getString("client_id")
        outString += "\n"
      }
    } finally {
      conn.close()
    }
    Ok(Json.toJson(vehicles))
  }
}