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
		let data = await results.json();
		messages.message.value = "";
		messages.name.value = "";
		console.log(data);
	} catch (err) {
		console.log(err);
	}
	thankYou()
	console.log(`Full name ${sender} Message ${message}`);
	// alert(`Full name ${sender} \r\nMessage ${message}`);
};

function thankYou() {
	const thankyou = document.createElement("div");
	thankyou.classList.add("thank-you");
	const thankYouHeading = document.createElement(
		"h1"
	);
	thankYouHeading.innerText = "Thank you for your submission!"
	const thankYouBody = document.createElement(
		"p"
	);
	thankYouBody.innerText = "We will be in touch with you shortly."
	thankyou.appendChild(thankYouHeading);
	thankyou.appendChild(thankYouBody);

	document.body.appendChild(thankyou);
}