
let bee = document.createElement('img');
bee.src = chrome.runtime.getURL("src/images/buzzbee.gif");

Object.assign(bee.style,{

    position : "absolute",
    pointerEvents : 'none',
    zIndex : 100000,
    transition : "all 0.2s",
    maxWidth : "150px",
    filter : 'drop-shadow(0px 0px 10px rgba(0, 0, 0,0.4)'

})


function followTheMouse(ev){
    bee.style.left = ev.pageX  + "px";
    bee.style.top = ev.pageY + "px";
}

chrome.runtime.onMessage.addListener((request,sender,sendResponse) =>{

    if(request.action === 'enable'){

        document.body.appendChild(bee);
        window.addEventListener('mousemove',followTheMouse);
        sendResponse({farewell:'Succesfuly enabled!'})

        return true;
    }

    document.body.removeChild(bee);
    window.removeEventListener('mousemove',followTheMouse);
    sendResponse({farewell:'Succesfuly disabled!'});

    return true;
});


document.body.appendChild(bee);
window.addEventListener('mousemove',followTheMouse);

