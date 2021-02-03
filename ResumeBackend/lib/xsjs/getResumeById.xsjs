
"use strict";

let conn= $.hdb.getConnection();

const id = $.request.parameters.get('id');

let personalQuery=`SELECT * FROM "RESUMEHANADB_1"."PERSONALDETAILS" where ("DOCUMENTID"='${id}')`;

let educationQuery=`SELECT * FROM "RESUMEHANADB_1"."EDUCATIONDETAILS" where ("DOCUMENTID"='${id}')`;

let experienceQuery=`SELECT * FROM "RESUMEHANADB_1"."EXPERIENCEDETAILS" where ("DOCUMENTID"='${id}')`;

let projectQuery=`SELECT * FROM "RESUMEHANADB_1"."PROJECTDETAILS" where ("DOCUMENTID"='${id}')`;

let skillQuery=`SELECT * FROM "RESUMEHANADB_1"."SKILLDETAILS" where ("DOCUMENTID"='${id}')`;

let  personal= conn.executeQuery(personalQuery);
let  education= conn.executeQuery(educationQuery);
let  experience = conn.executeQuery(experienceQuery);
let project = conn.executeQuery(projectQuery);
let skill = conn.executeQuery(skillQuery);


let rs={
	personal:personal[0],
	education:education,
	experience:experience,
	project:project,
	skill:skill
}

$.response.contentType = "application/json;charset=UTF-8";	
$.response.headers.set("Access-Control-Allow-Origin", "*");
$.response.setBody(rs);
$.response.status = $.net.http.OK;