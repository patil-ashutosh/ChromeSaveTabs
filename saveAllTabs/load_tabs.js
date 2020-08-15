function loadTabs1(key){


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

function loadTabs(event){
  
    var len_tags = localStorage.length;
    var initial_height = $('body').height();
    setHeight(len_tags, 2, initial_height);

    var mod = $("#exampleModalLong .modal-body");
    var mod_header = $("#exampleModalLong .modal-header")
    var mod_footer = $("#exampleModalLong .modal-footer")
    mod.empty();
    if (len_tags==0){
        mod.remove();
        mod_footer.remove();
        mod_header.remove();
        $("#exampleModalLong").modal("hide");
        $.confirm({
          title: false,
          content: "No sessions stored!",
          type: 'red',
          buttons: {
              Ok: {
                  btnClass: 'btn-warning',
                  text: 'Ok', // With spaces and symbols
                  action: function () {
                    document.location.href="popup.html";
                  }
              }
          }
      });
        //document.location.href="popup.html";

    }
    var keys_tabs = [];
    for(var i=0;i<len_tags;i++){
      keys_tabs.push(localStorage.key(i))};
  
    $.each(keys_tabs, function(ind, text) {
      var val = text
      
      var pop_list ='<a class="dropdown-item" style="text-align:center" id="' +val+ '" href="#">' + val +'</a>';
      var list_elem = $(pop_list).on("click", function(event){   
        
        var urls_list = localStorage.getItem(val);
        var x = JSON.parse(urls_list);
        var msg = "Open session in ..";


        $.confirm({
          content: msg,
          title: false,
          buttons: {
              Current: {
                btnClass: 'btn-blue btn-block',
                text: 'Existing Window',
                action: function (){
                  for(let j =0;j<x.length;j++){
                    chrome.tabs.create({url: x[j]});
                  }
                }

              },
              New: {
                btnClass: 'btn-blue btn-block',
                text: 'New Window',
                action: function () {
                  chrome.windows.create({url: x});
                }
                //$('body').css('height', initial_height);
                //close
            },
            cancel: {
              btnClass: 'btn-warning btn-block',
              text: 'Cancel',

          },
          }
        });
        
      });
      mod.append(list_elem)
    });

    $('#loadClose').click(function(){
      $('body').css('height', initial_height);

    });
    $('#loadCloseicon').click(function(){
      $('body').css('height', initial_height);

    });
    
}


