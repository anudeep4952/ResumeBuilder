

"use strict";

$.response.contentType = "application/json;charset=UTF-8";	
$.response.headers.set("Access-Control-Allow-Origin", "*");

let conn = $.hdb.getConnection();

var content = $.request.body.asString();

content = JSON.parse(content);

var timestamp = new Date().getTime();


 let UserResumeIdQuery =`INSERT INTO "RESUMEHANADB_1"."USERRESUMEID" VALUES(
	'${content.data.username}'/*USERNAME <NVARCHAR(30)>*/,
	'doc${timestamp}'/*DOCUMENTID <NVARCHAR(30)>*/,
	'${content.personal.name}_${timestamp}'/*DOCUMENTNAME <NVARCHAR(50)>*/
)`;


let PersonalDetailsQuery=`INSERT INTO "RESUMEHANADB_1"."PERSONALDETAILS" VALUES(
	'doc${timestamp}'/*DOCUMENTID <NVARCHAR(30)>*/,
	'${content.personal.name}'/*NAME <NVARCHAR(50)>*/,
	'${content.personal.role}'/*ROLE <NVARCHAR(50)>*/,
	'${content.personal.email}'/*EMAIL <NVARCHAR(50)>*/,
	'${content.personal.github}'/*GITHUB <NVARCHAR(50)>*/,
	'${content.personal.lmail}'/*LINKEDIN <NVARCHAR(50)>*/,
	'${content.personal.phno}'/*PHONENUMBER <NVARCHAR(50)>*/,
	'${content.personal.cobj}'/*CARREROBJECTIVE <NVARCHAR(1000)>*/
)`;

let EducationDetailsQuery=[];

for(var i=0;i<content.education.length;i++){

  EducationDetailsQuery.push(`INSERT INTO "RESUMEHANADB_1"."EDUCATIONDETAILS" VALUES(
	'doc${timestamp}'/*DOCUMENTID <NVARCHAR(30)>*/,
	'${content.education[i].Stream}'/*COURSE <NVARCHAR(50)>*/,
	'${content.education[i].joined}'/*STARTYEAR <NVARCHAR(50)>*/,
	'${content.education[i].relieved}'/*ENDYEAR <NVARCHAR(50)>*/,
	'${content.education[i].score}'/*SCORE <NVARCHAR(50)>*/,
	'${content.education[i].cName}'/*INSTITUTIONNAME <NVARCHAR(100)>*/
)`);
	
}


let ProjectDeatilsQuery=[];

for(var i=0;i<content.projects.length;i++){

  ProjectDeatilsQuery.push(`INSERT INTO "RESUMEHANADB_1"."PROJECTDETAILS" VALUES(
	'doc${timestamp}'/*DOCUMENTID <NVARCHAR(30)>*/,
	'${content.projects[i].techs}'/*TECHNOLOGIES <NVARCHAR(150)>*/,
	'${content.projects[i].description}'/*DESCRIPTION <NVARCHAR(1000)>*/,
	'${content.projects[i].pName}'/*PROJECTNAME <NVARCHAR(200)>*/
)`);
	
}


let ExperienceDeatilsQuery=[];

for(var i=0;i<content.projects.length;i++){

  ExperienceDeatilsQuery.push(`INSERT INTO "RESUMEHANADB_1"."EXPERIENCEDETAILS" VALUES(
	'doc${timestamp}'/*DOCUMENTID <NVARCHAR(30)>*/,
	'${content.experience[i].joined}'/*STARTYEAR <NVARCHAR(50)>*/,
	'${content.experience[i].relieved}'/*ENDYEAR <NVARCHAR(50)>*/,
	'${content.experience[i].description}'/*DESCRIPTION <NVARCHAR(1000)>*/,
	'${content.experience[i].cName}'/*COMPANYNAME <NVARCHAR(100)>*/
)`);
}	

let SkillDetailsQuery=[];

for(var i=0;i<content.skills.length;i++){

  SkillDetailsQuery.push(`INSERT INTO "RESUMEHANADB_1"."SKILLDETAILS" VALUES(
	'doc${timestamp}'/*DOCUMENTID <NVARCHAR(30)>*/,
	'${content.skills[i].technology}'/*TECHNOLOGY <NVARCHAR(150)>*/,
	'${content.skills[i].score}'/*RATING <NVARCHAR(20)>*/
)`);	
	
}




 let rs = conn.executeUpdate(UserResumeIdQuery);
 rs=conn.executeUpdate(PersonalDetailsQuery);
 for(var i=0;i<content.education.length;i++)
  rs=conn.executeUpdate(EducationDetailsQuery[i]);
 for(var i=0;i<content.projects.length;i++)
  rs=conn.executeUpdate(ProjectDeatilsQuery[i]); 
 for(var i=0;i<content.experience.length;i++)
  rs=conn.executeUpdate(ExperienceDeatilsQuery[i]);  
 for(var i=0;i<content.skills.length;i++)
  rs=conn.executeUpdate(SkillDetailsQuery[i]);   
 conn.commit();



$.response.setBody(rs);
$.response.status = $.net.http.OK;

