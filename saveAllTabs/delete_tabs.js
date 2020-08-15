/*function clearAllTabs(){

    var len_tags = localStorage.length;
    var initial_height = $('body').height();
    var mod = $("#clearModal .modal-body");
    var mod_header = $("#clearModal .modal-header")
    var mod_footer = $("#clearModal .modal-footer")


    if (len_tags==0){
      mod.remove();
      mod_footer.remove();
      mod_header.remove();
      $("#clearModal").modal("hide");
      $.confirm({
        title: false,
        content: "No sessions stored!",
        type:"red",
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
  }

    setHeight(len_tags, 2, initial_height);
  
    var mod = $("#clearModal .modal-body");
    mod.empty();
    var blacklist_val = ['length', 'key', 'getItem', 'setItem', 'removeItem', 'clear'];
    var keys_tabs = [];
    for(var i=0;i<localStorage.length;i++){
      keys_tabs.push(localStorage.key(i))};
  
    $.each(keys_tabs, function(ind, text) {
      var val = text
      //var list_elem ='<a class="dropdown-item" id="' +val+ '" href="#">' + val +'</a>';
      var pop_list = '<a class="dropdown-item" id="' +val+ '" href="#">' + val + '<button type="button" class="close" id ="close_id" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+'</a>'
      var list_elem =$(pop_list).on('click', function(){
        var msg = "Do you want delete " + val+ " session?"
        var yes = "Yes"
        var no = "No"
        var curr_ele = $(this);
  
         $.confirm({
          content: msg,
          title: '',
          buttons: {
              Delete: {
                btnClass: 'btn btn-danger',
                text: 'Delete',
                action: function (){
                  curr_ele.hide();
                  localStorage.removeItem(val);
                  if (localStorage.length==0){
                    document.location.href="popup.html";
                  }
  
                  }
                },
                cancel: {
                  btnClass: 'btn-blue',
                  text: 'Cancel',
      
              }
  
              },
  
          })
          //debugger;
        
      })
      mod.append(list_elem)
    });
  
    $('#clrall').click(function(){
      var msg = "Are you sure?  Deleting all sessions."
      var yes = "Delete"
      var no = "Cancel"
  
      
       $.confirm({
         content: msg,
         title: '',
         type:'red',
         buttons: {
             Yes: {
              btnClass: 'btn-danger',
              text: "Delete",
              action: function () {
                 localStorage.clear();
                 // here the button key 'hey' will be used as the text.
                 //$.alert('Deleted All Tags.');

                 msg = 'Deleted all sessions.'
                 $.confirm({
                   title: false,
                   content: msg,
                   buttons: {
                       Ok: {
                           btnClass: 'btn-success',
                           text: 'Ok', // With spaces and symbols
                           action: function () {
                             $('body').css('height', initial_height);
                             document.location.href="popup.html";
                           }
                       }
                   }
                 });

                 //$('body').css('height', initial_height);
                }
             },
             cancel: function () {
               //$('body').css('height', initial_height);
               //close
           },
         }
       });
  
  
    })
  
    $('#clrCloseicon').click(function(){
      $('body').css('height', initial_height);
  
    });
    $('#clrClose').click(function(){
      $('body').css('height', initial_height);
  
    });   
  }
 */

  function clearSpecificData(key, IdName, parentNext){
    var msg = "Do you want delete " +"<strong>"+key.trim()+"</strong>"+ " session?"
        var yes = "Yes";
        var no = "No";  
         $.confirm({
          content: msg,
          title: '',
          buttons: {
              Delete: {
                btnClass: 'btn btn-danger',
                text: 'Delete',
                action: function (){
                  window.localStorage.removeItem(key);  
                  $("#"+IdName).parent().remove();  
                  if(localStorage.length==0){
                    $('.listOfSavedTabs p').css("visibility","visible");
                  }
                  if (localStorage.length==1){
                    $('.cleanData').css("visibility","hidden");
                  }
                  if(parentNext.is('ul')){                    
                    parentNext.remove();  
                  }
                  }
                },
                cancel: {                
                  text: 'Cancel',
              }
              },
          })
          defaultSessionName();
   
   }

   function clearAllData(){
     
    var msg = "Are you sure you want delete all data?";

     $.confirm({
      content: msg,
      title: '',
      buttons: {
          Delete: {
            btnClass: 'btn btn-danger',
            text: 'Delete',
            action: function (){
              localStorage.clear();
              $(".listOfSavedTabs ul li").remove();
              $('.listOfSavedTabs p').css("visibility","visible");
              $('.cleanData').css("visibility","hidden");
            }},
            cancel: {                
              text: 'Cancel',
          }
          }
      })


   }