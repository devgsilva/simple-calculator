$(document).ready(function() {

    var valueInput;
    var valueOperation;

    $('.key-numeric').click(function() {
        valueInput = $(this).val();
        $('textarea').val($('textarea').val() + valueInput);
    });

    $('.key-operation').click(function() {
        valueOperation = $(this).val();
        valueTemporary = $('textarea').val() + valueOperation;
        $('textarea').val(valueTemporary);
    });

    $('#equal').click(function() {
        var x = $('textarea').val();
        var y = eval($('textarea').val());

        if (Number.isInteger(y)) {
            $('.calcultor-last-result input').val(x + ' = ' + y);
            $('textarea').val('');
        } else {
            $('.calcultor-last-result input').val(x + ' = ' + parseFloat(y).toFixed(2));
            $('textarea').val('');
        }
    });

    $('#clear').click(function() {
        $('textarea').val('');
    });

    $('#clearAll').click(function() {
        $('.calcultor-last-result input').val('');
        $('textarea').val('');
    });

    $('#backspace').click(function() {
        $('textarea').val($('textarea').val().substring(0, $('textarea').val().length - 1));
    });
});