/*
sudo apt install curl
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo aptitude install nodejs
sudo aptitude install npm
npm install fabric --save

Example:
nodejs fabricjs2png.js -i example.json -o image.png -w 320 -h 240
*/

var fabric = require('fabric').fabric;
var fs     = require('fs');

// Parse command line arguments
var inputFile="";
var outputFile="";
var w=0;
var h=0;
if(process.argv.length<10)
	process.exit(1);//ERROR
	
for(let i = 0; i < process.argv.length; ++i) {
	switch(process.argv[i])
	{
		case "-i": inputFile=process.argv[i+1];break;
		case "-o": outputFile=process.argv[i+1];break;
		case "-w": w=process.argv[i+1];break;
		case "-h": h=process.argv[i+1];break;
	}
}
w = parseInt(w);
h = parseInt(h);
if(w<=0 || h<=0 || inputFile=="" || outputFile=="")
	process.exit(1);//ERROR
console.log("input:"+inputFile+" output:"+outputFile+" w:"+w+" h:"+h);
//______________________________


// Create canvas
var canvas = new fabric.StaticCanvas(null, {width: w, height: h });

// Read JSON File
fs.readFile(inputFile, 'utf8' , (err, data) => {

	if (err) {
		console.error(err);
		process.exit(1);//ERROR
	}
	
	// Load JSON into canvas
	canvas.loadFromJSON(data, function(){ 
		canvas.renderAll.bind(canvas)
	
    	// Create PNG image from canvas
		var blob = canvas.toDataURL({format: 'png'});
		// Convert base64 to PNG
		var regex = /^data:.+\/(.+);base64,(.*)$/;
		var matches = blob.match(regex);
		var ext = matches[1];
		var data = matches[2];
		//console.log(data)
		var buffer = Buffer.from(data, 'base64');
		//console.log(buffer)
		fs.writeFileSync(outputFile, buffer, err => {
    		if (err) {
      			console.error(err);
	      		process.exit(1);//ERROR
    		}
  		});
  		//_____________________________________________
			
	});


});










