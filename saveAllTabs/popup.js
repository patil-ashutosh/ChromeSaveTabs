$(document).ready(function() {
  getAllSavedNames();
  defaultSessionName();

  $('input').each(function() {

    if ($(this).val().length != 0 || $(this).val() != '') {
      $('button').attr('disabled', false);
    } else {
      $('button').attr('disabled', true);
    }
  });

  $('input').focus(function() {
    $("#savedMsg").css("visibility", "hidden");
  });

  $('input').keyup(function() {

    if ($(this).val().length != 0) {
      $('button').attr('disabled', false);
    }
  });

  if (localStorage.length == 0) {
    $('.listOfSavedTabs p').css("visibility", "visible");
    $('.cleanData').css("visibility", "hidden");
  }
  if (localStorage.length > 1) {
    $('.cleanData').css("visibility", "visible");
  } else {
    $('.cleanData').css("visibility", "hidden");
  }


  $('.saveTagForm button').click(function() {
    $("#savedMsg").css("visibility", "hidden");
    if ($('input').val().trim() != '') {
      saveTabTag();
    }

  });

  $('input').keypress(function(event){
    if(event.keycode=='13'){
      $("#savedMsg").css("visibility", "hidden");
      if ($('input').val().trim() != '') {
        saveTabTag();
      }
    }
  });



  $(document.body).on('click', "[id*='deleteButton']", function() {
    $("#savedMsg").css("visibility", "hidden");
    var temp = $(this).parent().text();
    var IdName = $(this).attr("id");
    var parent = $(this).parent().next();
    clearSpecificData(temp.trim(), IdName, parent);
    // $(this).parent().remove();  
  });



  $(document.body).on('click', "[id*='restoreButton']", function() {
    $("#savedMsg").css("visibility", "hidden");
    var temp = $(this).parent().text();
    loadTabs(temp.trim());
  });

  

  $(document.body).on('click', "[id*='sortRightButton']", function() {
    var flg = ($(this).parent().attr("value") == 'true');
    if (!flg) {

      $(this).attr("src", "icons8-sort-down-24.png");
      var urls_list1 = localStorage.getItem($(this).parent().text().trim());
      var x = JSON.parse(urls_list1);

      var sub_ul = $('<ul/>');
      sub_ul.attr('id', 'subul' + $(this).attr('id'));
      var TotalHeight = 0;
      var sub_li = '';
      var sub_a = '';
      
      if (x!=='undefined'&&x!=null){
      x.forEach(element => {
        sub_li = $('<li/>');
        sub_a = $('<a/>');
        sub_a.text(element[0]);
        // console.log(element.length);
        sub_a.attr('href', element[1], 'target', "_blank");
        sub_a.attr('target', "_blank");
        var bg = element[2];
        var subSpan = $('<span/>');
        var img_in_subSpan = $('<img/>');
        img_in_subSpan.attr('src', bg);
        // img_in_subSpan.css('background', 'url(' + bg + ') no-repeat');
        // .css('background-size','16px 16px');
        subSpan.append(img_in_subSpan);
        sub_li.append(subSpan);
        sub_li.append(sub_a);
        sub_ul.append(sub_li);
        console.log(element[0]);
        if (element[0].length >175){
          TotalHeight = TotalHeight + 100;
        }
        else if (element[0].length > 110){
          TotalHeight = TotalHeight + 95;
        }
        else if (element[0].length > 75){
          TotalHeight = TotalHeight + 85;
        }
        else if (element[0].length > 44) {
          TotalHeight = TotalHeight + 42;
        } else {
          TotalHeight = TotalHeight + 25;
        }
      });

      $(this).parent().after(sub_ul);
      sub_ul.css('height', TotalHeight + 'px');
      sub_ul.css({
        transition: 'height 2s'
      });}
    } else {
      $(this).attr("src", "icons8-sort-right-24.png");
      $(this).parent().next().remove();
    }
    $(this).parent().attr("value", !flg);

  });


  $(document.body).on('click', ".cleanData", function() {
    clearAllData();
  })
})