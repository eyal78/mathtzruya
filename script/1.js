 function init()
  {

  }
 function drop(ev) 
  {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    if(ev.target.id=="one_layer")
     {
      document.getElementById("one").src = "../images/good.png"
      document.getElementById("").innerHTML
     }
    else
      alert("hello!")
  }
 function allowDrop(ev)
  {
    ev.preventDefault();    
  }
  
 function drag(ev) 
  {
    ev.dataTransfer.setData("text", ev.target.id);   
  }
  
  function one()
  {
    var x=document.getElementById("one");
    window.alert(x);
    document.getElementById("two").innerHTML="welcome";
    if(x==1)
      document.getElementById("re_one").src='../images/good.png';
    else
      document.getElementById("re_one").src='../images/unity.png';
  }
