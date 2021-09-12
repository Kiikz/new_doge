$(function() {
    console.log("document is ready!");

    $("#doge-meme-pic").draggable({
        containment: "#containment-wrapper",
        scroll: false,
        stop: function() {
            calculateWow();
        }
    });

    function calculateWow() {
        var x = $("#doge-meme-pic").position();
        var wow = x.top + x.left;

        if (wow < 500) {

            console.log('not much wow (' + wow + ')');
            $('#wow-output').html('<h4>Not much wow (' + wow + ')</h4>')

        } else {
            console.log('so much wow (' + wow + ')!!!!');
            $('#wow-output').html('<h1>So much wow (' + wow + ')!!</h1>')
        }
    }

});