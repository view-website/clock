const deg = 6;
setInterval(()=>{
 let day = new Date();
 let hh = day.getHours() * 30;
 let mm = day.getMinutes() * deg;
 let ss = day.getSeconds() * deg;
 document.querySelector("#hr").style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
 document.querySelector("#mn").style.transform = `rotateZ(${(mm)}deg)`;
 document.querySelector("#sc").style.transform = `rotateZ(${(ss)}deg)`;
})