function clearSpecificData(key, IdName, parentNext) {
  var msg = "Do you want delete " + "<strong>" + key.trim() + "</strong>" + " session?"
  var yes = "Yes";
  var no = "No";
  $.confirm({
    content: msg,
    title: '',
    buttons: {
      Delete: {
        btnClass: 'btn btn-danger',
        text: 'Delete',
        action: function() {
          window.localStorage.removeItem(key);
          $("#" + IdName).parent().remove();
          if (localStorage.length == 0) {
            $('.listOfSavedTabs p').css("visibility", "visible");
          }
          if (localStorage.length == 1) {
            $('.cleanData').css("visibility", "hidden");
          }
          if (parentNext.is('ul')) {
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

function clearAllData() {
  var msg = "Are you sure you want delete all data?";
  $.confirm({
    content: msg,
    title: '',
    buttons: {
      Delete: {
        btnClass: 'btn btn-danger',
        text: 'Delete',
        action: function() {
          localStorage.clear();
          $(".listOfSavedTabs ul li").remove();
          $(".listOfSavedTabs ul ul").remove();
          $('.listOfSavedTabs p').css("visibility", "visible");
          $('.cleanData').css("visibility", "hidden");
        }
      },
      cancel: {
        text: 'Cancel',
      }
    }
  })
}