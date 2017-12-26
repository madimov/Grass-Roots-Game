'use strict'

let Debugger = {};

module.exports = {
	i: function(infoToLog) {
		console.log('\x1b[33m%s\x1b[0m', infoToLog);  //yellow
	},
	logObj: function(ObjectToLog) {
		
		for (let key in ObjectToLog) {
			if (typeof(ObjectToLog[key]) == 'object') {
				this.logObj(ObjectToLog[key]);
			} else {
				console.log(key + ': ' + ObjectToLog[key]);
			}
		}
	}
}