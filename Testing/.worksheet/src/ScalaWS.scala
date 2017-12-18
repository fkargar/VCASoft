object ScalaWS {;import org.scalaide.worksheet.runtime.library.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(60); 
  println("Welcome to the Scala worksheet");$skip(31); 
  
  val name: String = "Test";System.out.println("""name  : String = """ + $show(name ));$skip(52); 
  
  def addition(x: Int, y: Int) = {
  	x + y
  	};System.out.println("""addition: (x: Int, y: Int)Int""");$skip(28); 
  
  var z = addition(1, 3);System.out.println("""z  : Int = """ + $show(z ));$skip(28); 
  
  var y = true.||(false);System.out.println("""y  : Boolean = """ + $show(y ))}
  
}
