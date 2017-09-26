// content.js

// Handler when the DOM is fully loaded

console.log("Force Squash- started load!");

function checkMerge()
{
	//sets timeout since we are loading everything with AJAX so we wait a bit that everything loads
	setTimeout(function ()
	{
		//a contains all the button on the page
		var a = document.getElementsByTagName('button');
		//the button we care about is the last button on the page which is the merge button
		var button = a[a.length - 1];

		//the value of the choice can be either merge commits or squash
		var value = document.getElementsByClassName("select2-chosen");

		//if it s not squash dont allow to push
		if (value[0].innerHTML !== "Squash")
		{

			button.setAttribute("title", "Squash your merges");
			button.setAttribute("disabled", "false");
			button.setAttribute("style", "background-color: red;");

		} else
		{
			button.setAttribute("title", "It's safe to merge");
			button.setAttribute("style", "background-color: green;");
			button.removeAttribute("disabled");
		}
	}, 250);




}




document.getElementById("fulfill-pullrequest").onclick = function ()
{

	//sets timeout since we are loading everything with AJAX so we wait a bit that everything loads
	setTimeout(function ()
	{
		//a contains all the button on the page
		var a = document.getElementsByTagName('button');
		//the button we care about is the last button on the page which is the merge button
		var button = a[a.length - 1];

		var value = document.getElementsByClassName("select2-chosen");

		if (value[0].innerHTML !== "Squash")
		{

			button.setAttribute("title", "Squash your merges");
			button.setAttribute("disabled", "false");
			button.setAttribute("style", "background-color: red;");

		} else
		{
			button.setAttribute("title", "It's safe to merge");
			button.setAttribute("style", "background-color: green;");
			button.removeAttribute("disabled");
		}
		//keep checking for changes every 0.5 second
		var myVar = setInterval(checkMerge, 500);
	}, 1000);

};



console.log("Force Squash- Loaded!");

