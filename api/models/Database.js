/**
 * Database
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var Database = {
  attributes: {
  	name: 	{
  		type: 'STRING',
  		required: true
	}

	tables: {
		type: 'ARRAY',
		required: true
	}
  }
};

module.exports = Database;