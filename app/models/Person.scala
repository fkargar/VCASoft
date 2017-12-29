package models

import play.api.mvc._

case class Person(id: Int, firstName: String, lastName: String, middleInitial: String) 

////This works!!
//class Person(val firstName: String, val lastName: String) {
//
//  def getFirstName: String = {
//
//    return this.firstName
//  }
//  
//  def getLastName: String = {
//    return this.lastName
//  }
//  
//}
//
//object Person {
//  
//  def apply(firstName: String, lastName: String) = new Person(firstName, lastName)
//  
//}