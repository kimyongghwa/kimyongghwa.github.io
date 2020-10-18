var num = 0;
var main;
function gomain(){
  num = 0;
  main = document.getElementById("main");
  main.innerHTML = ' <img class = "Main" src="./Asset/MAIN.png" width = 1000 alt="WE"></img>'
}
function info(){
  num = 1;
  main = document.getElementById("main");
  main.innerHTML = '<br><img src="./Asset/Sicmul.png" class = "Flower" alt="WE" width = 250><img src="./Asset/Sicmul.png" class = "Flower" alt="WE" width = 250><img src="./Asset/Sicmul.png" class = "Flower" alt="WE" width = 250><div id = "info"><br><br><h3>김 준 서(김 용 과)</h3><br><br>010-4921-8785<br><br>tommy030507@naver.com</div>'
}
function clothes(){
  num = 2;
  main = document.getElementById("main");
  main.innerHTML = '<p><br><h2>Double Hole Jacket.</h2> by 2019 12 <br><img class = "C1" src="./Asset/Jacket1.jpg" alt="WE" height = 250></img>'+
  '<img  class = "C2" src="./Asset/Jacket2.jpg" alt="WE" height = 250></img></p>'+
  '<p><br><h2>Printing T-shirts.</h2> by 2020 04 <br><img class = "C3" src="./Asset/t-shirts1.jpg" alt="WE" height = 250></img>'+
  '<img  class = "C4" src="./Asset/t-shirts2.jpg" alt="WE" height = 250></img></p>'


}
function art(){
  num = 3;
  main = document.getElementById("main");
  main.innerHTML = '<p><br><h2>Tri LOGO.</h2> by 2019 11 <br><img class = "A" src="./Asset/yongghwaZ.png" alt="WE" width = 400></img></p>'
  +'<p><br><h2>닭갈비 People.</h2> by 2020 04 <br><img class = "A" src="./Asset/DAK.png" alt="WE" width = 300></img></p>'
  +'<p><br><h2>Half Astro Girl.</h2> by 2020 05 <br><img class = "A" src="./Asset/marsgirl2.7.8.png" alt="WE" width = 400></img></p>'
  +'<p><br><h2>Double Hole Girl.</h2> by 2020 05 <br><img class = "A" src="./Asset/T1.png" alt="WE" width = 600></img></p>'
  +'<p><br><h2>Space Plants.</h2> by 2020 06 <br><img class = "A" src="./Asset/Sicmul.png" alt="WE" width = 400></img></p>'
}