/**
 * Column
 *
 * @module      :: Model
 * @description :: This model represents a column in a table
 * @docs		:: http://sailsjs.org/#!documentation/models
 */
var Column = {
  attributes: {
  	name: 	{
  		type: 'STRING',
  		required: true
	}

  	datatype: {
		type: 'STRING',
		required: true,
		defaultsTo: 'INTEGER'
	}

  	length: {
		type: 'INTEGER',
		required: false,
		defaultsTo: 11
	}

  	auto_increment: {
		type: 'BOOLEAN',
		required: true,
		defaultsTo: false
  	} 

  	not_null: {
		type: 'BOOLEAN',
		required: true,
		defaultsTo: true
  	}

  	default: {
  		type: 'STRING',
  		required: false
  	}
  }
};

module.exports = Column;