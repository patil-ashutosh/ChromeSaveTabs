function saveTabTag(){

    var len_tags = localStorage.length;
    var initial_height = $('body').height();
    msg_saved = 'Session Saved.'
    //setHeight(len_tags, 1, initial_height);

    //alert(height_body);
    //$('body').css('height', height_body*2);
    var name = $('input').val();

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
       
    
      } else{
      alert("Sorry! No Web Storage support..");
      // Sorry! No Web Storage support..
      }
    //var urls_list = localStorage.getItem(name);
    //alert(localStorage.getItem(name));
    });
   console.log(name);
  //  debugger;
    saveToStorageLogic(name,tab_urls,initial_height);
    getAllSavedNames1(name);
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

  function getAllSavedNames(){

    var len_tags = localStorage.length;
    var listContainer=document.getElementsByClassName('listOfSavedTabs');
    var listElement = "<ul></ul>";
    $(".listOfSavedTabs").append(listElement);
    console.log(len_tags);
    // listContainer.appendChild(listElement);
    for (var i=0;i<len_tags;i++){
      var listItem="<li>"+localStorage.key(i)+"<img id='theImg' src='icons8-restore-32.png' title='Retore Tabs'/><img id='theImg' src='icons8-delete-bin-32.png' title='Delete Tabs'/></li>";
      $(".listOfSavedTabs ul").append(listItem);
      // $(".listOfSavedTabs ul li").append('<img id="theImg" src="icons8-restore-32.png" title="Retore Tabs"/>');
      // $(".listOfSavedTabs ul li").append('<img id="theImg" src="icons8-delete-bin-32.png" title="Delete Tabs"/>');
    }   
   
  }

  function getAllSavedNames1(name){

    var len_tags = localStorage.length;
    // var listContainer=document.getElementsByClassName('listOfSavedTabs');
    // var listElement = "<ul></ul>";
    // $(".listOfSavedTabs ul").append(listElement);
    console.log(len_tags);
    // listContainer.appendChild(listElement);
    
      var listItem="<li>"+name+"<img id='theImg' src='icons8-restore-32.png' title='Retore Tabs'/><img id='theImg' src='icons8-delete-bin-32.png' title='Delete Tabs'/></li>";
      $(".listOfSavedTabs ul").append(listItem);
      // $(".listOfSavedTabs ul li").append('<img id="theImg" src="icons8-restore-32.png" title="Retore Tabs"/>');
      // $(".listOfSavedTabs ul li").append('<img id="theImg" src="icons8-delete-bin-32.png" title="Delete Tabs"/>');
       
   
  }


//custom Confrim Dialog with Custom message and callback handler
