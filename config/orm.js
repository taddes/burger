// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods needed to retrieve and store data in  database.


var connection = require("../config/connection.js");

	function printQuestionMarks(num){

    var arr =[];
    
			for (var i =0; i < num; i++){

        arr.ush('?');
        
      };
      
			return arr.toString();
	};

	function objToSql(ob){

    var arr=[];
    
		for (var key in ob){
			if ( ob.hasOwnProperty(key)){
				arr.push(key + "=" + ob[key]);
			}
			
    };
    
		return arr.toString();
	};

  // ORM

var orm = {

	all: function(tableInput, cb){

      var queryString = "SELECT * FROM " + tableInput + ";";
      
			connection.query(queryString, function(err, result) {

        if (err) throw err;	
        
				cb(result);
			});
  },
  
	// vals the array that we want to save to cols
	// cols are the columns we want to insert the values into
	create: function(table, cols, vals, cb){
			var queryString = "INSERT INTO " + table ;
			queryString = queryString + " (";
			queryString = queryString + cols.toString();
			queryString = queryString + ") ";
			queryString = queryString + "VALUES (";
			queryString = queryString + printQuestionMarks(vals.length);
			queryString = queryString + ") ";
			console.log(queryString);

			connection.query(queryString, vals, function(err, result){

        if (err) throw err;
        
        cb(result);
        
			});
	},

	// objColVals are columns and values that need to be updated
	update: function(table, objColVals, condition, cb){

			var queryString = "UPDATE " + table;
			queryString = queryString + " SET ";
			queryString = queryString + objToSql(objColVals);
			queryString = queryString + " WHERE " ;
			queryString = queryString + condition;
			console.log(queryString);

			connection.query(queryString, function(err, result){
				if (err) throw err;
				cb(result);
			});
	},

	delete: function(table, condition, cb){

		var queryString= "DELETE FROM " + table;
		queryString = queryString + " WHERE ";
		queryString = queryString + condition;

		connection.query(queryString, function(err, result){
			if (err) throw err;
      cb(result);
      
		});
	}
};

module.exports = orm;
