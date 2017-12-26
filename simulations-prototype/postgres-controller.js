'use strict'

const pgp = require('pg-promise')();
const d = require('./debugger');

const cn = { // for CONTENT-REVIEW-CHATBOT
	host: '', // server name or IP address;
	port: 1111,
	database: '',
	user: '',
	password: '',
	ssl: ''
};

// const cn = { // for DEV-TEST-BOT
// 	host: 'ec2-107-21-201-57.compute-1.amazonaws.com',
// 	port: 5432,
// 	database: 'd3sevga8vi7on3',
// 	user: 'lmkbbygvzndauy',
// 	password: '6441336255b9b7375c1dcc48d830cb49a6b52f6eb6d259c0112234c221561be4',
// 	ssl: 'require'
// };

const db = pgp(cn);

let PostgresController = {};

module.exports = {
	db,
	selectTable: async function(tableName) {
		// console.log('in postgres-controller.selectTable:\n');
		return await db.any('SELECT * FROM ' + tableName)
		.then(tableReturned => {
			// console.log(tableReturned);
			let tableFormatted = tableReturned.map(table => Object.assign({}, table));
			return tableFormatted;
		}).catch(error => {
			console.log(error);
		});
	},
	selectRow: async function(tableName, columnName, queryOptions) {
		// console.log('in postgres-controller.selectRow:\n');

		// console.log('about to send this query: \n');
		// console.log('SELECT * FROM ' + tableName + 
		// 	' WHERE ' + primaryKey + ' = ${' + primaryKey + '}');

		return await db.any('SELECT * FROM ' + tableName + 
			' WHERE ' + columnName + ' = ${' + columnName + '}', queryOptions)
		.then(rowReturned => {
			// console.log('rowReturned = ');
			// console.log(rowReturned);
			let rowFormatted = rowReturned.map(row => Object.assign({}, row))[0];
			// console.log('rowFormatted = ');
			// console.log(rowFormatted);
			return rowFormatted;
		}).catch(error => {
			console.log(error);
		});
	},
	deleteRow: async function(tableName, columnName, queryOptions) {
		// console.log('in postgres-controller.selectRow:\n');

		// console.log('about to send this query: \n');
		// console.log('SELECT * FROM ' + tableName + 
		// 	' WHERE ' + primaryKey + ' = ${' + primaryKey + '}');

		return await db.any('DELETE FROM ' + tableName + 
			' WHERE ' + columnName + ' = ${' + columnName + '}', queryOptions)
		.then(numberOfRowDeleted=> {
			// console.log('rowReturned = ');
			// console.log(rowReturned);
			let numberFormatted = numberOfRowDeleted.map(row => Object.assign({}, row))[0];
			// console.log('rowFormatted = ');
			// console.log(rowFormatted);
			return numberFormatted;
		}).catch(error => {
			console.log(error);
		});
	},
	selectCell: async function(tableName, columnToSelect, columnToCheck, queryOptions) {
		// d.i('\nin postgres-controller.selectCell:\n');
		// console.log(await this.selectTable(tableName));
		// console.log('tableName = ' + tableName);
		// console.log('columnToSelect = ' + columnToSelect);
		// console.log('columnToCheck = ' + columnToCheck);
		// console.log('queryOptions = ' + JSON.stringify(queryOptions));
		return await db.any('SELECT ' + columnToSelect + ' FROM ' + tableName + 
			' WHERE ' + columnToCheck + ' = ${' + columnToCheck + '}', queryOptions)
		.then(cellReturned => {
			// d.i('cellReturned = ');
			// console.log(cellReturned);
			let cellFormatted = cellReturned.map(row => Object.assign({}, row))[0];
			// d.i('cellFormatted = ');
			// console.log(cellFormatted);
			return cellFormatted;
		}).catch(error => {
			console.log(error);
		});
	},
	checkRowExists: async function(tableName, columnsToCheck, queryOptions) {
		console.log('in postgres-controller.checkRowExists:\n');

		// console.log('about to send this query: \n');
		// console.log('SELECT EXISTS (SELECT 1 FROM ' + tableName + 
		// 	' WHERE ' + columnToCheck + ' = ${' + columnToCheck + '})');

		let checkStatement = '';

		for (let col = 0; col < columnsToCheck.length; col++) {
			if (col === columnsToCheck.length - 1) {
				checkStatement += columnsToCheck[col] + ' = ${' + columnsToCheck[col] + '}';
			} else {
				checkStatement += columnsToCheck[col] + ' = ${' + columnsToCheck[col] + '} AND ';
			}
		};

		return await db.any('SELECT EXISTS (SELECT 1 FROM ' + tableName + 
			' WHERE ' + checkStatement + ')', queryOptions)
		.then(rowExists => {
			// console.log('checked if row exists!');
			// console.log('exists = ' + JSON.stringify(rowExists));
			if (rowExists[0].exists === false) {
				return false;
			} else if (rowExists[0].exists === true) {
				return true;
			} else {
				return 'existence of row is unconfirmed';
			}
		}).catch(error => {
			console.log(error);
		});
	},
	checkRowHasNullCells: async function(tableName, columnNames, primaryKey, queryOptions) {
		// console.log('in postgres-controller.checkRowHasNullCells:\n');

		for (let col = 0; col < columnNames.length; col++) {
			// console.log ('columnNames[' + col + '] = ' + columnNames[col]);
			
			// console.log('about to call ' + 'this.checkNullCell(' + tableName + ', ' + columnNames[col] + ', '
			//  + primaryKey + ', ' + JSON.stringify(queryOptions) + ')');
			
			let rowHasNullCell = await this.checkNullCell(tableName, columnNames[col], primaryKey, queryOptions);
			if (rowHasNullCell === true) {
				return true;
			}
		};
		return false; // only if no null cells were found
	},
	checkNullCell: async function(tableName, columnName, primaryKey, queryOptions) {
		// console.log('in postgres-controller.checkNullCell:\n');
		
		return await db.any('SELECT EXISTS (SELECT 1 FROM ' + tableName + ' WHERE ' 
			+ primaryKey + ' = ${' + primaryKey + '} AND ' 
			+ columnName + ' IS NULL)', queryOptions)
		.then(nullCellInThisRow => {
			// console.log('checked if cell ' + columnName + ' is null...');
			// console.log('null cell exists = ' + JSON.stringify(nullCellInThisRow)); // output: null cell exists = [{"exists":false}]
			if (nullCellInThisRow[0].exists === false) {
				return false;
			} else if (nullCellInThisRow[0].exists === true) {
				return true;
			} else {
				return 'existence of null cell is unconfirmed';
			}
		}).catch(error => {
			console.error(error);
		});
	},
	getColumnOfNextNullCell: async function(tableName, columnNames, primaryKey, queryOptions) {
		// console.log('in postgres-controller.getColumnOfNextNullCell:\n');
		for (let col = 0; col < columnNames.length; col++) {
			// console.log ('columnNames[' + col + '] = ' + columnNames[col]);
			let cellIsNull = await this.checkNullCell(tableName, columnNames[col], primaryKey, queryOptions);
			if (cellIsNull === true) {
				return columnNames[col];
			}
		}; // if didn't return, then the check before this function failed
		console.error('oops.. getColumnOfNextNullCell should not have been called... ');
	},
	insertIntoTable: async function(tableName, insertKeys, insertValues, insertReturning, queryOptions) { // this doesn't have a test yet!
		// console.log('about to send this query: \n');
		// console.log('INSERT INTO ' + tableName + insertKeys 
		// 	+ ' VALUES ' + insertValues + ' RETURNING ' + insertReturning);

		return await db.any('INSERT INTO ' + tableName + insertKeys 
			+ ' VALUES ' + insertValues + ' RETURNING ' + insertReturning, queryOptions)
		.then(row => {
			// console.log('row added!');
			return row;
		}).catch(error => {
			console.log(error);
		});
	},
	addRow: async function (tableName, columnNames, queryOptions) {
		console.log('in postgres-controller.addRow:\n');

		let insertKeys = ' (';
		let insertValues = '(';
		let insertReturning = '';

		for (let col = 0; col < columnNames.length; col++) {
			if (col === columnNames.length - 1) {
				insertKeys += columnNames[col];
				insertValues += '${' + columnNames[col] + '}';
				insertReturning += columnNames[col];
			} else {
				insertKeys += columnNames[col] + ', ';
				insertValues += '${' + columnNames[col] + '}, ';
				insertReturning += columnNames[col] + ', ';
			}
		};
		insertKeys += ')';
		insertValues += ')';

		// console.log('insertKeys = \n' + insertKeys);
		// console.log('insertValues = \n' + insertValues);
		// console.log('insertReturning = \n' + insertReturning);

		await this.insertIntoTable(tableName, insertKeys, insertValues, insertReturning, queryOptions);
		let row = await this.selectRow(tableName, columnNames[0], queryOptions);
		// console.log(row);
		return row;
	},
	updateTable: async function(tableName, columnName, primaryKey, queryOptions) { // not an intuitive name...
		// d.i('in postgres-controller.updateCell:\n');
		// console.log(await this.selectTable(tableName));
		// console.log('tableName = ' + tableName);
		// console.log('columnName = ' + columnName);
		// console.log('primaryKey = ' + primaryKey);
		// console.log('queryOptions = ' + JSON.stringify(queryOptions));
		return await db.any('UPDATE ' + tableName + ' SET ' 
			+ columnName + ' = ${' + columnName + '} WHERE ' 
			+ primaryKey + ' = ${' + primaryKey + '} RETURNING ' 
			+ primaryKey + ', ' + columnName, queryOptions)
		.then(data => {
			// d.i('update successful!');
			// console.log(data);
			return data;
		}).catch(error => {
			console.log(error);
		});
	},
	updateCell: async function(tableName, columnName, primaryKey, queryOptions) { // is this fun necessary or redundant?
		// console.log('in postgres-controller.updateCell:\n');
		await this.updateTable(tableName, columnName, primaryKey, queryOptions);
		return await this.selectCell(tableName, columnName, primaryKey, queryOptions);
	},
	updateRow: async function(tableName, columnNames, primaryKey, queryOptions) {
		// console.log('in postgres-controller.updateRow:\n');
		for (let col = 0; col < columnNames.length; col++) {
			// console.log ('columnNames[' + col + '] = ' + columnNames[col]);
			await this.updateCell(tableName, columnNames[col], primaryKey, queryOptions)
		}; // does this return whether or not the cell was successfully updated? that doesn't sound good...
		return await this.selectRow(tableName, primaryKey, queryOptions);
	},
};