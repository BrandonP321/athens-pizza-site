
// add scroll to mene dropdown when it is clicked
$('.btn').on('click', function(event) {
    // store clicked btn to be accessed later
    var currentEle = $(this)

    if (currentEle)
    // wait 350ms to allow bootstrap animation to finish loading
    setTimeout(function(){
        // get offset from top of screen of clicked element
        var offset = currentEle.offset()
        // remove 90 more pixels to account to space of navbar
        offset.top -= 90
        // scroll to have element 90 pixels from top of screen
        $('html, body').animate({
            scrollTop: offset.top
        }, 0, 'swing')
    }, 300)
})

// click event for accordion buttons in menu
// $('.btn').on('click', function() {
//     // retrieve +/- sign showing if menu is dropped down or not
//     const dropDownSign = $(this).children('.dropdownSign')

//     // if current menu is not dropped and showing a '+', change it to a '-'
//     if (dropDownSign.attr('data-isShowing') === 'false') {
//         dropDownSign.html('&minus;')
//         dropDownSign.attr('data-isShowing', 'true')
//     } else {
//         dropDownSign.html('&plus;')
//         dropDownSign.attr('data-isShowing', 'false')
//     }

//     // change any other plus/minus signs not related to the current menu to plus
//     var allDropDowns = $('.dropdownSign')
//     var currentDropDown = dropDownSign[0]
//     console.log(allDropDowns)
//     for (let dropdown of allDropDowns) {
//         console.log(dropdown)
//         console.log(dropDownSign)
//         if (dropdown === dropDownSign) {
//             console.log('nope')
//         }
//     }
// })