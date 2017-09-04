function takeinput (e) {
	// body...
	var in = document.getElementById('form');
	in.innerHTML="";
	var rad = docment.getElementById('radio');
	var option;
	rad.forEach(function(element)){
		if(element.checked)
		{
			option=element.value;
		}

	switch(option) {
		case "rect":

		var widthInput = document.createElement("input");
		var lengthInput = document.createElement("input");
		widthInput.placeholder="width";
		lenghtInput.placeholder="length";

		widthInput.type= "Number";
		hieghtInput.type= "Number";
		
		break;
		case "square":
		break;
		case "hexagon":
		break;
		case "triangle":
		break;
	}
	}
}