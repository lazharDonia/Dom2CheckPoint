
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let carre=document.getElementsByTagName("div") 
  function setRandomColor() {
    for (let i=0; i<carre.length;i++) {
      
      carre[i].setAttribute("style","background-color:"+getRandomColor())
   
      console.log(carre)

    }
   
   
  }