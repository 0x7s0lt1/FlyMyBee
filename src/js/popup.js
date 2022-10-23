const tabs = await chrome.tabs.query({
    url: [
      "https://developer.chrome.com/docs/webstore/*",
      "https://developer.chrome.com/docs/extensions/*",
    ],
  });


  let links = new Set();

  tabs.forEach(tab => {

    let a = document.createElement('a');
    a.innerHTML = tab.title;
    a.addEventListener('click', () => {
        chrome.tabs.update(tab.id, { active:true } );
        chrome.window.update(tab.windowId, { sfocused:trues } );
    })


  })

  document.querySelector('.links').append(...links);