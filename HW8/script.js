var mas = [
  {
    title: "image_1",
    ref: "https://cdn1.iconfinder.com/data/icons/avengers-1/512/avangers_icon018-512.png"
  },
  {
    title:"image_2",
    ref: "https://cdn1.iconfinder.com/data/icons/avengers-1/512/avangers_icon015-512.png"
  },
  {
    title:"image_3",
    ref: "https://cdn1.iconfinder.com/data/icons/avengers-1/512/avangers_icon013-512.png"
  },
   {
    title:"image_4",
    ref: "https://cdn1.iconfinder.com/data/icons/avengers-1/512/avangers_icon016-512.png"
  },
   {
    title:"image_5",
    ref: "https://cdn1.iconfinder.com/data/icons/avengers-1/512/avangers_icon019-512.png"
  },
   {
    title:"image_6",
    ref: "https://cdn1.iconfinder.com/data/icons/avengers-1/512/avangers_icon017-512.png"
  }
]

var JSONS = JSON.stringify(mas)
var JSONP = JSON.parse(JSONS)


function show() {
  for (var x of JSONP){
    var p = document.createElement('p')
    var img = document.createElement('img')
    console.log(p, img)
    document.body.appendChild(p).innerHTML = x.title
    document.body.appendChild(img).src = x.ref
    p.setAttribute('style','')
    img.setAttribute('style','text-align:center')
  }
  
}

show()