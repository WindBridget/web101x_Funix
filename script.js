function validateForm()
{
	var x = document.getElementById("username").value;
	var y = document.getElementById("password").value;
	var z = y.length;
	if(  (x == null || x == "") && (y == null || y == "") )
	{
		alert("You must enter your informations !");	
	}
	else if ( (x == null || x == "") && (y != null || y != ""))
	{
		alert("Missing Email !");
		clearText();
	}
	else if ((x != null || x != "") && (y == null || y == ""))
	{
		alert("Missing PassWord!");
		clearText();
	}
	else
	{
		if( z < 6 )
		{
			alert("Password is too short, please input at least 6 characters!");
			clearText();
		}
		else
		{
			alert("Login successful! ");
			clearText();
		}			
	}		
}
function clearText()
{
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";	
}
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-79129612-1', 'auto');
			ga('send', 'pageview');