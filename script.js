$(document).ready(function () {
    const study = document.getElementById('study')

    study.onclick = function () {
        if (study.getAttribute('class') === 'preset1') {
            study.setAttribute('class', 'preset2')
        } else {
            study.setAttribute('class', 'preset1')
        }
    }

    const hobbies = document.querySelector('#hobbies')

    hobbies.onclick = function () {
        if (hobbies.getAttribute('class') === 'preset1') {
            hobbies.setAttribute('class', 'preset2')
        } else {
            hobbies.setAttribute('class', 'preset1')
        }
    }

    $('#add-img-button').click(function () {
        $('#images').children().each(function () {
            if ($(this).css('display') === 'none') {
                $(this).css('display', 'block')
                return false
            }
        })
    });

    $('#rm-img-button').click(function () {
        $($('#images').children().toArray().reverse()).each(function () {
            if ($(this).css('display') !== 'none') {
                $(this).css('display', 'none')
                return false
            }
        })
    });

    $('#zoom-in-button').click(function () {
        $($('#images').children().toArray().reverse()).each(function () {
            if ($(this).css('display') !== 'none') {
                $(this).children().first().width($(this).children().first().width() * 1.1)
                $(this).children().first().height($(this).children().first().height() * 1.1)
                return false
            }
        })
    });

    $('#zoom-out-button').click(function () {
        $($('#images').children().toArray().reverse()).each(function () {
            if ($(this).css('display') !== 'none') {
                $(this).children().first().width($(this).children().first().width() * 0.9)
                $(this).children().first().height($(this).children().first().height() * 0.9)
                return false
            }
        })
    });
})
