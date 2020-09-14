import rxjs from 'rxjs';
let Observable=rxjs.Observable;

let myObservable=new Observable(subscriber=>{
    let counter=0;
    const interval=setInterval(()=>{
        subscriber.next(counter++)
    },1000);

    setTimeout(() =>{
        clearInterval(interval);
        subscriber.complete()}
    ,5000);

    // setTimeout(() => {
        
    //     subscriber.error("3 seconds error")
    // }, 3000);
});
//list of instructions when someone subscribe

myObservable.subscribe(
    nextVal=>{ console.log(nextVal)}, //what to do when nextVal arrives
    err=>{console.log(err)},  //when error happen
    ()=>{console.log("COMPLETED")}  //what to do when the observable completes
);  

//all error is non-recoverable. Observable ends right aways when error happen
//not mandatory to provide all 3 call backs. 
//same for the completed event.
//typically we ignore the complete event but have callbacks for the other two