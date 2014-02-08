/**
 * Table
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var Table = {
  attributes: {
  	name: 	{
  		type: 'STRING',
  		required: true
	}

	columns: {
		type: 'ARRAY',
		required: true
	}

	indexes: {
		type: 'ARRAY',
		required: true
	}
  }
};

module.exports = Table;