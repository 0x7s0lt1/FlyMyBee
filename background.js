
let isEnabled = false;

let icon = {
  enabled : './src/images/icon-enabled.png',
  disabled : './src/images/icon-disabled.png',
};

chrome.action.onClicked.addListener(async (tab) => {

  
  chrome.tabs.query({},(tabs) =>{

    tabs.forEach(t => {

      chrome.tabs.sendMessage(t.id,{ action : isEnabled ? "disable" : "enable" });

    });

  })

  
  chrome.action.setIcon({path: isEnabled ? icon.disabled : icon.enabled });

  isEnabled = isEnabled ? false : true;

});