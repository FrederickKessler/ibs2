function load(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://arsnova.eu/api/statistics/", false);
	xhr.send();

	var json = JSON.parse(xhr.responseText);

	console.log(xhr.status);
	console.log(xhr.statusText);
	console.log(json);
	
	display(json);
}

function display(arr){
	var i = 0;
	$(".current").remove();
	for(var key in arr) {
		//arr[key] -> Wert
		//key -> Name

		var name = ["Answers", "Lecture Questions", "Preparation Questions", "Open Sessions",
			"Closed Sessions", "Creators", "Active Users", "Active Students", "Logged-In Users", 
			"Interposed Questions", "Concept Questions", "Questions", "Sessions"];
		
		if(i == 0){
		  arr[key] = arr[key]/10;
		  var s = "<li class=\"current\" title=\""+name[i]+"\"><span class=\"bar\" data-number=\""+arr[key]+"\"></span><span class=\"number\">"+arr[key]+"*10"+"</span></li>";
		} else {
		  var s = "<li class=\"current\" title=\""+name[i]+"\"><span class=\"bar\" data-number=\""+arr[key]+"\"></span><span class=\"number\">"+arr[key]+"</span></li>";
		}
		console.log(key);
		console.log(typeof(key));
		
		$(".title").append(s);
		++i;
	}

	$('.chart').horizBarChart({
		selector: '.bar', speed: 0
	});
}

$(document).ready(function() {
    load();
	var interval = setInterval(function(){
		load();
	},30000)
});
