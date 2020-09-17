const links = [
  {
    label: "Week 1",
    url:  "notes.html"
  }
]

links.forEach(myfunction)

function myfunction(links)
{
  document.getElementById("list").innerHTML = "<li><a href=" + links["url"] + ">" + links["label"] + "</a></li>" 
}
