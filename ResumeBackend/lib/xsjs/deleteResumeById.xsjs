
"use strict";

let conn= $.hdb.getConnection();

const id = $.request.parameters.get('id');

let personalQuery=`DELETE FROM "RESUMEHANADB_1"."PERSONALDETAILS" where ("DOCUMENTID"='${id}')`;


 let educationQuery=`DELETE  FROM "RESUMEHANADB_1"."EDUCATIONDETAILS" where ("DOCUMENTID"='${id}')`;

 let experienceQuery=`DELETE FROM "RESUMEHANADB_1"."EXPERIENCEDETAILS" where ("DOCUMENTID"='${id}')`;

 let projectQuery=`DELETE FROM "RESUMEHANADB_1"."PROJECTDETAILS" where ("DOCUMENTID"='${id}')`;

 let skillQuery=`DELETE FROM "RESUMEHANADB_1"."SKILLDETAILS" where ("DOCUMENTID"='${id}')`;
 
 let userResumeQuery=`DELETE FROM "RESUMEHANADB_1"."USERRESUMEID" where ("DOCUMENTID"='${id}')`;



let  rs= conn.executeUpdate(personalQuery);
 rs= conn.executeUpdate(educationQuery);
 rs = conn.executeUpdate(experienceQuery);
 rs = conn.executeUpdate(projectQuery);
 rs = conn.executeUpdate(skillQuery);
 rs =conn.executeUpdate(userResumeQuery);
conn.commit();



$.response.contentType = "application/json;charset=UTF-8";	
$.response.headers.set("Access-Control-Allow-Origin", "*");
$.response.setBody(rs);
$.response.status = $.net.http.OK;


