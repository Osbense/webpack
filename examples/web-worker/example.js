var Worker = require("worker-loader!./worker");
var worker = new Worker;
worker.postMessage("b");
worker.onmessage = function(event) {
	var templateB = event.data; // "This text was generated by template B"
}
