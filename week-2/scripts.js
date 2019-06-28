// data (variables)
var projectObject ={  name: `Project JavaScript No. 1`,
                      link: `https://github.com/NelsonNaja/javascript-1-cross-module/tree/master/week-2`,
                      description: `This is my second Project in JavaScript`
}

// functions
function print_deets(obj){
  for (let key in obj){ 
    if (key=="name") {
        console.log(`Project Name: ${obj[key]}`);
      } else if (key =="link"){
        console.log(`Our link is:   ${obj[key]}`);
      } else {
        console.log(`Project Description: ${obj[key]}`);
      }
   }  
}
