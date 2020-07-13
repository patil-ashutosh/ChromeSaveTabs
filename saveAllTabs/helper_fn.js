
//<input type="text" placeholder="Name" class="name form-control" required />

function customComfirm(tab_urls, initial_height){
  var d = new Date();
  var strDate = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
  var name_session = "Session-"+ strDate
  $.confirm({
    title: false,
    content: '' +
    '<form action="" class="formName">' +
    '<div class="form-group">' +
    '<label>Enter Session Name</label>' +
    '<textarea name="Text1" width: 100%; rows="2" class="name form-control" required>' +name_session+ '</textarea>' +
    '</div>' +
    '</form>',
    buttons: {
        formSubmit: {
            text: 'Submit',
            btnClass: 'btn-blue',
            action: function () {
                var name = this.$content.find('.name').val();
                if(!name){
                    //$.alert('Name Cannot be empty!');
                    msg = 'Name cannot be blank'
                    $.confirm({
                      title: false,
                      content: msg,
                      type:"red",
                      buttons: {
                          Ok: {
                              btnClass: 'btn-warning',
                              text: 'Ok', // With spaces and symbols

                          }
                      }
                  });
                    return false;
                }
                saveToStorageLogic(name, tab_urls, initial_height);
                
            }
        },
        cancel: function () {
            //close
            $('body').css('height', initial_height);

        },
    },
    onContentReady: function () {
        // bind to events
        var jc = this;
        this.$content.find('form').on('submit', function (e) {
            // if the user submits the form by pressing enter in the field.
            e.preventDefault();
            jc.$$formSubmit.trigger('click'); // reference the button and click it
        });
    }
});
}





function setHeight(len_tags, mult, initial_height){

    if(len_tags != 0){
        var height_body = initial_height + (34 * (len_tags+1) * 2);
    }else{
        var height_body = (34 + initial_height*mult*1.5)
    }
  $('body').css('height', height_body);
}

