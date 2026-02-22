function createCountdown(seconds,onTick,oncomplete){
    let remaining =seconds;
    let timer = null;
    let paused =false;

    function tick(){
        if (paused) return;
        if(remaining >0){
            onTick(remaining);
            remaining--;
            timer=setTimeout(tick, 1000);
            
        }else{
            oncomplete();
        }
    }
    return{
        start(){
            tick();
        },
        paused() {
            paused=true;
            clearTimeout(timer);
        },
        resume(){
            if(paused){
                paused=false;
                tick();
            }
        }
    };
}
const countdown=createCountdown(
    5,
    (time)=>console.log("Remaining:",time),
    () => console.log("Done")
);
countdown.start();
setTimeout(()=>countdown.paused(),2000);
setTimeout(()=>countdown.resume(),4000);