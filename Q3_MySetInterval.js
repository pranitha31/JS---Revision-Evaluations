function mySetInterval(callback,delay){
    let active=true;

    function run(){
        if(!active) return;
        callback();
        setTimeout(run,delay);
    }
    setTimeout(run,delay);

    return{
        clear(){
            active = false;
        }
    };
}
const interval = mySetInterval(()=>console.log("Tick"));
setTimeout(()=>interval.clear(), 5000);