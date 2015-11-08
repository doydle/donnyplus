_ini();

function _ini(){

    //document.getElementsByTagName("html")[0].style.display="hidden";
	/**var jq = document.createElement('script');
	jq.src = chrome.extension.getURL("jquery.js");
	document.getElementsByTagName('head')[0].appendChild(jq);
	// ... give time for script to load, then type.
	jQuery.noConflict();**/
	
	
	/**var cssId = 'styles';  // you could encode the css path itself to generate id..
	if (!document.getElementById(cssId))
	{
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = cssId;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = 'styles.css';
		link.media = 'all';
		head.appendChild(link);
	}**/


	
    window.onload = function(){
        //do your stuff
		
	// cursor shit
	var cursorImage = document.createElement("img");
	cursorImage.src = chrome.extension.getURL("donaldcursor.png");
	document.getElementsByTagName("body")[0].appendChild(cursorImage);
	cursorImage.id = "donnyT";
	cursorImage.style.position = "absolute";
	cursorImage.style.zindex = 2147483648;
	
	$(document).mousemove(function(e)
	{
		$("#donnyT").css({left:e.pageX - 135, top:e.pageY});
	});
	
	$(document).click(function(e)
	{
		window.open("https://www.donaldjtrump.com/");
	});

		
		var imageNames = ["trump-1.jpg", "trump-2.jpg", "trump-3.jpg", "trump-4.jpg"];
		var all = document.getElementsByTagName("*");
		var divs = document.getElementsByTagName("div");
		
		var index = 0;
		for(index = 0; index < all.length; index++)
		{
			all[index].style.fontFamily = "Comic Sans MS";
		}
		
		
		var noOfAds = 4;
		var images = [];
		var home = document.getElementsByTagName("body")[0];
		for(var i = 0; i < noOfAds; i++)
		{
			images[i] = document.createElement("img");
			
			//$(document.getElementsByTagName("body")).style.backgroundImage = "url(" + image[i].src + ")";
			$(document.getElementsByTagName("body")).prepend(images[i]);
			images[i].src = chrome.extension.getURL(imageNames[i % 4]);
			//images[i].style.position = "absolute";
			//$(images[i]).css({left:0});
			
			//doMove(images[i]);
			
			//home.appendChild(images[i]);
		}
		
		//$(images[2]).css({left:1024});
		//$(images[3]).css({top:1024});
		//$(images[0]).animate({left: '+=1px'}, '9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ms');
		//$(images[1]).animate({down: '+=900px'}, '9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ms');
		//$(images[2]).animate({right: '+=900px'}, '9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ms');
		//$(images[3]).animate({up: '+=900px'}, '9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ms');
		
		//doMove(images[0]);
		
		/**var newItem = document.createElement("LI");       
		var textnode = document.createTextNode("Water");  
		newItem.appendChild(textnode);                    

		var list = document.getElementById("myList");    // Get the <ul> element to insert a new node
		list.insertBefore(newItem, list.childNodes[0]);  // Insert <li> before the first child of <ul>**/
			
        /**document.getElementsByTagName("html")[0].style.display="block"; //to show it all back again**/
			

    }
}


		/**function doMove(image) {
			if(parseInt(image.style.left) == 200)
				return;
		$(image).animate({left: '+=1px'}, '20ms');
		console.log("am i called?");
		setTimeout(doMove(image), 20); // call doMove in 20msec
		}**/
