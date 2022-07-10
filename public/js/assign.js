
var options = [];
var amounts = [];

let optSelection = document.getElementById("optSelect");

getVals();

async function getVals(){ 
	
	var Head = await db.collection("questions").doc("Head");
	
		await Head.get().then((doc) => {
		if (doc.exists) {
			options = doc.get("Types");
			amounts = doc.get("Amounts");
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
		}).catch((error) => {
			console.log("Error getting document:", error);
		});
//	await db.collection("questions").get().then((querySnapshot) => {
//			querySnapshot.forEach((doc) => {
//				if (!options.includes(doc.get("Type"))){
//				options.push(doc.get("Type"));
//			}
//			});
//		});
	options.forEach(addOptions);

}


function addOptions(value){
	var opt = document.createElement('option');
    opt.value = value;
    opt.innerHTML = value;
    optSelection.appendChild(opt);
	
}
