let menuToDisplay;
let menuIsCenter = false;

function menuToCenter() {
    const menuPopBtn = $('.menuPopBtn')
    const menuAside = $('.foodMenusAside')

    menuPopBtn.animate({right: '55%'}, 500)
    menuAside.animate({right: 0}, 500)

    menuIsCenter = true
}

function menuToOffScreen() {
    const menuPopBtn = $('.menuPopBtn')
    const menuAside = $('.foodMenusAside')

    menuPopBtn.animate({right: "-5%"}, 500)
    menuAside.animate({right: '-60vw'}, 500)

    menuIsCenter = false
}

// on load, if screen is small enough, fade in menu button and move menu to center of screen
function menuOnLoad() {
    $('.menuPopBtn').animate({opacity: '1'}, 1000, function() {
        setTimeout(menuToCenter, 200)
    })
}

$('.btn').on('click', function (event) {
    const btnClicked = $(this)
    const allMenuOptionsDiv = $('#allMenuOptionsDiv')
    const isExpanded = allMenuOptionsDiv.attr('data-menuExpanded')

    console.log(event.target.hasAttribute('data-menu'))
    // only change menu options display if the clicked btn has the data-menu attribute
    if (btnClicked.attr('data-menu')) {

        if ($(window).width() <= 900) {
            menuToOffScreen()
        }

        menuToDisplay = btnClicked.attr('data-menu')

        if (isExpanded == 'true') {
            allMenuOptionsDiv.collapse('hide')
        } else {
            allMenuOptionsDiv.attr('data-menuExpanded', 'true')
            $('.menuOptions').css('display', 'none')
            $(menuToDisplay).css('display', 'block')
            allMenuOptionsDiv.collapse('show')
        }
    } else if (event.target) {

    }
})

$('#allMenuOptionsDiv').on('hidden.bs.collapse', function () {
    // run collapse('show') now that the div is hidden
    $('.menuOptions').css('display', 'none')
    $(menuToDisplay).css('display', 'block')
    // current fix for .collapse('show') problems on mobile
    setTimeout(function() {
        $('#allMenuOptionsDiv').collapse('show')
    }, 50)
})

$('.menuPopBtn').on('click', function() {
    if (menuIsCenter) {
        menuToOffScreen()
    } else {
        menuToCenter()
    }
})

menuOnLoad()