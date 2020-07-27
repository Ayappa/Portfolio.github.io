import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const [email, setEmail] = useState("");
	const [body, setBody] = useState("");

	const sendMail = async (e) => {
		e.preventDefault();
		if (body.length === 0) {
			alert("enter something to send !!!");
		} else {
			console.log(email);
			await axios
				.post(
					"http://localhost:5000/api/db/mailer",
					{
						from: email,
						body: body,
					},
					{
						headers: {
							"Access-Control-Allow-Origin": "*",
						},
					}
				)
				.then((res) => {
					console.log(res);
					toast("Mail Sent !");
					setEmail("");
					setBody("");
					//const timer = setTimeout(() => {}, 2000);
				})
				.catch((err) => console.log(err));
		}
	};
	return (
		<div className='container' style={{ marginTop: "2%" }}>
			<ToastContainer />
			{/* <Review /> */}
			<div className='container'>
				<h2 style={{ marginBottom: "2%" }}>Drop me a mail</h2>
				<form className='container'>
					<div class='form-group' className='container'>
						<label for='exampleFormControlInput1'>Your Email address</label>
						<input
							type='email'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='name@example.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div
						class='form-group'
						className='container'
						style={{
							marginTop: "2%",
						}}
					>
						<label for='exampleFormControlTextarea1'>
							Have something to tell
						</label>
						<textarea
							class='form-control'
							id='exampleFormControlTextarea1'
							rows='2'
							value={body}
							onChange={(e) => setBody(e.target.value)}
						></textarea>
					</div>
					<div style={{ textAlign: "center", marginTop: "2%" }}>
						<button
							onClick={(e) => sendMail(e)}
							className='btn btn-dark btn-sm my-1'
						>
							send mail
						</button>
					</div>
					<div
						className='container'
						style={{
							textAlign: "center",
							marginTop: "3%",
						}}
					>
						<img
							src={require("../assets/portfolio.svg")}
							style={{ width: "10%", margin: "2%" }}
							alt=""
							onClick={() =>
								window.open(
									"https://drive.google.com/file/d/1wG1c_ayXwT2-DSNUdEoEPQJ9A97zvVMe/view?usp=sharing",
									"_blank"
								)
							}
						/>
						<p>Get a Copy of my Resume</p>
					</div>
					<div
						className='container'
						style={{
							textAlign: "center",
						}}
					>
						<img
							src={require("../assets/linkedin.svg")}
							style={{ width: "5%", marginRight: "2%" }}
							alt=""
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/ayappa-k-502747128/",
									"_blank"
								)
							}
						/>
						<img
							src={require("../assets/facebook.svg")}
							alt=""
							style={{ width: "5%", marginLeft: "2%" }}
							onClick={() => window.open("https://www.facebook.com/", "_blank")}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
