 function init()
 {

 }
 function drop(ev) 
  {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    if(ev.target.id=="lo_one")
    {
      document.getElementById("lo_one").src = "../images/good.png"
    }
    else
    {
     alert("I want the revert to happen here");
    } 
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
