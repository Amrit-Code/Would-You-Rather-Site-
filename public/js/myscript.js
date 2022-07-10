
let questionLabel = document.getElementById("questionLabel");


async function myFunction() {
	if(document.getElementById("optSelect").value === "All"){
		
		var pos = Math.floor((Math.random()*(options.length-1))+1);
		var type = options[pos];
		var amt = amounts[pos];
		
		var nextQuestion = "";
		
		let question = Math.floor(Math.random()*amt);
		
		let padding = 3-(question.toString().length);
		var fileName = pos.toString() + ("0".repeat(padding)) + question.toString();
		
		var ques = await db.collection("questions").doc(fileName);
	
		await ques.get().then((doc) => {
		if (doc.exists) {
			nextQuestion = doc.get("question");
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
		}).catch((error) => {
			console.log("Error getting document:", error);
		});
		
//		await db.collection("questions").doc(fileName).get().then((querySnapshot) => {
//			querySnapshot.forEach((doc) => {
//				nextQuestion = (doc.get("question"));
//			});
//		});
//		console.log(opts[Math.floor(Math.random()*opts.length)]);
//		
		questionLabel.innerHTML = nextQuestion;
		
	}else{
	
		var type = document.getElementById("optSelect").value;
	  	var pos = options.indexOf(type);
		var amt = amounts[pos];
		
		
		var nextQuestion = "";
		
		let question = Math.floor(Math.random()*amt);
		
		let padding = 3-(question.toString().length);
		var fileName = pos.toString() + ("0".repeat(padding)) + question.toString();

		
		var ques = await db.collection("questions").doc(fileName);
	
		await ques.get().then((doc) => {
		if (doc.exists) {
			nextQuestion = doc.get("question");
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
		}).catch((error) => {
			console.log("Error getting document:", error);
		});
		
		questionLabel.innerHTML = nextQuestion;
	
	}

}

