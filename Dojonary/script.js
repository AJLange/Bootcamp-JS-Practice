function changeText(element) {
 
	document.getElementById('loginbtn');
	if (element.innerText == "Logout")
		element.innerText = "Login";
	else 
		element.innerText = "Logout";
	

}

function vanish(element)
{
element.remove();	
}