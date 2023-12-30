$('input[type="range"]').before(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, '
        + 'color-stop(' + val + ', #FEE600), '
        + 'color-stop(' + val + ', #E1E1E3)'
        + ')'
    );
});
$('input[type="range"]').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, '
        + 'color-stop(' + val + ', #FEE600), '
        + 'color-stop(' + val + ', #E1E1E3)'
        + ')'
    );
});
$(document).ready(function(){
    $('#value_sum').val($('#range_sum').val());
    $('#range_sum').mousemove(function() {
        $('#value_sum').val($('#range_sum').val());
    });

    $('#value_sum').change(function() {
        $('#range_sum').val($('#value_sum').val());
    });

    $('#value_period').val($('#range_period').val());
    $('#range_period').mousemove(function() {
        $('#value_period').val($('#range_period').val());
    });

    $('#value_sum').change(function() {
        $('#range_period').val($('#value_period').val());
    });
})

