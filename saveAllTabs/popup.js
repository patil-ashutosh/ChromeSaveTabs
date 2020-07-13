
$(document).ready(function() {


  
  $('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('#btnTest').click(function(){
    ShowCustomDialog();
    });
                      
    
  //SaveTabsToTag button
  $('#myList a[href="#saveTabs"]').click(saveTabTag);


 
  //modal
  
  $('#exampleModalLong').on('show.bs.modal', loadTabs);



  $('#clearModal').on('show.bs.modal', clearAllTabs);
  
  


});






