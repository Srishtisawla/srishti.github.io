// function idChecker(value) {
//     var request = new XMLHttpRequest();
//     var p = {unique_reference : value}
//     request.open("POST", "https://95r15erld0.execute-api.ap-south-1.amazonaws.com/dev/checker");
//     request.send(JSON.stringify(p));
//     request.onreadystatechange = function() {
//         if(this.readyState === 4 && this.status === 200) {
        
//             pop = this.responseText;
//             if(pop == '"false"') {
//                 appear(errorVerify);
//             }
//             else{
//                 fix = pop;
//                 fix = new Date(fix.replace( /(\d{1,2})\/(\d{1,2})\/(\d{4})/, "$2/$1/$3"));
//                 uniq_ref[2].readOnly = true;
//                 formAppear(fix);
//                 vanish(verifyButton);
//                 vanish(errorVerify);
//             }
//         } 
//     };

//     request.withCredentials = false;


//     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//     request.send();
// }
//"sx800001CL7262"//

// message = ["Please enter the Policy Number","Please enter a valid Vehicle Registration Number","Please select the Date of Accident of vehicle","","Please enter the Garage Name","Please enter the Garage Address","Please enter the City Name","Please enter a valid name","Please enter a valid 10-digit mobile number","","","","","Please upload the mandatory document","Please upload the mandatory document","Please upload the mandatory document","Please upload the mandatory document","",""];

// allInputs = document.getElementsByTagName('input');

// for(let i=0;i<allInputs.length;i++){
//     allInputs[i].addEventListener("input", function (event) {
//     if(allInputs[i].value=="") allInputs[i].setCustomValidity(message[i]);
//     else allInputs[i].setCustomValidity('');
//     })
// }   