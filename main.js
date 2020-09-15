var weeks = ["Week 1", "Week 2", "Week 3"];
var links = ["notes.html", "challenges.html", "exercises.html"]
weeks.forEach(myFunction);
links.forEach(myFunction);

function myFunction(weeks, links) {
  document.getElementById("list").innerHTML += "<a href=" + links + ">" + weeks + "<br>";
}
