function setData(){
const  now = new Date();
const  seconds =  now.getSeconds();
 console.log(seconds);
    
}

setInterval(setData,1000);

