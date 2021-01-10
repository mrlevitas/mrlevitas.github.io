var skills = ["Ruby (on Rails)", "Python", "Go", "React", "Javascript", "Elm", "C", "C++", "SQL", "Fluently Speak: German & Russian"];

var bio = {
	"name" : "Roman Levitas",
	"resume_link" : "https://drive.google.com/file/d/12k2jPo6wdJ0jKSDtGmSWoafKeK4uUh0y",
	"skills" : skills ,
	"contact_info" : {
		"email_view" : "romanvlevitas at gmail.com",
		"email" : "romanvlevitas@gmail.com",
		"Linkedin": "linkedin.com/in/mrlevitas",
		"github": "github.com/mrlevitas",
		"location" : "San Francisco, CA"
	} ,
	"welcomeMessage": "Welcome to my page, here you will find my information and skills!",
    "bioPic": "images/state_fair.png"
};

var work = {
	"jobs" : [
		{
		"position" : "Senior Software Engineer",
		"employer" : "Juvo",
		"years"    : "2019-present",
		"description": "Devised API for Financial Identity as a Service (FIDaaS)--credit score API based on prepaid phone usage.<br>Built Kafka consumer for sms/push notifications in ETL pipeline based on user’s low-balance events<br>Created ETL Kafka consumer Campaign Notification service based on telco user's low-balance events.<br>Created microservice which calculates loan limit offered to users with FastApi asgi server (python)",
		"location" : "San Francisco, CA"
		},

		{
		"position" : "Software Engineer",
		"employer" : "Juvo",
		"years"    : "2018-2019",
		"description": "Juvo partners with mobile operators across the globe, providing prepaid mobile users in developing countries access to meaningful financial services using data science-driven Identity Scoring.<br>RoR backend responsibilities.<br>Integrated telco APIs for e-wallet payment systems (Rails) and expanded frontend web features (React)<br>Created backend USSD solution for airtime lending product (Rails)<br>Revamped billing system in Airflow (Python)<br>Developed API for ML credit policy decisioning engine based on prepaid phone activity",
		"location" : "San Francisco, CA"
		},

		{
		"position" : "Software Engineer",
		"employer" : "One Door (formerly RBM Technologies)",
		"years"    : "2017-2018",
		"description": "Expanded frontend applet in Elm (functional language) that replaced interactive Flash editor.",
		"location" : "Boston, MA"
		},

		{
		"position" : "Jr. Software Engineer",
		"employer" : "RBM Technologies",
		"years"    : "2016-2017",
		"description": "Implemented new Rails features in Scrum environment as a fullstack engineer.",
		"location" : "Boston, MA"
		},

		{
		"position" : "Software Engineer Intern",
		"employer" : "RBM Technologies",
		"years"    : "2016",
		"description": "Resolved support tickets, ported background jobs to use a new library, and implemented wireframe designs using Haml, Coffeescript, Sass, and Ruby on Rails.",
		"location" : "Boston, MA"
		},

		{
		"position" : "Freelance Tutor",
		"employer" : "Wyzant",
		"years"    : "2015",
		"description": "Created network of Iowa State University students that I tutored regularly in college level mathematics.",
		"location" : "Ames, IA"
		},

		{
		"position" : "Certified Tutor",
		"employer" : "Varsity Tutoring",
		"years"    : "2014-2015",
		"description": "Tutored high school and university students in areas of math (calculus through differential equations), Physics, Computer Science, and SAT/ACT prep.",
		"location" : "Washington D.C."
		},

		{
		"position" : "Tutor",
		"employer" : "Sylvan Learning",
		"years"    : "2013-2014",
		"description": "Tutored 2nd and 4th grade students in areas of Math and Reading",
		"location" : "Des Moines, IA"
		},

		{
		"position" : "Release Engineering Intern",
		"employer" : "Wolfram Research Inc.",
		"years"    : "2010-2011",
		"description": "Documented the weekly release cycle of www.wolframalpha.com & found points of optimization.",
		"location" : "Champaign, IL"
		},

		{
		"position" : "Research Assistant",
		"employer" : "Center for Plasma Material Interaction",
		"years"    : "2009-2010",
		"description": "Ran & Maintained Lithium Ion Interaction experiment as part of research for fusion tokomak reactor www.iter.org (International Thermonuclear Experimental Reactor).	Regulated conditions for Ion Surface Interaction Experiment i.e. adjusting voltage levels to direct ion beam, maintaining vacuum, troubleshooting diagnosis, etc.",
		"location" : "Urbana, IL"
		}
	]

};

