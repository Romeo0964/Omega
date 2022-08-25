if("serviceWorker" in navigator){
    navigator.serviceWorker.register("Service_Woker.js")
    .then((reg)=>{
        console.log("Service worker registered.",reg);
    })
    .catch((err)=>{
        console.log("Service worker not registered.",err);
    })
}