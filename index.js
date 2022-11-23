var $inputs = $("#filter-form select, #filter-form input"); //, #filter-form :input
var inputValArr = [];
var inputChangedValArr = [];
$inputs.each(function (e, element) {
    let thisVal = $(this).val();
    if ($(this).attr('type') == 'checkbox'){
        if ($(this).prop('checked')==true){
            thisVal = true;
        }else{
            thisVal = false
        }
    }
    inputValArr.push(thisVal)
});

$inputs.on('keyup change', function() {
    inputChangedValArr = [];
    $inputs.filter(function() {
        var $thisVal = $(this).val();
        if ($(this).attr('type') == 'checkbox'){
            if ($(this).prop('checked')==true){
                $thisVal = true;
            }else{
                $thisVal = false
            }
        }
        inputChangedValArr.push($thisVal);
    });

    var isChanged = (inputValArr.length == inputChangedValArr.length) && inputValArr.every(function(element, index) {
        return element === inputChangedValArr[index];
    });
    isChanged == true ? $('#filterBtn').attr('disabled', true) : $('#filterBtn').attr('disabled', false);
});
