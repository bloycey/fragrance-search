searchFragrantica = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://duckduckgo.com/?q=!ducky+" + query +"&sites=fragrantica.com"});
};

chrome.contextMenus.create({
  title: "Search Fragrantica",
  contexts:["selection"],
  onclick: searchFragrantica
});

searchBasenotes = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://duckduckgo.com/?q=!ducky+" + query +"&sites=basenotes.net"});
  };
  
  chrome.contextMenus.create({
    title: "Search Basenotes",
    contexts:["selection"],
    onclick: searchBasenotes
  });