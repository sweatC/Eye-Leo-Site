(function() {
	var feet = document.querySelector('.feet'); // get all elements
	console.log(feet)
	console.log(feet.children[0])
/*	feet.children[0].style.visibility = 'visible';*/
/*	var timerId = setInterval(Show, 1000, feet , i);*/
	
	var i = 0;
	setTimeout(function run() {
	  if(i == 6) {
	  	HideAll(feet);
	  	i = -1;
	  }
	  Show(feet, i);	
	  i++;
	  setTimeout(run, 1000);
	}, 1000);
/*	setTimeout(function() {
	  clearInterval(timerId);
	}, 5000);*/

	function Show(nodes, i) {
		if(i !== -1) {
			nodes.children[i].style.visibility = 'visible';
		}		
		console.log(i)
	}

	function HideAll(nodes) {
		for (var j = 0; j < 6; j++) {
			nodes.children[j].style.visibility = 'hidden';
		}
	}
})();