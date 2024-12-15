const displayContent=(data)=>{
    output.value+=data
}

const clearAllContent=()=>{
    output.value=""
    output.placeholder="0"
}

const clearlast=()=>{
    output.value=output.value.slice(0,-1)
}

const showresult=()=>{
    try{
        console.log("try block");
        
        output.value=eval(output.value)
    }
    catch(err){
        console.log("catch block");
        
          console.log(err);
          output.value=""
          output.placeholder="Invalid expression"
          
    }
    finally{
        console.log("finally block");
        console.log("task completed");
        
        
    }
}