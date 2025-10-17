import React, { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import { sendContactEmail } from "../../services/mail";

const ContactForm = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [responseMessage, setResponseMessage] = useState<{
		text: string;
		type: "success" | "error";
	} | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const formData = {
			fullName,
			email,
			subject,
			message,
		};

		const response = await sendContactEmail(formData);

		if (response.success) {
			setResponseMessage({ text: response.message, type: "success" });
			setFullName("");
			setEmail("");
			setSubject("");
			setMessage("");
		} else {
			setResponseMessage({ text: response.message, type: "error" });
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col w-full items-center justify-center space-y-4 bg-white shadow-lg rounded-lg p-6"
		>
			<h2 className="text-2xl font-bold text-gray-700">Nous contacter</h2>

			<div className="flex flex-row justify-center w-full space-x-6">
				<div className="flex flex-col w-[50%]">
					<div className="text-xl font-semibold px-4 py-1">
						Votre nom <b className="text-red-600 font-normal">*</b>
					</div>
					<Input
						placeholder="Nom"
						value={fullName}
						onChange={e => setFullName(e.target.value)}
						required
					/>
				</div>
				<div className="flex flex-col w-[50%]">
					<div className="text-xl font-semibold px-4 py-1">
						Votre adresse mail <b className="text-red-600 font-normal">*</b>
					</div>
					<Input
						placeholder="Adresse mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
			</div>

			<div className="flex flex-col w-full">
				<div className="text-xl font-semibold px-4 py-1">
					Sujet <b className="text-red-600 font-normal">*</b>
				</div>
				<Input
					placeholder="Faites-nous savoir comment nous pouvons vous aider"
					value={subject}
					onChange={e => setSubject(e.target.value)}
					required
				/>
			</div>

			<div className="flex flex-col w-full">
				<div className="text-xl font-semibold px-4 py-1">
					Votre message <b className="text-red-600 font-normal">*</b>
				</div>
				<textarea
					className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 w-full h-28"
					placeholder="Saisissez votre message ici"
					value={message}
					onChange={e => setMessage(e.target.value)}
					required
				/>
			</div>

			<Button type="submit" label="Envoyer le message" className="px-8" />

			{responseMessage && (
				<p
					className={`text-center p-2 rounded-lg ${
						responseMessage.type === "success"
							? "bg-green-100 text-green-700"
							: "bg-red-100 text-red-700"
					}`}
				>
					{responseMessage.text}
				</p>
			)}
		</form>
	);
};

export default ContactForm;
