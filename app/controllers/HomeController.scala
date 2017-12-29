package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import models.Person._
import models.Person
import play.api.libs.json._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
//  import Person._
  
  var p1 = Person(1, "Afshin", "Kargar", "")
  
  implicit val p1Writes = Json.writes[Person]
  
  val personJson: JsValue = Json.toJson(p1)
  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def welcome = Action { implicit request: Request[AnyContent] =>
    Ok(personJson)
  }
}
