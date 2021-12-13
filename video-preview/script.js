console.log("page loaded...");
var vid = document.getElementById(playme);

function over(element)
{
	console.log("Over");
	element.play();
}

function out(element)
{
	console.log("Out");
	element.pause();
}
