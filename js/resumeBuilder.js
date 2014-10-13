var name = "Dani";
//$("#main").append(name);
//quiz1
// var awesomeThoughts = "I am Dani and I am AWESOME!";
// console.log(awesomeThoughts);

//quiz2: trying out [string].replace([old],[new])
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

//quiz 3
var formattedName = HTMLheaderName.replace("%data%",name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);



//In this way will place the role first then will prepend the name afterwards
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// quiz4
var skills = ["faithfull","programming","friendly","detailed"];
var bio = {
	"name" : "Dani",
	"role": "Web Developer",
	"contactInfo": {
		"work ph.":"134.024.0240",
		"client ph.":"925.123.1111"
	},
	"bioPic": "images/dani.jpg",
	"skills" : skills,
	"welcomemsg": "Welcome to my resume page! Hope you can find what you're looking for!"
};

var formattedContactInfo = HTMLcontactGeneric.replace("%data%",bio.contactInfo);

$("#topContacts").append(formattedContactInfo);





