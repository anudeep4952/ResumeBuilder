sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/PDFViewer"
], function (Controller,PDFViewer) {
	"use strict";

	return Controller.extend("ns.frontend.controller.View1", {
		onInit: function () {
      	},
		viewResume:function(oEvent){
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


			doc.setFontSize(32)
			doc.setTextColor(0,0,0)
			doc.setFont('times','bold',900)
			doc.text(w,obj.h+=5, data.name)
			
			doc.setFontSize(20)
			doc.setFont('times','bolditalic',900)
			doc.text(w,obj.h+=10,data.role)
			
			doc.setFontSize(16)
			doc.setFont('times','bold',900)
			doc.text(w,obj.h+=15,'Email')
			doc.text(w,obj.h+=10,'Phone')
			doc.text(w,obj.h+=10,'Github')
			doc.text(w,obj.h+=10,'LinkedIn')
			
			doc.setFont('times','normal',400)
			doc.setFontSize(16)
			doc.setTextColor(32,32,32)
			doc.text(w+=30,obj.h-=30,data.email)
			doc.text(w,obj.h+=10,data.mobileNumber)
			doc.setFont('times','normal',400)
			doc.setFontSize(16)
			doc.setTextColor(32,32,32)
			doc.text(w,obj.h+=10,data.github)
			doc.text(w,obj.h+=10,data.linkedin)
			
			var strAbout = doc.splitTextToSize(data.about, 200)
			doc.text(strAbout,w=10,obj.h+=15);
			
			//Education
			doc.setFont('times','bold',900)
			doc.setFontSize(22)
			doc.text(w=10,obj.h+=25,'Education')
			w+=20
			for(var i=0;i<data.education.length;i++){
			    doc.setFont('times','bold',900)
			    doc.setFontSize(16)
			    doc.circle(w-10,obj.h+=15,1,'F')
			    doc.text(w,obj.h+2,data.education[i].course)
			    doc.setFont('times','normal',400)
			    doc.text(w,obj.h+=10,data.education[i].doj +" - "+data.education[i].dop)
			   doc.text(w,obj.h+=10,data.education[i].institution)
			   doc.text(w,obj.h+=10,"score : "+data.education[i].score)    
			}
			
			
			// experience
			doc.setFont('times','bold',900)
			doc.setFontSize(22)
			doc.text(w=10,obj.h+=25,'Experience')
			w+=20
			doc.setFont('times','bold',900)
			doc.setFontSize(16)
			doc.circle(w-10,obj.h+=15,1,'F')
			doc.text(w,obj.h+1,data.experience[0].company)
			doc.setFont('times','normal',400)
			doc.text(w,obj.h+=10,data.experience[0].doj +" - "+data.experience[0].dop)
			doc.text(w,obj.h+=10,data.experience[0].role)
			doc.text(w,obj.h+=10,doc.splitTextToSize(data.experience[0].description, 180))   
			
			for(var i=1;i<data.experience.length;i++){
			    doc.setFont('times','bold',900)
			    doc.setFontSize(16)
			    obj.h+=25
			    doc.circle(w-10,obj.h,1,'F')
			    doc.text(w,obj.h+1,data.experience[i].company)
			    doc.setFont('times','normal',400)
			    doc.text(w,obj.h+=10,data.experience[i].doj +" - "+data.experience[i].dop)
			    doc.text(w,obj.h+=10,data.experience[i].role)
			    doc.text(w,obj.h+=10,doc.splitTextToSize(data.experience[i].description, 180))   
			   
			}
			
			//projects
			doc.setFont('times','bold',900)
			doc.setFontSize(22)
			doc.text(w=10,obj.h+=35,'Projects')
			w+=20
			doc.setFont('times','bold',900)
			doc.setFontSize(16)
			doc.circle(w-10,obj.h+=15,1,'F')
			doc.text(w,obj.h+1,data.projects[0].name)
			doc.setFont('times','normal',400)
			doc.text(w,obj.h+=10,data.projects[0].technology.toString())
			doc.text(w,obj.h+=10,doc.splitTextToSize(data.projects[0].description, 180))
			
			for(var i=1;i<data.projects.length;i++){
			    doc.setFont('times','bold',900)
			doc.setFontSize(16)
			doc.circle(w-10,obj.h+=15,1,'F')
			doc.text(w,obj.h+1,data.projects[i].name)
			doc.setFont('times','normal',400)
			doc.text(w,obj.h+=10,data.projects[i].technology.toString())
			doc.text(w,obj.h+=10,doc.splitTextToSize(data.projects[i].description, 180))
			
			}
			
			
			//skills
			doc.setFont('times','bold',900)
			doc.setFontSize(22)
			doc.text(w=10,obj.h+=50,'Skills')
			w+=20
			for(var i=0;i<data.skills.length;i++){
			doc.setFont('times','normal',400)
			doc.text(w,obj.h+=10,`${data.skills[i].technology}`)
			doc.text(w+40,obj.h,`${data.skills[i].score} / 5`)
			}
			
			
			
			var oBlobPDF =  new Blob([ doc.output() ], { type : 'application/pdf'});
            var sBlobUrl = URL.createObjectURL(oBlobPDF);
            jQuery.sap.addUrlWhitelist("blob"); 
               
            var oPdfViewer = new PDFViewer();
            oPdfViewer.setTitle(data.name+" Resume");
			oPdfViewer.setSource(sBlobUrl);
			oPdfViewer.open();

		}
	});
});