package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import models.Client

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class MyController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  
  def client1() = Action { 
    val cl = Client("Farshad", "Kargar")
    Ok(views.html.client(cl))
  }
  
  def client(fname: String) = Action { 
    val cl = Client("test", fname)
    Ok(views.html.client(cl))
  }
}