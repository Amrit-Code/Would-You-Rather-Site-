
let optSelection = document.getElementById("optSelect");

getVals();

async function getVals(){ 
	var options = [];
	
	await db.collection("questions").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				if (!options.includes(doc.get("Type"))){
				options.push(doc.get("Type"));
			}
			});
		});
	options.forEach(addOptions);

}


function addOptions(value){
	var opt = document.createElement('option');
    opt.value = value;
    opt.innerHTML = value;
    optSelection.appendChild(opt);
	
}
