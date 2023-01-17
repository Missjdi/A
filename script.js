let result = document.getElementById('inputext');

const calc = (btnValue)=>{
   result.value+=btnValue;
} 
const Result = ()=>{
   try{
        result.value = eval(result.value)
   }
   catch(error){
        alert('عدد نامعتبر است')
   }
}
function equal(){
   Result;
}
function clr(){
   result.value = ' ';
}
function dlt(){
   result.value = result.value.slice(0,-1);
}

