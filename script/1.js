 
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
    var x=document.getElementById("one");
    window.alert(x);
    if(x==1)
      document.getElementById("re_one").src='../images/good.png';
    else
      document.getElementById("re_one").src='../images/unity.png';
  }
