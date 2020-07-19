
$(document).ready(function() {

getAllSavedNames();
  
  $('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('#btnTest').click(function(){
    ShowCustomDialog();
    });
                      
    
  //SaveTabsToTag button
  $('.saveTagForm button').click(saveTabTag);


 
  //modal
  
  $('#exampleModalLong').on('show.bs.modal', loadTabs);



  $('#clearModal').on('show.bs.modal', clearAllTabs);
  
  


});






