var weeks = ["Week 1", "Week 2", "Week 3"];
weeks.forEach(myFunction);

function myFunction(item) {
  document.getElementById("list").innerHTML += item + "<br>";
}
