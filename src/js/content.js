
let bee = document.createElement('img');
bee.src = chrome.runtime.getURL("src/images/buzzbee.gif");

Object.assign(bee.style,{

    position : "absolute",
    pointerEvents : 'none',
    zIndex : 100000,
    transition : "all 0.2s",
    maxWidth : "150px",
    filter : 'drop-shadow(0px 0px 10px rgba(0, 0, 0,0.4)'

});


function followTheMouse(ev){
    bee.style.left = ev.pageX  + "px";
    bee.style.top = ev.pageY + "px";
};


chrome.runtime.onMessage.addListener((request) =>{

    try{
        
        if(request.action == 'disable'){

            document.body.appendChild(bee);
            window.addEventListener('mousemove',followTheMouse);
    
        }else if(request.action == 'enable'){
    
            document.body.removeChild(bee);
            window.removeEventListener('mousemove',followTheMouse);
    
        }

        return true;

    }catch(err){
        console.error(err);
        return false;
    }
    

});



