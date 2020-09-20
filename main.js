const links = [
  {
    label: "Week 1",
    url:  "week1.html"
  }
  ,
  {
    label: "week 2",
    url: "week_2.html" 
  }
]

links.forEach(myfunction)

function myfunction(links)
{
  document.getElementById("list").innerHTML = "<li><a href=" + links["url"]  + " " + "style=" + '"' + "color: beige; font-size: xx-large; text-decoration: none" + '"' + ">" + links["label"] + "</a></li>" 
}
