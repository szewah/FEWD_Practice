// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $('#first').click(showCityOne)


// $('#first').click(cityOne)
// $('#second').click(cityTwo)
// $('#third').click(cityThree)
// $('#fourth').click(cityFour)

// function cityOne() {
// 	$('#bigimage').attr('src', 'img/1.jpg')
// }

// function cityTwo() {
// 	$('#bigimage').attr('src', 'img/2.jpg')
// }

// function cityThree() {
// 	$('#bigimage').attr('src','img/3.jpg')
// }

// function cityFour() {
// 	$('#bigimage').attr('src','img/4.jpg')
// }

// or

$('.thumb').click(changeImage)

function changeImage() {
	var newImage = $(this).attr('src');
	$('#bigimage').attr('src' , newImage);

}