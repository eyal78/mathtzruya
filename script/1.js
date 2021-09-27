 
 function allowDrop(ev)
 {
    ev.preventDefault();
 }
  
  function drag(ev) 
  {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) 
  {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  function one()
  {
    if(document.getElementById("lo_one").innerHTML=="1.png")
      document.getElementById("re_one").innerHTML=2;
    else
    document.getElementById("re_one").innerHTML=3;
  }
