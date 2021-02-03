
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/PDFViewer",
	"sap/ui/core/Fragment"
], function (Controller,PDFViewer,Fragment) {
	"use strict";
     var ResumeData  = { personal : {
						name : "",
						role: "",
						address: "",
						email: "",
						github: "",
						lmail: "",
						phno: "",
						cobj: ""
						},
						education : {} ,
						skills : {} , 
						projects : {} , 
						experience : {} };
	var skdata = [],
		eddata = [];
	return Controller.extend("ns.frontend.controller.View1", {
		onInit: function () {
			this.eduCount = 0;
			this.Experince = 1;
			this.Projects = 0;
			this.skill = 0;
      	},
		viewResume:function(ResumeData){
			var data={
  "userId": "1611841819",
  "name": "Gadi Srinivasa Sai Anudeep",
  "linkedin": "linkedin.com/in/anudeepgadi4952",
  "github": "https://github.com/anudeep4952",
  "email": "anudeep.insvirat@gmail.com",
  "mobileNumber": "8919410306",
  "role": "System Engineer",
  "about": "Self-motivated professional with ability to quickly master new technology to drive process improvements.Strong team player with collaborative abilities .",
  "education": [
    {
      "doj": "2016-06-25",
      "dop": "2020-09-13",
      "institution": "R.V.R & J.C College of Engineering",
      "course":"Btech Information Technology",
      "score": "8.8"
    },
    {
      "doj": "2013-06-25",
      "dop": "2015-09-13",
      "institution": "Sainik School Korukonda",
      "course":"secondary education",
      "score": "77"
    }
  ],
  "experience": [
    {
      "doj": "2020-07-23",
      "dop": "present",
      "role": "System Engineer",
      "company": "Tata Consultancy Services",
      "place": "hyderabad",
      "description": "Working on microservices using Django REST Framework , frontend usingAnguar and containerization using Docker ,also working on feed parsers and MySQL."
    },
    {
      "doj": "2020-01-13",
      "dop": "2020-03-05",
      "role": "Intern",
      "company": "Tata Consultancy Services",
      "place": "hyderabad",
      "description": "Worked on Spring Boot, Hibernate ,JPA,Spring Batch , Angular and microservices .Developed RESTAPIs and rich ui screens . Developed batch jobs . Used Swagger fordocumenting APIs."
    }
  ],
  "projects": [
    {
      "name": "Image Tamper Detection and Recovery Using Multiple Watermarks",
      "technology": [
        "python",
        "opencv2"
      ],
      "description": "The algorithm places watermarks of the image in the original image and can detect tampering when tampered and can also recover the tampered region."
    },
    {
      "name": "Twitter Tweet Analysis Webapp",
      "technology": [
        "Django RestFramework",
        "Angular",
        "Microservices",
        "Docker",
        "AWS EC2"
      ],
      "description": "This project gets live tweets from twitter ,analyze them and gives the sentiment. The tweets can be from a particular user or based on a hashtag. The analysis is done using python in the backend, microservices(REST APIs) are used to send the analyzed data to angular. The data contains tweets and their sentiment , overall sentiment , profile picture url and verified profile or not verfiried profile status."
    }
  ],
  "skills": [
    {
      "technology": "python",
      "score": "5"
    },
    {
      "technology": "java8",
      "score": "4.5"
    },
    {
      "technology": "Django",
      "score": "3.5"
    },
    {
      "technology": "ui5",
      "score": "3.5"
    }
  ]
};
            var doc = new jsPDF('p', 'mm', 'a4')
	        var h=0,w=10;

            var obj = {
  height: 15,
  letMeKnow() {
   if(doc.internal.pageSize.height<this.height){
      this.height=20;
     doc.addPage();
   }
  },
  get h() {
    return this.height;
  },
  set h(value) {
    this.height = value;
    this.letMeKnow();
  }
}

             console.log(ResumeData);
			doc.setFontSize(32)
			doc.setTextColor(0,0,0)
			doc.setFont('times','bold',900)
			doc.text(w,obj.h+=5, ResumeData.personal.name)
			
			doc.setFontSize(20)
			doc.setFont('times','bolditalic',900)
			doc.text(w,obj.h+=10,ResumeData.personal.role)
			
			doc.setFontSize(16)
			doc.setFont('times','bold',900)
			doc.text(w,obj.h+=15,'Email')
			doc.text(w,obj.h+=10,'Phone')
			doc.text(w,obj.h+=10,'Github')
			doc.text(w,obj.h+=10,'LinkedIn')
			
			doc.setFont('times','normal',400)
			doc.setFontSize(16)
			doc.setTextColor(32,32,32)
			doc.text(w+=30,obj.h-=30,ResumeData.personal.email)
			doc.text(w,obj.h+=10,ResumeData.personal.phno)
			doc.setFont('times','normal',400)
			doc.setFontSize(16)
			doc.setTextColor(32,32,32)
			doc.text(w,obj.h+=10,ResumeData.personal.github)
			doc.text(w,obj.h+=10,ResumeData.personal.lmail)
			
			var strAbout = doc.splitTextToSize(ResumeData.personal.cobj, 200)
			doc.text(strAbout,w=10,obj.h+=15);
			
			//Education
			doc.setFont('times','bold',900)
			doc.setFontSize(22)
			doc.text(w=10,obj.h+=25,'Education')
			w+=20
			for(var i=0;i<ResumeData.education.length;i++){
			    doc.setFont('times','bold',900)
			    doc.setFontSize(16)
			    doc.circle(w-10,obj.h+=15,1,'F')
			    doc.text(w,obj.h+2,ResumeData.education[i].Stream)
			    doc.setFont('times','normal',400)
			    doc.text(w,obj.h+=10,ResumeData.education[i].joined +" - "+ResumeData.education[i].relieved)
			   doc.text(w,obj.h+=10,ResumeData.education[i].cName)
			   doc.text(w,obj.h+=10,"score : "+ResumeData.education[i].score)    
			}
			
			
			// experience
			doc.setFont('times','bold',900)
			doc.setFontSize(22)
			obj.h+=25;
			doc.text(w=10,obj.h      ,'Experience')
			w+=20
			doc.setFont('times','bold',900)
			doc.setFontSize(16)
			doc.circle(w-10,obj.h+=15,1,'F')
			console.log(ResumeData.experience[0]);
			console.log(ResumeData.experience[0].cName);
			doc.text(w,obj.h+1,ResumeData.experience[0].cName)
			doc.setFont('times','normal',400)
			doc.text(w,obj.h+=10,ResumeData.experience[0].joined +" - "+ResumeData.experience[0].releived)
			//doc.text(w,obj.h+=10,data.experience[0].role)
			doc.text(w,obj.h+=10,doc.splitTextToSize(ResumeData.experience[0].description, 180))   
			
			for(var i=1;i<ResumeData.experience.length;i++){
			   doc.setFont('times','bold',900)
			doc.setFontSize(16)
			doc.circle(w-10,obj.h+=15,1,'F')
			doc.text(w,obj.h+1,ResumeData.experience[i].cName)
			doc.setFont('times','normal',400)
			doc.text(w,obj.h+=10,ResumeData.experience[i].joined +" - "+ResumeData.experience[i].releived)
			//doc.text(w,obj.h+=10,data.experience[i].role)
			doc.text(w,obj.h+=10,doc.splitTextToSize(ResumeData.experience[i].description, 180))   
	   
			   
			}
			
			//projects
			doc.setFont('times','bold',900)
			doc.setFontSize(22)
			obj.h+=35;
			doc.text(w=10,obj.h,'Projects')
			w+=20
			doc.setFont('times','bold',900)
			doc.setFontSize(16)
			doc.circle(w-10,obj.h+=15,1,'F')
			doc.text(w,obj.h+1,ResumeData.projects[0].pName)
			doc.setFont('times','normal',400)
			doc.text(w,obj.h+=10,ResumeData.projects[0].techs.toString())
			doc.text(w,obj.h+=10,doc.splitTextToSize(ResumeData.projects[0].description, 180))
			
			for(var i=1;i<ResumeData.projects.length;i++){
			    doc.setFont('times','bold',900)
			doc.setFontSize(16)
			doc.circle(w-10,obj.h+=15,1,'F')
			doc.text(w,obj.h+1,ResumeData.projects[i].pname)
			doc.setFont('times','normal',400)
			doc.text(w,obj.h+=10,ResumeData.projects[i].techs.toString())
			doc.text(w,obj.h+=10,doc.splitTextToSize(ResumeData.projects[i].description, 180))
			
			}
			
			
			//skills
			doc.setFont('times','bold',900)
			doc.setFontSize(22)
			obj.h+=30
			doc.text(w=10,obj.h,'Skills')
			w+=20
			for(var i=0;i<ResumeData.skills.length;i++){
			doc.setFont('times','normal',400)
			doc.text(w,obj.h+=10,`${ResumeData.skills[i].technology}`)
			doc.text(w+40,obj.h,`${ResumeData.skills[i].score} / 5`)
			}
			
			
			
			var oBlobPDF =  new Blob([ doc.output() ], { type : 'application/pdf'});
            var sBlobUrl = URL.createObjectURL(oBlobPDF);
            jQuery.sap.addUrlWhitelist("blob"); 
               
            var oPdfViewer = new PDFViewer();
            oPdfViewer.setTitle(data.name+" Resume");
			oPdfViewer.setSource(sBlobUrl);
			oPdfViewer.open();

		},
		deleteFrag: function(oEvent,id)
		{
			var old = this.fragDict[id];
			console.log("delete",this.byId(id).getContent());
			this.byId(id).removeAllContent();
			console.log("delete",this.fragDict);
			var comp = (old === this.fragDict[id]);
			console.log(comp);
			this.byId(id).insertContent(this.fragDict[id]);
			console.log("delete",this.fragDict);
		},
		onEduClick: function(){
			var type = this.byId("eduType").getSelectedKey();
			if(type === ""){
				alert("please enter Skill Name");
				return;
			}
			if(eddata.includes(type)){
				alert("Course Already Exists");
				return;
			}
			eddata.push(type);
			var id = "edu"  + this.eduCount;
			this.eduCount = this.eduCount + 1;
			var obj2value = this.edutext(type,id);
			ResumeData.education[id] = { relieved : "" , joined : "" , cName : "" , Stream : type , score : ""};
			var formContainer = new sap.ui.layout.form.FormContainer({"title":type });
			var formElement = new sap.ui.layout.form.FormElement({label:"Duration"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"College Name"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Score"});
			var formElement3 = new sap.ui.layout.form.FormElement({label:""});
			var inp = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Relieved Year",id : id + "_relieved" });
			var inp1 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Join Year", id : id + "_joined"});
			var inp2 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter College Name", id : id + "_cName"});
			var inp3 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Cgpa/Percentage", id : id + "_score"});
			var btn = new sap.m.Button({ type : sap.m.ButtonType.Reject, icon : "sap-icon://delete", width: "30%"});
			formElement.addField(inp);
			formElement.addField(inp1);
			formElement1.addField(inp2);
			formElement2.addField(inp3);
			formElement3.addField(btn);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			formContainer.addFormElement(formElement3);
			this.byId("education").addFormContainer(formContainer);
			inp.attachChange(this.onChange,{key3: "relieved", key1:"education", key2: id});
			inp1.attachChange(this.onChange,{key3: "joined", key1:"education", key2: id});
			inp2.attachChange(this.onChange,{key3: "cName", key1:"education", key2: id});
			inp3.attachChange(this.onChange,{key3: "score", key1:"education", key2: id});
			this.byId("eduType").setValue("");
			btn.attachPress(this.onDelete,{obj : formContainer, obj1: obj2value, parentKey:"education", key: id});
			console.log(ResumeData);
		},
		onExpClick: function(){
			var id = "exp"  + this.Experince;
			this.Experince = this.Experince + 1;
			ResumeData.experience[id] = { relieved : "" , joined : "" , cName : "" , description : ""};
			var obj2value = this.exptext(id);
			var formContainer = new sap.ui.layout.form.FormContainer({"title": id });
			var formElement = new sap.ui.layout.form.FormElement({label:"Duration"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"Company Name"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Work Description"});
			var formElement3 = new sap.ui.layout.form.FormElement({label:""});
			var inp = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Relieved Year", id : id + "_relieved" });
			var inp1 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Join Year", id : id + "_joined"});
			var inp2 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Company Name", id : id + "_cName"});
			var inp4 = new sap.m.TextArea({placeholder: "Description", id : id + "_description"});
			var btn = new sap.m.Button({ type : sap.m.ButtonType.Reject, icon : "sap-icon://delete", width: "30%"});
			formElement.addField(inp);
			formElement.addField(inp1);
			formElement1.addField(inp2);
			formElement2.addField(inp4);
			formElement3.addField(btn);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			formContainer.addFormElement(formElement3);
			inp.attachChange(this.onChange,{key3: "relieved", key1:"experience", key2: id});
			inp1.attachChange(this.onChange,{key3: "joined", key1:"experience", key2: id});
			inp2.attachChange(this.onChange,{key3: "cName", key1:"experience", key2: id});
			inp4.attachChange(this.onChange,{key3: "description", key1:"experience", key2: id});
			btn.attachPress(this.onDelete,{obj : formContainer, obj1: obj2value, parentKey:"experience", key: id});
			this.byId("experience").addFormContainer(formContainer);

		},
		onSkillClick: function(){
			var type = this.byId("skillName").getValue();
			if(type === ""){
				alert("please enter Skill Name");
				return;
			}
			if(skdata.includes(type)){
				alert("Skill Already Exists");
				return;
			}
			skdata.push(type);
			this.byId("skillName").setValue("");
			ResumeData.skills[type] = 0;
			var obj2value = this.skilltext(type);
			var formElement = new sap.ui.layout.form.FormElement({label:type});
			var btn = new sap.m.Button({ type : sap.m.ButtonType.Reject, icon : "sap-icon://delete", width: "30%"});
			var inp = new sap.m.Input({ type: sap.m.InputType.Number, placeholder: "Enter Rating",id : type});
			formElement.addField(inp);
			formElement.addField(btn);
			btn.attachPress(this.onDelete,{obj : formElement, obj1: obj2value, parentKey:"skills", key: type});
			inp.attachChange(this.onChange,{key1:"skills", key2: type});
			this.byId("skillCon").addFormElement(formElement);
		},
		onProjClick: function(){
			var id = "proj"  + this.Projects;
			this.Projects = this.Projects + 1;
			ResumeData.projects[id] = { pName : "" , techs : "" , description : ""};
			var obj2value = this.projtext(id);
			var formContainer = new sap.ui.layout.form.FormContainer({"title": id});
			var formElement = new sap.ui.layout.form.FormElement({label:"Project Name"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"Tecnologies Used"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Description"});
			var formElement3 = new sap.ui.layout.form.FormElement({label:""});
			var inp = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Project Name", id : id + "_pName"});
			var inp1 = new sap.m.Input({ type: sap.m.InputType.Text, placeholder: "Enter Technologies Used Seperated by ','", id : id + "_techs"});
			var inp2 = new sap.m.TextArea({placeholder: "Description", id : id + "_description"});
			var btn = new sap.m.Button({ type : sap.m.ButtonType.Reject, icon : "sap-icon://delete", width: "30%"});
			formElement.addField(inp);
			formElement1.addField(inp1);
			formElement2.addField(inp2);
			formElement3.addField(btn);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			formContainer.addFormElement(formElement3);
			inp.attachChange(this.onChange,{key3: "pName", key1:"projects", key2: id});
			inp1.attachChange(this.onChange,{key3: "techs", key1:"projects", key2: id});
			inp2.attachChange(this.onChange,{key3: "description", key1:"projects", key2: id});
			btn.attachPress(this.onDelete,{obj : formContainer,obj1: obj2value , parentKey:"projects", key: id});
			this.byId("Projects").addFormContainer(formContainer);
		},
		onClick: function(oEvent){
		 var data = {personal : {}, 
						education : [] ,
						skills : [] , 
						projects : [] , 
						experience : [] },
			 key = "";
			 data.personal=ResumeData.personal;
			 console.log('hi',data.personal,ResumeData.personal);
			for(key in ResumeData.education)
			{
				data.education.push(ResumeData.education[key]);
			}
			for(key in ResumeData.skills)
			{   console.log(key);
				data.skills.push({'score' : ResumeData.skills[key],
					'technology':key
				});
			}
			for(key in ResumeData.projects)
			{
				data.projects.push(ResumeData.projects[key]);
			}
			for(key in ResumeData.experience)
			{
				data.experience.push(ResumeData.experience[key]);
			}
			
			this.byId("confirmTab").setEnabled(true);
			this.viewResume(data);
		},
		onChange: function(oEvent){
			var params = oEvent.getParameters();
			var val = params.newValue;
			if(this.key1 === "skills")
			{   
				ResumeData[this.key1][this.key2] = val;
			}else{
				ResumeData[this.key1][this.key2][this.key3] = val;
			}
			sap.ui.getCore().byId(params.id+"Text").setText(val);
			console.log(ResumeData);
		},
		onPersonalChange: function(oEvent,key){
			var params = oEvent.getParameters();
			var val = params.newValue;
			ResumeData.personal[key] = val;
			this.byId(key+"Text").setText(val);
			console.log(ResumeData);
		},
		onDelete: function(){
			if(this.parentKey === "education"){
				eddata.pop(ResumeData[this.parentKey][this.key].Stream);
			}
			if(this.parentKey === "skills"){
				skdata.pop(this.key);
			}
			delete ResumeData[this.parentKey][this.key];
			this.obj.destroy();
			this.obj1.destroy();
			console.log(ResumeData,eddata,skdata);
			console.log("Boom!!!!");
		},
		projtext: function(id){
			var formContainer = new sap.ui.layout.form.FormContainer({"title": id});
			var formElement = new sap.ui.layout.form.FormElement({label:"Project Name"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"Tecnologies Used"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Description"});
			var inp = new sap.m.Text({text: "", id : id + "_pNameText"});
			var inp1 = new sap.m.Text({text: "", id : id + "_techsText"});
			var inp2 = new sap.m.Text({text: "", id : id + "_descriptionText"});
			formElement.addField(inp);
			formElement1.addField(inp1);
			formElement2.addField(inp2);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			this.byId("ProjectsText").addFormContainer(formContainer)
			return formContainer
		},
		edutext: function(type,id){
			var formContainer = new sap.ui.layout.form.FormContainer({"title":type });
			var formElement = new sap.ui.layout.form.FormElement({label:"Duration"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"College Name"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Score"});
			var inp = new sap.m.Text({id : id + "_relievedText" });
			var inp1 = new sap.m.Text({id : id + "_joinedText"});
			var inp2 = new sap.m.Text({id : id + "_cNameText"});
			var inp3 = new sap.m.Text({id : id + "_scoreText"});
			formElement.addField(inp);
			formElement.addField(inp1);
			formElement1.addField(inp2);
			formElement2.addField(inp3);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			this.byId("educationText").addFormContainer(formContainer);
			return formContainer;
		},
		skilltext: function(type){
			var formElement = new sap.ui.layout.form.FormElement({label:type});
			var inp = new sap.m.Text({id : (type + "Text")});
			formElement.addField(inp);
			this.byId("skillConText").addFormElement(formElement);
			return formElement;
		},
		exptext: function(id){
			var formContainer = new sap.ui.layout.form.FormContainer({"title": id });
			var formElement = new sap.ui.layout.form.FormElement({label:"Duration"});
			var formElement1 = new sap.ui.layout.form.FormElement({label:"Company Name"});
			var formElement2 = new sap.ui.layout.form.FormElement({label:"Work Description"});
			var inp = new sap.m.Text({id : id + "_relievedText" });
			var inp1 = new sap.m.Text({id : id + "_joinedText"});
			var inp2 = new sap.m.Text({id : id + "_cNameText"});
			var inp4 = new sap.m.Text({id : id + "_descriptionText"});
			formElement.addField(inp);
			formElement.addField(inp1);
			formElement1.addField(inp2);
			formElement2.addField(inp4);
			formContainer.addFormElement(formElement);
			formContainer.addFormElement(formElement1);
			formContainer.addFormElement(formElement2);
			this.byId("experienceText").addFormContainer(formContainer);
			return formContainer;
		},
		onEdit: function(oEvent, id){
			var array = ["personalPanel","eduPanel","expPanel","skillPanel","projPanel"],
				that = this;
			this.byId("idIconTabBar").setSelectedKey("Form");
			array.forEach(collapse);
			function collapse(item, index) {
				that.byId(item).setExpanded(false);
			}
			this.byId(id).setExpanded(true);
			//this.byId("confirmTab").setEnabled(false);
		}
		
	});
});
