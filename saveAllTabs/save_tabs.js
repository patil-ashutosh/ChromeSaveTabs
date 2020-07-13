function saveTabTag(){

    var len_tags = localStorage.length;
    var initial_height = $('body').height();
    msg_saved = 'Session Saved.'
    //setHeight(len_tags, 1, initial_height);

    //alert(height_body);
    //$('body').css('height', height_body*2);
    if(len_tags != 0){
        var height_body = initial_height + (34 * (len_tags+1) * 2);
    }else{
        var height_body = (34 + initial_height*2)
    }
    var height_body = (34 + initial_height*2)
    $('body').css('height', height_body);

    let count = 0;
    var tab_urls = [];
    chrome.tabs.query({'currentWindow': true}, function (tabs) {
        tabs.forEach(function(tab){
          count = count + 1;
        //console.log(tab.url);
        tab_urls.push(tab.url);
        });

  
      if (typeof(Storage) !== "undefined") {


        //alert(strDate);
        customComfirm(tab_urls, initial_height);
    
      } else{
      alert("Sorry! No Web Storage support..");
      // Sorry! No Web Storage support..
      }
    //var urls_list = localStorage.getItem(name);
    //alert(localStorage.getItem(name));
    });
    
  }
  


  function saveToStorageLogic(name, tab_urls, initial_height){
    if(name in localStorage){
      msg = "Tag '" + name + "' already exist. Do you want to Overwrite ?";
      msg = 'The session with name ' +name + ' already exists. Do you want to overwrite it?'
      $.confirm({
        content: msg,
        title: false,
        
        type: 'red',
        buttons: {
            Yes: {
              
                btnClass: 'btn-warning',
                text: 'Yes',
                
                action: function(){
                localStorage.setItem(name, JSON.stringify(tab_urls));
                $('body').css('height', initial_height).delay(1000);


              }
                //$('body').css('height', initial_height);
            },
            cancel: function () {
              $('body').css('height', initial_height);
              //close
          },
        }
      });
  
    }
    else{
      localStorage.setItem(name, JSON.stringify(tab_urls));
      $('body').css('height', initial_height).delay(1000);

    }
    
  
  }



//custom Confrim Dialog with Custom message and callback handler
