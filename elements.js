//Start Element Creation
    //startText
const startText = document.createElement('text');
startText.style ='text';
startText.id='startText';
startText.textContent="Select Type: "
    //secText
const secText = document.createElement('text');
startText.style = 'text';
startText.id="secText";
    //datadown
const datadown = document.createElement('select');
datadown.style = 'select';
datadown.id='datadown';
datadown.setAttribute('class','opt2')
    //datasubmit
const datasubmit = document.createElement('button');
datasubmit.id="datasubmit";
datasubmit.setAttribute('class','opt');
datasubmit.textContent = "Search";
datasubmit.setAttribute("onclick","fetchdata();")
    //secdropown
const secdropown = document.createElement('select');
    //startDrop
const startDrop = document.createElement('select');
startDrop.id = 'dropdown'
startDrop.setAttribute('class','opt2')
    //startSubmit
const startSubmit = document.createElement('button');
startSubmit.id = "Submit"
startSubmit.setAttribute('class','opt')
startSubmit.textContent = "Submit"
startSubmit.setAttribute('onclick',"submit();")
    //brs
const br = document.createElement('br');
const br1 = document.createElement('br');
const br2 = document.createElement('br');
    //dataurl
const dataurl = document.createElement('a');
dataurl.href = "https://www.playuntrusted.com/public-api/"
dataurl.textContent = "https://www.playuntrusted.com/public-api/"
    //gameurl
const gameurl = document.createElement('a');
gameurl.href = "https://www.playuntrusted.com"
gameurl.textContent = "https://www.playuntrusted.com"
    //dp1
const dp1 = document.createElement("text");
dp1.setAttribute('id','dp1')
    //dp2
    const dp2 = document.createElement("text");
    dp2.setAttribute('id','dp2')
    //dp3
    const dp3 = document.createElement("text");
    dp3.setAttribute('id','dp3')
    //dp4
    const dp4 = document.createElement("text");
    dp4.setAttribute('id','dp4')
    //dp5
    const dp5 = document.createElement("text");
    dp5.setAttribute('id','dp5')
    //dp6
    const dp6 = document.createElement("text");
    dp6.setAttribute('id','dp6')
    //dp7
    const dp7 = document.createElement("text");
    dp7.setAttribute('id','dp7')
    //dp8
    const dp8 = document.createElement("text");
    dp8.setAttribute('id','dp8')
    //dp9
    const dp9 = document.createElement("text");
    dp9.setAttribute('id','dp9')
    //dp10
    const dp10 = document.createElement("text");
    dp10.setAttribute('id','dp10')
    //dp11
    const dp11 = document.createElement("text");
    dp11.setAttribute('id','dp11')
//End Creating Elements
//Start Adding Options/Values
    //startDrop
    dropdownopt = ["Skills", "Classes"]
    for (const val of dropdownopt)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        startDrop.appendChild(option);
    }   
    skills = []
    classes = []
    var request = new XMLHttpRequest()
    async function x () { 
        datadown.replaceChildren();
    if (document.getElementById("Hiddeninfo").value == "Skills"){
    request.open('GET', 'skillData.json', true)
    request.onload = function () {
      var data = JSON.parse(this.response)
      for (var i = 0; i < data.length; i++) {
        skills.push(data[i].name)
      }
      for (const val2 of skills) 
      {
        var option = document.createElement("option");
        option.value = val2; 
        option.text = val2;
        datadown.appendChild(option);
    }
    }
    request.send()
} else if (document.getElementById("Hiddeninfo").value == "Classes"){
    request.open('GET', 'classData.json', true)
    request.onload = function () {
      var classdata = JSON.parse(this.response)
      for (var i = 0; i < classdata.length; i++) {
        classes.push(classdata[i].name)
      }
      for (const val3 of classes) {
        var option = document.createElement("option");
        option.value = val3; 
        option.text = val3;
        datadown.appendChild(option);
    }
    }
    request.send()
}
}