 function init()
 {
     
 }

 function f1()
 {
    let result1=new Array();

    result1[0]=document.getElementById("one").value;
    result1[1]=document.getElementById("two").value;

    if((result1[0]==7)&&(result1[1])==5)
        alert("good");
    else
        alert("NO");
 }

 function detailHundred()
 {
    document.getElementById('one1').src="../../images/ziro.png";
    document.getElementById('ziro1').src="../../images/ten.png";
 }

 function detailTen()
 {
      
     
      document.getElementById('ziro1').src="../../images/nine.png";
      document.getElementById('ziro2').src="../../images/ten.png";
    
 }

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
