function saveTabTag(){

    var len_tags = localStorage.length;
    var initial_height = $('body').height();
    msg_saved = 'Session Saved.'
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
        tab_urls.push([tab.title,tab.url,tab.favIconUrl]);
        console.log(tab.favIconUrl);
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
              btnClass: 'saveYes',
                text: 'Yes',                
                action: function(){
                localStorage.setItem(name, JSON.stringify(tab_urls));
                $('body').css('height', initial_height).delay(1000);
                $("#savedMsg").css("visibility","visible");
                defaultSessionName();
                
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
          
      $("#savedMsg").css("visibility","visible");
      defaultSessionName();
      getAllSavedNames1(name);

    }  
    setTimeout(function(){
      $("#savedMsg").css("visibility","hidden");
    },2000)
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
      var sortRightButton='sortRightButton'+i;
      var listItem="<li value=false><img id="+restoreButton+" src='icons8-restore-32.png' title='Retore Tabs'/><img id="+deleteButton+" src='icons8-delete-bin-32.png' title='Delete Tabs'/> &nbsp;&nbsp;&nbsp;"+localStorage.key(i)+"<img id="+sortRightButton+" src='icons8-sort-right-24.png'/></li>";
     
     
      $(".listOfSavedTabs ul").append(listItem);      
    }      
  }

  function getAllSavedNames1(name){
    var len_tags = localStorage.length;
    console.log(len_tags);   
    var deleteButton='deleteButton'+(len_tags-1);
    var restoreButton='restoreButton'+(len_tags-1);
    var sortRightButton='sortRightButton'+(len_tags-1);
    var listItem="<li value=false><img id="+restoreButton+" src='icons8-restore-32.png' title='Retore Tabs'/><img id="+deleteButton+" src='icons8-delete-bin-32.png' title='Delete Tabs'/> &nbsp;&nbsp;&nbsp;"+name+"<img id="+sortRightButton+" src='icons8-sort-right-24.png'/></li>";
    $(".listOfSavedTabs ul").append(listItem);   
    (localStorage.length==0) ?  $('.listOfSavedTabs p').css("visibility","visible") :  $('.listOfSavedTabs p').css("visibility","hidden");

    if (localStorage.length>1){
      $('.cleanData').css("visibility","visible");
    }
  }

    
  function defaultSessionName(){
    var d = new Date();
    var strDate = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    var name_session = "Session-"+ strDate;
    $('input').val(''+name_session);
  }

  



