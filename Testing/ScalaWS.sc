object ScalaWS {
  println("Welcome to the Scala worksheet")       //> Welcome to the Scala worksheet
  
  val name: String = "Test"                       //> name  : String = Test
  
  def addition(x: Int, y: Int) = {
  	x + y
  	}                                         //> addition: (x: Int, y: Int)Int
  
  var z = addition(1, 3)                          //> z  : Int = 4
  
  var y = true.||(false)                          //> y  : Boolean = true
  
}