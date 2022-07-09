
let questionLabel = document.getElementById("questionLabel");


async function myFunction() {
	if(document.getElementById("optSelect").value === "All"){
		var opts = [];
		await db.collection("questions").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				opts.push(doc.get("question"));
			});
		});
		console.log(opts[Math.floor(Math.random()*opts.length)]);
		
		questionLabel.innerHTML = opts[Math.floor(Math.random()*opts.length)];
		
	}else{
	
	  	var opts = [];
		await db.collection("questions").where("Type", "==", document.getElementById("optSelect").value).get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				opts.push(doc.get("question"));
			});
		});
		console.log(opts[Math.floor(Math.random()*opts.length)]);
		
		questionLabel.innerHTML = opts[Math.floor(Math.random()*opts.length)];
	
	}

}

