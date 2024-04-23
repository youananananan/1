
let tj=document.getElementById("from");
tj.onsubmit=function(){
  let ac=document.getElementById("z").value;
  let pa=document.getElementById("m").value;
  if(ac==0||pa==0){
    alert("账户密码不能为空");
  }
  else{
    window.open("http://127.0.0.1:5500/2.html");
  }
}