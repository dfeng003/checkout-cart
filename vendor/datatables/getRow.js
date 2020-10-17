document.getElementById('btnReimburse').addEventListener("click", function(){ saveRecord(); });
document.getElementById('btnReimburse').addEventListener("click", function(){ window.open('checkout.html'); });

function updateSelection(selection)
{
	localStorage.setItem('selectedRecord',JSON.stringify(selection));
}

function retrieveSelection()
{   //not using here for now
	var records = JSON.parse(localStorage.getItem('selectedRecord')?localStorage.getItem('selectedRecord'):"[]");
	return records
}

function saveRecord(){
    //var selection = retrieveSelection();
    var selection = [];
    $("#dataTable input[type=checkbox]:checked").each(function () {
        var row = $(this).closest("tr")[0];
        var rid = row.cells[1].innerHTML;
        var n = row.cells[2].innerHTML;
        var amt = row.cells[4].innerHTML;
        selection.push({rID:rid, name:n, amount: amt});
        });
    updateSelection(selection);
}