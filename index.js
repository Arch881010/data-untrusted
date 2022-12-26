const divider =`-----------------------------------`
const owner = "Created By: Arch1010#4338 on Discord"
const data = "Data fetched by Untrusted's API: "
const game = "Game Data for:  "
const divdata = document.getElementById('data');
const skillData = document.createElement("a");
skillData.href="skillData.json";
skillData.textContent="skillData.json";
skillData.setAttribute("download","skillData.json");
const classData = document.createElement("a");
classData.href="classData.json";
classData.textContent="classData.json";
classData.setAttribute("download","classData.json");
uh = "uh"
var request = new XMLHttpRequest()
const hiddeninfo = document.getElementById("Hiddeninfo");
const select = document.getElementById("select");
const dataselect = document.getElementById("dataselect");
const bottomendtext = document.getElementById("bottomendtext");
async function submitSkills() {
    request.open('GET', 'skillData.json', true)
    request.onload = function () {
      var data = JSON.parse(this.response)
      for (var i = 0; i < data.length; i++) {
        if(data[i].name == "Emergency Extraction") {
            hiddeninfo.innerHTML = data[i].id;
        }
      }
    }
    request.send()
}
async function submit() {
dataselect.replaceChildren();
dataselect.append(divider);
dataselect.append(document.createElement('br'));
document.getElementById('Hiddeninfo').value = document.getElementById("dropdown").value;
try {
  divdata.replaceChildren();
} catch (e) {
}
secdropdown();
}
async function endText() {
  bottomendtext.append(divider);
  bottomendtext.appendChild(br)
  bottomendtext.append(owner);
  bottomendtext.appendChild(br1);
  bottomendtext.append(data);
  bottomendtext.appendChild(dataurl);
  bottomendtext.appendChild(br2);
  bottomendtext.append(game);
  bottomendtext.appendChild(gameurl);
  bottomendtext.append(document.createElement('br'))
  bottomendtext.append("Download the data this website uses yourself:");
  bottomendtext.append(document.createElement("br"));
  bottomendtext.append("- ");
  bottomendtext.append(skillData);
  bottomendtext.append(document.createElement("br"));
  bottomendtext.append("- ");
  bottomendtext.append(classData);
}
async function secdropdown(){
  var type = document.getElementById('Hiddeninfo').value;
  if (type == "Skills") var typesep = "Skill ";
  if (type == "Classes") var typesep = "Class ";
  startText.textContent=`Select ${typesep}`
  document.getElementById('Hiddeninfo').setAttribute('value',type);
  document.getElementById('Hiddeninfo').textContent = type;
  x();
  dataselect.appendChild(startText);
  dataselect.appendChild(datadown);
  dataselect.appendChild(datasubmit);
  dataselect.appendChild(document.createElement('br'));
  //dataselect.appendChild()
}
async function startup() {
  select.replaceChildren();
    bottomendtext.replaceChildren();
    select.appendChild(startText);
    select.appendChild(startDrop);
    select.append(" ");
    select.appendChild(startSubmit);
    endText();
}
async function fetchdata() {
  divdata.replaceChildren();
  divdata.append(divider);
  divdata.append(document.createElement('br'));
  var fetchrequest = document.getElementById('datadown').value;
  var br123 = document.createElement('br')
  var br1234 = document.createElement('br')
  br123.setAttribute('id','br123')
  br1234.setAttribute('id','1234')
  if(document.getElementById('dropdown').value == "Classes"){
    divdata.append(dp1,document.createElement('br'),dp2,document.createElement('br'),dp3,document.createElement('br'),dp4,document.createElement('br'),dp5,document.createElement('br'),dp6,document.createElement('br'),dp7,document.createElement('br'),dp8,document.createElement('br'),dp9,document.createElement('br'),dp10,document.createElement('br'),dp11)
  } else {
    divdata.append(dp1,document.createElement('br'),dp2,document.createElement('br'),dp3,document.createElement('br'),dp4,document.createElement('br'),dp5,document.createElement('br'),dp6,br1234,dp7,br123,dp8,document.createElement('br'),dp9)
  }
  if (document.getElementById('Hiddeninfo').value == "Skills"){
    var request = new XMLHttpRequest();
    request.open("GET", "skillData.json", true);
    request.onload = function(){
      var fetcheddata = JSON.parse(this.response);
      for (var i = 0; i < fetcheddata.length; i++){
        if(fetcheddata[i].name == fetchrequest) {
         dp1.textContent = `Skill Name: ${fetchrequest}`;
         dp2.textContent = `Skill Description: ${fetcheddata[i].description}`;
         dp3.textContent = `Time Used: ${fetcheddata[i].type}`;
         checkusage = fetcheddata[i].type;
         if (checkusage != "Day" && checkusage !="Night") {
          dp3.textContent = `Usage: Passively`;
         }
         dp4.textContent = `Targets: ${fetcheddata[i].targets}`;
         time = (fetcheddata[i].Cooldown_in_days);
         if (time == "1") {
          time = fetcheddata[i].type;
         } else if(fetcheddata[i].type == "Passive") {
          uh = "None";
         } else {
          time = fetcheddata[i].type + "s";
         }
         dp5.textContent = `Cooldown: ${fetcheddata[i].Cooldown_in_days} ${time}`;
         if(uh == "none" || time == "0") dp5.textContent = `Cooldown: ${uh}`
         dp6.textContent = `Visits Target: ${fetcheddata[i].Visits_target}`
         dp7.textContent = `Occupies Target: ${fetcheddata[i].Occupies_target}`
         dp8.textContent = `Maximum_uses: ${fetcheddata[i].Maximum_uses}`
         dp9.textContent = `RNG Based: ${fetcheddata[i].RNG_based_success}`
         if (fetcheddata[i].Visits_target == "No" && fetcheddata[i].Occupies_target == "No"){
          divdata.removeChild(dp6)
          divdata.removeChild(dp7)
          divdata.removeChild(br123)
          divdata.removeChild(br1234);
         }
         console.log(`${fetcheddata[i].name} (skill) was fetched.`);
        }
      }
    }
    request.send();
  } else {
    var request = new XMLHttpRequest();
    request.open("GET", "classData.json", true);
    request.onload = function(){
      var fetcheddata = JSON.parse(this.response);
      for (var i = 0; i < fetcheddata.length; i++){
        if(fetcheddata[i].name == fetchrequest) {
          dp1.textContent = `Class Name: ${fetcheddata[i].name}`
          dp2.textContent = `Class Type: ${fetcheddata[i].type}`
          dp3.textContent = `Unique: ${fetcheddata[i].unique}`
          dp4.textContent = `Guaranteed: ${fetcheddata[i].guaranteed}`
          dp5.textContent = `Class Description: ${fetcheddata[i].description}`
          dp6.textContent = `Faction: ${fetcheddata[i].faction}`
          dp7.textContent = `Win Condition: ${fetcheddata[i].wincon}`
          dp8.textContent = `Day Skills: ${fetcheddata[i].day_skills}`
          dp9.textContent = `Night Skills: ${fetcheddata[i].night_skills}`
          dp10.textContent = `Passive Skills: ${fetcheddata[i].passiveskills}`
          dp11.textContent = `Capture Chance: ${fetcheddata[i].capture_chance}`
          console.log(fetcheddata[i].capture_chance);
          if (fetcheddata[i].passiveskills == undefined)  dp10.textContent = `Passive Skills: none`
          if (fetcheddata[i].capture_chance == undefined) dp11.textContent = `Capture Chance: not able to hack`
          console.log(`${fetcheddata[i].name} (class) was fetched.`);
        }
      }
    }
    request.send();
  }
}
startup();