
let isEnabled = true;
let icon = {
  enabled : './src/images/icon-active.png',
  diabled : './src/images/icon-inactive.png',
};


chrome.action.onClicked.addListener(async (tab) => {

  
  chrome.tabs.sendMessage(tab.id,{ action : isEnabled ? "disable" : "enable" }, (response) => {
    return;
  });

  chrome.action.setIcon({path: isEnabled ? icon.diabled : icon.enabled });

  isEnabled = isEnabled ? false : true;

});