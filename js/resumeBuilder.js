//$("#main").append(["Roman Levitas\n"]);
/*
var awesomeThoughts = "I am Roman and I am AWESOME!"
console.log(awesomeThoughts);

var email = "mrlevitas@yahoo.com"

var newEmail = email.replace("yahoo", "gmail");

console.log(email)
console.log(newEmail)

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");


$("#main").append(funThoughts);
*/



var skills = ["Ruby (on Rails)", "C/C++" , "Python", "Javascript", "SQL",  "Unix Command Line/Linux OS", "Fluently Speak: German & Russian"];

var bio = {
	"name" : "Roman Levitas",
	"skills" : skills ,
	"contact_info" : {
		"email" : "mrlevitas@yahoo.com" ,
		"Linkedin": "www.linkedin.com/in/mrlevitas" ,
		"github": "github.com/mrlevitas",
		"location" : "Boston, MA"
	} ,
	"welcomeMessage": "Welcome to my resume, here you will find my information and skills!",
    "bioPic": "images/me.jpg"
};




var work = {
	"jobs" : [
		{
		"position" : "Jr. Software Engineer",
		"employer" : "RBM Technologies",
		"years"    : "2016-present",
		"description": "Developing new features based on wire-frames as a fullstack engineer.",
		"location" : "Boston, MA"
		},

		{
		"position" : "Software Engineer Intern",
		"employer" : "RBM Technologies",
		"years"    : "2016",
		"description": "Deployed code in a Ruby on Rails environment using pull‑request workflow as well as operating under a Scrum sprint based system.",
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
		"name" : "Launch Academy" ,
		"years" : "2015-2016" ,
		"city"  : "Boston, MA",
		"major" : "Fullstack Web Development in Ruby (on Rails) and JS",
		"minors": "",
		"GPA"   : ""
		},

		{
		"name" : "Udacity" ,
		"years" : "2015" ,
		"city"  : "online",
		"major" : "Nanodegree in Fullstack Web Development in Python",
		"minors": "",
		"GPA"   : ""
		},

		{
		"name" : "University of Illinois Urbana Champaign" ,
		"years" : "2009-2014" ,
		"city"  : "Urbana-Champaign, IL",
		"major" : "B.S. in Electrical Engineering",
		"minors": "Computer Science, German, International Minor in Engineering--Germany",
		"GPA"   : "3.53"
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


/*
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span>%data%</span>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";
var HTMLbioPic = "<img src='%data%' class='biopic'>";
*/

function displayBio(){
	var Statement = "Uni. of Illinois Urbana-Champaign Electrical Engineering 2014 graduate with a minor in Computer Science & German\n Currently working as Fullstack Software Engineer";

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", Statement)

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace("%data%", bio.contact_info.email);
	$("#topContacts").append(formattedEmail);

	var formattedLinkedin = HTMLLinkedin.replace("%data%", bio.contact_info.Linkedin);
	$("#topContacts").append(formattedLinkedin);

	// var formattedMobile = HTMLmobile.replace("%data%", bio.contact_info.mobile);
	//$("#topContacts").append(formattedMobile);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contact_info.github);
	$("#topContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contact_info.location);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill;

			for(skill_iter in bio.skills){
				formattedSkill = HTMLskills.replace("%data%" , bio.skills[skill_iter]);
				$("#header").append(formattedSkill);
			}
		}

   $("#footerContacts").append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);
}


/*
var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMinor = "<em><br>Major: %data%</em>"
*/
function displayEducation(){
	console.log("education.schools.length" );

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
			//formattedworkDescription = HTMLworkLocation.replace("%data%" , work.jobs[school_iter].description);
			//$(".work-entry:last").append(formattedworkDescription);

		}
	}

}


/*
var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";
*/

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
   /*   {
         "title": "projects",
         "link": "#projectsH2"
      },*/
      {
         "title": "map",
         "link": "#mapDiv"
      },
      {
         "title": "let's talk",
         "link": "mailto:mrlevitas@yahoo.com"
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


$("#mapDiv").append(googleMap);
