"use strict";

let conn= $.hdb.getConnection();

const id = $.request.parameters.get('id');

let query=`SELECT * FROM "RESUMEHANADB_1"."USERRESUMEID" where ("USERNAME"='${id}');`;

let rs = conn.executeQuery(query);


$.response.contentType = "application/json;charset=UTF-8";	
$.response.headers.set("Access-Control-Allow-Origin", "*");
$.response.setBody(rs);
$.response.status = $.net.http.OK;