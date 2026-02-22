function createRateLimiter(limit,interval){
    let calls=0;
    let timer =null;

    return function(fn){
        if (calls<limit){
            calls++;
            fn();

        }else{
            console.log("Error:Rate limit exceeded");
        }
        if(!timer){
            timer = setTimeout(()=>{
                calls=0;
                timer=null;

            }, interval);
        }
    };
}
const limiter =createRateLimiter(2, 3000);
limiter(()=>console.log("call 1"));
limiter(()=>console.log("call 2"));
limiter(()=>console.log("Blocked"));