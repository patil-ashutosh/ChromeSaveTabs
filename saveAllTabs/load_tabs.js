function loadTabs(key){


  var urls_list1 = localStorage.getItem(key);
 
  var x = JSON.parse(urls_list1);
  var x1=[];
  var msg = "Open session in ..";
  for(let j=0;j<x.length;j++){
    x1.push(x[j][1]);
  }
  console.log(x1)
  $.confirm({
    content: msg,   
    title: false,
    buttons: {
        Current: {
          btnClass: 'restore',
          text: 'Existing Window',
          action: function () {
            for(let j=0;j<x.length;j++){
              chrome.tabs.create({url: x[j][1]});
            }
          }

        },
        New: {
          btnClass: 'restore',
          text: 'New Window',
          action: function () {
            chrome.windows.create({url: x1});
          }
          //$('body').css('height', initial_height);
          //close
      },
      cancel: {
        btnClass: 'btn btn-default restoreCancel',
        text: 'Cancel',

    }
    }
  });
  defaultSessionName();
}



