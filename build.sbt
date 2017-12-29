name := """practice"""
organization := "com.vcasoft"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.3"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test
libraryDependencies += jdbc
libraryDependencies += "mysql" % "mysql-connector-java" % "5.1.45"

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.vcasoft.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.vcasoft.binders._"

EclipseKeys.preTasks := Seq(compile in Compile, compile in Test)
