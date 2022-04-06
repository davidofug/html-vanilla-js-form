const submitBtn = document.getElementById("submit");
const sendMessage = async (event) => {
	event.preventDefault();
	let sender = messages.name.value;
	let message = messages.message.value;

	try {
		let results = await fetch("/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				sender: sender,
				message: message,
			}),
		});

		let data = await results.json();
		messages.message.value = "";
		messages.name.value = "";
		console.log(data);

	} catch (err) {
		console.log(err);
	}

    console.log(`Full name ${sender} Message ${message}`);
    alert(`Full name ${sender} \r\nMessage ${message}`);
};
