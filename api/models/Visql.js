/**
 * Visql
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */
var ViSQL = {

  attributes: {
  	
  	databases: {
  		type: 'ARRAY',
  		required: true
  	}

  	users: {
  		type: 'ARRAY',
  		required: true
  	}
    
  }

};

module.exports = ViSQL;