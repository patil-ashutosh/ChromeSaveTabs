
$(document).ready(function() {

getAllSavedNames();


  
  // $('#myList a').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).tab('show')
  // });

  // $('#btnTest').click(function(){
  //   ShowCustomDialog();
  //   });
                      
    
  //SaveTabsToTag button
  $('.saveTagForm button').click(saveTabTag);

  
  // $('#exampleModalLong').on('show.bs.modal', loadTabs);


  $(document.body).on('click',"[id*='deleteButton']", function(){
    var temp=$(this).parent().text();
    var IdName = $(this).attr("id");
    console.log(temp);    
    clearSpecificData(temp.trim(), IdName);   
    // $(this).parent().remove();  
  });
  
  

  $(document.body).on('click',"[id*='restoreButton']", function(){
    var temp=$(this).parent().text();  
    
    loadTabs1(temp.trim());   
  });


})






