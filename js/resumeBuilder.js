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
	"age" : 33,
	"skills" : skills
};
$("#main").append(bio.name);