var education = {
	"schools" : [
		{
		"name" : "University of Illinois Urbana Champaign" ,
		"years" : "2009-2014" ,
		"city"  : "Urbana-Champaign, IL",
		"major" : "B.S. in Electrical Engineering",
		"minors": "Computer Science, German, International Minor in Engineering--Germany",
		"GPA"   : "3.53"
		},

		{
		"name" : "Launch Academy" ,
		"years" : "2015-2016" ,
		"city"  : "Boston, MA",
		"major" : "Fullstack Web Development in Ruby (on Rails) and JS",
		"minors": "",
		"GPA"   : ""
		},

		{
		"name" : "Udacity" ,
		"years" : "2017" ,
		"city"  : "online",
		"major" : "Nanodegrees in: Fullstack Web Development in Python, React, and Machine Learning",
		"minors": "",
		"GPA"   : ""
		},
		{
		"name" : "Technical University Munich" ,
		"years" : "2012 summer" ,
		"city"  : "Munich, Germany",
		"major" : "Nanotechnology",
		"minors": "",
		"GPA"   : ""
		},

		{
		"name" : "North Kansas City High School" ,
		"years" : "2007-2009" ,
		"city"  : "North Kansas City, MO",
		"major" : "International Baccalaureate Diploma",
		"minors": "",
		"GPA"   : "4.0"
		},

		{
		"name" : "Oxford University St. Hugh's College" ,
		"years" : "2008 summer" ,
		"city"  : "Oxford, England",
		"major" : "Sociology",
		"minors": "",
		"GPA"	: ""
		}
	]
};


function displayBio(){
	var Statement = "Uni. of Illinois Urbana-Champaign Electrical Engineering 2014 graduate with a minor in Computer Science & German. Currently working as a Senior Software Engineer (backend).";

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", Statement)

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replaceAll("%email%", bio.contact_info.email).replaceAll("%email_view%", bio.contact_info.email_view);
	$("#topContacts").append(formattedEmail);

	var formattedLinkedin = HTMLLinkedin.replaceAll("%data%", bio.contact_info.Linkedin);
	$("#topContacts").append(formattedLinkedin);

	var formattedGithub = HTMLgithub.replaceAll("%data%", bio.contact_info.github);
	$("#topContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replaceAll("%data%", bio.contact_info.location);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill;

		for(skill_iter in bio.skills){
			formattedSkill = HTMLskills.replace("%data%" , bio.skills[skill_iter]);
			$("#skills").append(formattedSkill);
		}
	}

	$("#header").append(HTMLresume.replace("%data%" , bio.resume_link));

   $("#footerContacts").append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLinkedin);
}

function displayEducation(){
	if(education.schools.length > 0) {

		//create new div for work experience
		$("#education").append(HTMLschoolStart);
		var formattedschoolName;
		var formattedschoolDegree;
		var formattedschoolDates;
		var formattedschoolLocation;
		var formattedschoolMinor;

		for(school_iter in education.schools){
			formattedschoolName = HTMLschoolName.replace("%data%" , education.schools[school_iter].name);
			formattedschoolDegree = HTMLschoolDegree.replace("%data%" , education.schools[school_iter].major);
			formattedNameDegree = formattedschoolName + formattedschoolDegree;
			$(".education-entry:last").append(formattedNameDegree);

			formattedschoolDates = HTMLschoolDates.replace("%data%" , education.schools[school_iter].years);
			$(".education-entry:last").append(formattedschoolDates);

			formattedschoolLocation = HTMLschoolLocation.replace("%data%" , education.schools[school_iter].city);
			$(".education-entry:last").append(formattedschoolLocation);

			if(education.schools[school_iter].minors.length > 0){
				formattedschoolMinors = HTMLschoolMinor.replace("%data%" , education.schools[school_iter].minors);
				$(".education-entry:last").append(formattedschoolMinors);
			}

			if(education.schools[school_iter].GPA.length > 0){
				formattedschoolGPA = HTMLschoolGPA.replace("%data%" , education.schools[school_iter].GPA);
				$(".education-entry:last").append(formattedschoolGPA);
			}
		}
	}
}

function displayWork(){
	if(work.jobs.length > 0) {
		//create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer;
		var formattedTitle;
		var formattedEmployerTitle;
		var formattedworkDates;
		var formattedworkLocation;
		var formattedworkDescription;

		for(job_iter in work.jobs){
			formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job_iter].employer);
			formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job_iter].position);
			formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			formattedworkDates = HTMLworkDates.replace("%data%" , work.jobs[job_iter].years);
			$(".work-entry:last").append(formattedworkDates);

			formattedworkLocation = HTMLworkLocation.replace("%data%" , work.jobs[job_iter].location);
			$(".work-entry:last").append(formattedworkLocation);


			formattedworkDescription = HTMLworkDescription.replace("%data%" , work.jobs[job_iter].description);
			$(".work-entry:last").append(formattedworkDescription);

		}
	}
}

var menu = {
   "menu": [
      {
         "title": "education",
         "link": "#education"
      },

      {
         "title": "work",
         "link": "#workExperience"
      },

      {
         "title": "let's talk",
         "link": `mailto:${bio.contact_info.email}`
      }
   ]
};

menu.display = function () {
    'use strict';
    var i=0, entry="", toptitle="", y=0;
    $("nav").append("<ul id=\"navmenu\">");
    //alert(menu.menu.length);
    for (i=0; i<menu.menu.length; i=i+1) {
       //alert(menu.menu[i].type);
       entry = '<li><a href="'+menu.menu[i].link+'">'+menu.menu[i].title+'</a></li>';
          // console.log(entry);
          $("#navmenu:last").append(entry);
    }
};

/////////// main /////////////////////////////////////
menu.display();
displayBio();
displayEducation();
displayWork();
