$(document).ready(function() {
    var resize = new Array('#getname', '#getcity');
    resize = resize.join(',');

    $(".increase").click(function() {
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize, 10);
        var newFontSize = originalFontNumber * 1.2;
        $(resize).css('font-size', newFontSize);
        return false;
    });

    $(".decrease").click(function() {
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize, 10);
        var newFontSize = originalFontNumber * 0.8;
        $(resize).css('font-size', newFontSize);
        return false;
    });

    $('input[type="text"]').on('keydown, keyup', function() {
        var texInputValue = $('#name').val();
        var texInputValue2 = $('#city').val();

        $('#getname').html(texInputValue);
        $('#getcity').html(texInputValue2);
    });


    $("#openimg").click(function() {
        $(".cropme").click();
        return false;
    });

    $('#OpenImgUpload').click(function() { $('#imgupload').trigger('click'); });

    $(".save").click(function() {

        var node = document.getElementById('my-node');

        domtoimage.toBlob(document.getElementById('my-node'), {
                filter: node => node.id !== 'btn'
            })
            .then(function(blob) {
                window.saveAs(blob, 'my-node.png');
            });
    })

});