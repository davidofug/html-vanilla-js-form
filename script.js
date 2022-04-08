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
		document.querySelector(".container").style.display = "none";
		// document.querySelector(".container").remove();
		let data = await results.json();
		messages.message.value = "";
		messages.name.value = "";
		console.log(data);
	} catch (err) {
		console.log(err);
	}

	MyResponse()

	console.log(`Full name ${sender} Message ${message}`);
	// alert(`Full name ${sender} \r\nMessage ${message}`);
};

function MyResponse() {

	const wrapper = document.createElement("section");
	wrapper.classList.add("thank-you-wrapper");

	const theBody = document.createElement("div");
	theBody.classList.add("thank-you-body");

	theBody.innerHTML = `
		<h1>Hi ${messages?.name?.value.split(' ')[0]}! <br/>Thank you for your message.</h1>
		<p>We will get back to you as soon as possible.</p>
	`;

	wrapper.appendChild(theBody);
	document.body.appendChild(wrapper);
}