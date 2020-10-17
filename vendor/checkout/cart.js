//the cart in this js refers to the summary section of the checkout page
function retrieveSelection()
{
	var records = JSON.parse(localStorage.getItem('selectedRecord')?localStorage.getItem('selectedRecord'):"[]");
	return records
}
function updateSelection(selection)
{
	localStorage.setItem('selectedRecord',JSON.stringify(selection));
}

function updateTotal(total){
  /* Update totals display */
  $('#total').fadeOut("fast", function() {
    $('#total').html(total);
    $('#total').fadeIn("fast");
  });
}

function loadCart(){
    var records = retrieveSelection();
    var total = 0;
    for(var r of records)
    	{
    		$('#records_cart').append("<li class=\"record list-group-item d-flex justify-content-between lh-condensed\"><h6 class=\"my-0\">"
    		+ r.rID +"</h6>"
    		+ "<h6 class=\"my-0\">" + r.name + "</h6> <span class=\"price text-muted\">"
    		+ r.amount + " </span><a href=\"#\" onclick=\"removeItem(this," + r.rID + ")\" class=\"removebtn btn btn-danger btn-circle btn-sm\"><i class=\"fas fa-trash\"></i></a></li>");
    		total +=parseFloat(r.amount);
    	}
    updateTotal(total);

}

/* Remove item from cart */
function removeItem(removeButton, rID)
{
  /* Remove row from DOM and recalc cart total */
  var recordRow = $(removeButton).parent();
  var selection = retrieveSelection();
  recordRow.slideUp("fast", function() {
    recordRow.remove();
    recalculateCart();
  });
  //remove from the local storage
  for(i=0;i<selection.length;i++){
          if(selection[i].rID == rID){
              selection.splice(i,1);
          }
      }
  updateSelection(selection);
}

/* Recalculate cart */
function recalculateCart()
{
  var total = 0;

  /* Sum up row totals */
  $('.record').each(function () {
    total += parseFloat($(this).children('.price').text());
  });

  updateTotal(total);
}
