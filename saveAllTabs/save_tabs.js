function saveTabTag(){

    var len_tags = localStorage.length;
    var initial_height = $('body').height();
    msg_saved = 'Session Saved.'
    //setHeight(len_tags, 1, initial_height);

    //alert(height_body);
    //$('body').css('height', height_body*2);
    var name = $('input').val().trim();
    $('input').val('');
    if(len_tags != 0){
        var height_body = initial_height + (34 * (len_tags+1) * 2);
    }else{
        var height_body = (34 + initial_height*2)
    }
    var height_body = (34 + initial_height*2)
    //  

    let count = 0;
    var tab_urls = [];
    
   
    chrome.tabs.query({'currentWindow': true}, function (tabs) {
        tabs.forEach(function(tab){
          count = count + 1;
          
        tab_urls.push(tab.url);
        });
            
      saveToStorageLogic(name,tab_urls,initial_height);
  
      if (typeof(Storage) !== "undefined") {              

        //alert(strDate);    
      } else{
      alert("Sorry! No Web Storage support..");
      // Sorry! No Web Storage support..
      }
    //var urls_list = localStorage.getItem(name);
    //alert(localStorage.getItem(name));
    });    
   
  }
  


  function saveToStorageLogic(name, tab_urls, initial_height){
    msg1='Saved'
    if(name in localStorage){
      msg = "Tag '" +"<strong>"+ name + +"</strong>"+"' already exist. Do you want to Overwrite ?";
      msg = 'The session with name ' +"<strong>"+name+"</strong>"+" already exists. Do you want to overwrite it?"
      
      $.confirm({
        content: msg,
        title: false,
        
        type: 'red',
        buttons: {
            Yes: {
              
                text: 'Yes',                
                action: function(){
                localStorage.setItem(name, JSON.stringify(tab_urls));
                $('body').css('height', initial_height).delay(1000);
                $.confirm({
                  content: msg1,
                  title: false,
                  buttons: {
                    close:{
                      btnClass: 'AddedClose'
                    },
                    ok:{
                      btnClass: 'AddedOk'
                    }
                  }
                
                 
                })

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
      $.confirm({
        content: msg1,
        title: false,
        buttons: {
          close:{
            btnClass: 'AddedClose'
          },
          ok:{
            btnClass: 'AddedOk'
          }
        }
      
       
      })
      getAllSavedNames1(name);

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
      var deleteButton='deleteButton'+i;
      var restoreButton='restoreButton'+i;
      var listItem="<li><img id="+restoreButton+" src='icons8-restore-32.png' title='Retore Tabs'/><img id="+deleteButton+" src='icons8-delete-bin-32.png' title='Delete Tabs'/> &nbsp;&nbsp;&nbsp;"+localStorage.key(i)+"</li>";
    
      $(".listOfSavedTabs ul").append(listItem);      
    }      
  }

  function getAllSavedNames1(name){

    var len_tags = localStorage.length;
    // var listContainer=document.getElementsByClassName('listOfSavedTabs');
    // var listElement = "<ul></ul>";
    // $(".listOfSavedTabs ul").append(listElement);
    console.log(len_tags);
    // listContainer.appendChild(listElement);
    var deleteButton='deleteButton'+(len_tags-1);
    var restoreButton='restoreButton'+(len_tags-1);
    var listItem="<li><img id="+restoreButton+" src='icons8-restore-32.png' title='Retore Tabs'/><img id="+deleteButton+" src='icons8-delete-bin-32.png' title='Delete Tabs'/> &nbsp;&nbsp;&nbsp;"+name+"</li>";
    $(".listOfSavedTabs ul").append(listItem);   
  }

  

//custom Confrim Dialog with Custom message and callback handler


