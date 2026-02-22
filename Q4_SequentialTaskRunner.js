async function runSequential(tasks,delay) {
   const results=[];
   for (let task of tasks){
    try {
        const results =await task();
        results.push(results);
        await new Promise(res=>setTimeout(res,delay));
    } catch (error) {
        console.error("Taks faield:",error);
        break; 
    }
   } 
   return results;
}
const tasks =[
    async()=>"Task1 done",
    async()=>"Task2 done",
    async()=>{throw new Error("Task 3 failed");},
     async()=>"Task4 done",  
];
runSequential(tasks,1000).then(res=>console.log(res));