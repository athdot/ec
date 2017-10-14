function enc(input)
{
var run = 0;
var len = input.length;
var buildEncrypt = "";
while(run < len){
	var letter = input.substring(run,run+1);
	if(letter == "a"){
  	buildEncrypt += "lb";
  }
  if(letter == "b"){
  	buildEncrypt += "lc";
  }
  if(letter == "c"){
  	buildEncrypt += "ld";
  }
  if(letter == "d"){
  	buildEncrypt += "le";
  }
  if(letter == "e"){
  	buildEncrypt += "lf";
  }
  if(letter == "f"){
  	buildEncrypt += "lg";
  }
  if(letter == "g"){
  	buildEncrypt += "lh";
  }
  if(letter == "h"){
  	buildEncrypt += "li";
  }
  if(letter == "i"){
  	buildEncrypt += "lj";
  }
  if(letter == "j"){
  	buildEncrypt += "lk";
  }
  if(letter == "k"){
  	buildEncrypt += "ll";
  }
  if(letter == "l"){
  	buildEncrypt += "lm";
  }
  if(letter == "m"){
  	buildEncrypt += "ln";
  }
  if(letter == "n"){
  	buildEncrypt += "lo";
  }
  if(letter == "o"){
  	buildEncrypt += "lp";
  }
  if(letter == "p"){
  	buildEncrypt += "lq";
  }
  if(letter == "q"){
  	buildEncrypt += "lr";
  }
  if(letter == "r"){
  	buildEncrypt += "ls";
  }
  if(letter == "s"){
  	buildEncrypt += "lt";
  }
  if(letter == "t"){
  	buildEncrypt += "lu";
  }
  if(letter == "u"){
  	buildEncrypt += "lv";
  }
  if(letter == "v"){
  	buildEncrypt += "lw";
  }
  if(letter == "w"){
  	buildEncrypt += "lx";
  }
  if(letter == "x"){
  	buildEncrypt += "ly";
  }
  if(letter == "y"){
  	buildEncrypt += "lz";
  }
  if(letter == "z"){
  	buildEncrypt += "la";
  }
  
  //Uppercase
  if(letter == "A"){
  	buildEncrypt += "ub";
  }
  if(letter == "B"){
  	buildEncrypt += "uc";
  }
  if(letter == "C"){
  	buildEncrypt += "ud";
  }
  if(letter == "D"){
  	buildEncrypt += "ue";
  }
  if(letter == "E"){
  	buildEncrypt += "uf";
  }
  if(letter == "F"){
  	buildEncrypt += "ug";
  }
  if(letter == "G"){
  	buildEncrypt += "uh";
  }
  if(letter == "H"){
  	buildEncrypt += "ui";
  }
  if(letter == "I"){
  	buildEncrypt += "uj";
  }
  if(letter == "J"){
  	buildEncrypt += "uk";
  }
  if(letter == "K"){
  	buildEncrypt += "ul";
  }
  if(letter == "L"){
  	buildEncrypt += "um";
  }
  if(letter == "M"){
  	buildEncrypt += "un";
  }
  if(letter == "N"){
  	buildEncrypt += "uo";
  }
  if(letter == "O"){
  	buildEncrypt += "up";
  }
  if(letter == "P"){
  	buildEncrypt += "uq";
  }
  if(letter == "Q"){
  	buildEncrypt += "ur";
  }
  if(letter == "R"){
  	buildEncrypt += "us";
  }
  if(letter == "S"){
  	buildEncrypt += "ut";
  }
  if(letter == "T"){
  	buildEncrypt += "uu";
  }
  if(letter == "U"){
  	buildEncrypt += "uv";
  }
  if(letter == "V"){
  	buildEncrypt += "uw";
  }
  if(letter == "W"){
  	buildEncrypt += "ux";
  }
  if(letter == "X"){
  	buildEncrypt += "uy";
  }
  if(letter == "Y"){
  	buildEncrypt += "uz";
  }
  if(letter == "Z"){
  	buildEncrypt += "ua";
  }
  
  //web-safe characters
  
  if(letter == "+"){
  	buildEncrypt += "ps";
  }
  if(letter == "-"){
  	buildEncrypt += "ms";
  }
  if(letter == "_"){
  	buildEncrypt += "ds";
  }
  if(letter == "%"){
  	buildEncrypt += "pr";
  }
  if(letter == "&"){
  	buildEncrypt += "at";
  }
  if(letter == "~"){
  	buildEncrypt += "te";
  }
  if(letter == "$"){
  	buildEncrypt += "dl";
  }
  if(letter == ","){
  	buildEncrypt += "ca";
  }
  if(letter == "/"){
  	buildEncrypt += "sl";
  }
  if(letter == ":"){
  	buildEncrypt += "co";
  }
  if(letter == ";"){
  	buildEncrypt += "sc";
  }
  if(letter == "="){
  	buildEncrypt += "eq";
  }
  if(letter == "?"){
  	buildEncrypt += "qu";
  }
  if(letter == "@"){
  	buildEncrypt += "ta";
  }
  if(letter == "#"){
  	buildEncrypt += "pd";
  }
  
	run++;
  if(Math.round(Math.random()*2) == 1){
  	buildEncrypt += Math.round(Math.random()*10);
  };
}
buildEncrypt = buildEncrypt.toUpperCase();
  return buildEncrypt;
}
