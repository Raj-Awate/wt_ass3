var list = [];

$(document).ready(function () {
  $.get("https://davids-restaurant.herokuapp.com/menu_items.json", function (data) {
    list = data.menu_items;
    list.forEach((item, index) => {
      $("#dropdown").append(`<option value=${index}>${item.name}</option>`);
    })
  });

  $("#dropdown").change((e) => {
    const item = list[e.target.value];
    $('#showdetails').html(
        `<p><b>Short Name </b>:- ${item.short_name} </p>
        <p><b> Name </b>:- ${item.name} </p>
        <p><b> Description </b>:- ${item.description} </p>
        <p><b> Price small (in $) </b>:- ${item.price_small} </p>
        <p><b> Price Large (in $) </b>:- ${item.price_large} </p>
        `
    )
  })
}); 