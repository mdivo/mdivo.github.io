window.onload = function () {


	//defining audio context
	var AudioContext = window.AudioContext || window.webkitAudioContext;
	var context = new AudioContext();
	var generators = [
		new MotorSound.NoiseGenerator(),
		new MotorSound.LinearGenerator()
	];
	var motorSound = new MotorSound(context, generators[0]);

	function regenerateSound() { //function for regenerating sound of engine
		motorSound.regenerate();
		motorSound.start();
	}

	function changeGenerator(index) {
		motorSound.setGenerator(generators[index]);
	}

	document.getElementById("speed-slider").oninput = function (event) {	//function for when using slider for speed
		var speed = event.currentTarget.valueAsNumber;
		document.getElementById("speed").innerHTML = speed;
		motorSound.setSpeed(speed);
	};

	document.getElementById("volume-slider").oninput = function (event) {	//function for when using the volume slider 
		var volume = event.currentTarget.valueAsNumber;
		document.getElementById("volume").innerHTML = volume;
		motorSound.setVolume(volume);
	};

	document.getElementById("generators").onchange = function (event) {
		changeGenerator(event.target.selectedIndex);
	};

	document.getElementById("regenerate").onclick = function () {	//function for when regenerating engine sound
		regenerateSound();
	};

	//start the engine sound again when regenerating the sound
	regenerateSound();

};
