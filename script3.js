const audio = new Audio('images/hbd.mp3');
audio.loop = true;
audio.play();

var pass = '    ';
var correct = '2184';
var hints = [
    'MUSIC AND LITERATURE ARENT WHAT SHAPED OUR BOND?',
    'THE BAND THAT SOUNDTRACK OUR RELATIONSHIP',
    'BIG BROTHER IS ALWAYS WATCHING BUT MAYBE JUST 2 DIGITS AWAY',
    'ENOUGH HINTS SORRY :('
];
var i = 0;
var j = 0;
$(function () {
    $(".content").click(function () {
        var value = $(this).find(".number").text();

        if (value === ">") {
            pass = '';
            $(".numberinput").each(function () {
                pass += $(this).text();
            });
            pass = pass.trim();
            if (pass == correct) {
                $("#modalHeader").removeClass("text-danger").addClass("text-success").text("CORRECT");
                $("#modalMessage").text("YOU CARCKED OUR FRIENDSHIP CODE!!");
                $("#next").css("display", "");
            } else {
                if (i % 3 == 0 || j == 3) {
                    $("#modalMessage").text("HINT: " + hints[j]);
                    if (j != 3) {
                        j++;
                    }
                } else {
                    $("#modalMessage").text("");
                }
                i++;
            }
            const modal = new bootstrap.Modal(document.getElementById('feedbackModal'));
            modal.show();
            return;
        }

        if (value !== "<") {
            $(".numberinput").each(function () {
                var a = $(this).text();
                if (!a) {
                    $(this).text(value);
                    $(this).addClass("nocircle");
                    return false;
                }
            });
        } else {
            $($(".numberinput").get().reverse()).each(function () {
                var a = $(this).text();
                if (a) {
                    $(this).text("");
                    $(this).removeClass("nocircle");
                    return false;
                }
            });
        }
    });
});
