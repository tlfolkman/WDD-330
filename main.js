const links = [
  {
    label: "Week 1",
    url:  "week1.html"
  }
]

links.forEach(myfunction)

function myfunction(links)
{
  document.getElementById("list").innerHTML = "<li><a href=" + links["url"]  + " " + "style=" + '"' + "color: beige; font-size: xx-large; text-decoration: none" + '"' + ">" + links["label"] + "</a></li>" 
}
