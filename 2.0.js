body {
	touch-action: pan-y;
}
#container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #222;
	display: grid;
	grid-template-rows: 60% 40%;
}

#maze {
	position: absolute;
	width: 340px;
	height: 240px;
	/*background: #39a;
	
	align-self: center;
	justify-self: center;
	place-self: center center;*/
	top: 30vh;
	left: 50%;
	transform: translate(-50%, -50%);
}

.mbox,
.controls {
	height: 100%;
	background: #222;
	display: grid;
}

.buttons {
	width: 210px;
	height: 140px;
	background: #222;
	align-self: center;
	justify-self: center;
	display: grid;
	grid-template-rows: 70px 70px;
	grid-template-columns: 70px 70px 70px;
}

.btn {
	width: 60px;
	height: 60px;
	border: 2px #fff solid;
	border-bottom: 2px #fff solid;
	align-self: center;
	justify-self: center;
	cursor: pointer;
	border-radius: 8px;
	display: grid;
	/*box-shadow: 4px 4px 10px rgba(255, 255, 255, 0.2);*/
}
.chevron {
	height: 20px;
	width: 20px;
	align-self: center;
	justify-self: center;
	color: #222;
	font-size: 20px;
	line-height: 20px;
	text-align: center;
	color: #fff;
}

#bu {
	grid-column-start: 2;
}
#bd {
	grid-column-start: 2;
	grid-row-start: 2;
}
#bl {
	grid-column-start: 1;
	grid-row-start: 2;
}
#br {
	grid-column-start: 3;
	grid-row-start: 2;
}

#thingie,
#home {
	position: absolute;
	top: 100px;
	left: 100px;
	width: 20px;
	height: 20px;
	border-radius: 20px;
	/*background: #39a;
	transition: all .1s;*/
}

.emo {
	position: absolute;
	top: 4px;
	left: 1px;
	width: 13px;
	height: 13px;
	border-radius: 20px;
	font-size: 15px;
	line-height: 15px;
	text-align: left;
}

.barrier {
	position: absolute;
	background: #fff;
}

#top {
	top: 20px;
	left: 20px;
	width: 300px;
	height: 2px;
}

#bottom {
	top: 220px;
	left: 20px;
	width: 302px;
	height: 2px;
}

/*style reset*/
button {
	display: inline-block;
	border: none;
	padding: none;
	margin: 0;
	outline: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	background: none;
	-webkit-tap-highlight-color: transparent;
}

button:hover,
button:focus {
	-webkit-appearance: none;
}

button:focus {
	outline: none;
}

button:active {
	transform: scale(1);
	-webkit-appearance: none; 
}

