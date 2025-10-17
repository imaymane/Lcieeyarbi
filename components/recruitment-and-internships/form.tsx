import React, { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import { sendApplicationEmail } from "../../services/mail";

const Form = () => {
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [requestType, setRequestType] = useState("recrutement");
	const [cvFile, setCvFile] = useState<File | null>(null);
	const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
	const [message, setMessage] = useState<{
		text: string;
		type: "success" | "error";
	} | null>(null);

	// Function to convert file to Base64 string
	const fileToBase64 = (file: File) =>
		new Promise<string>((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result as string);
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		let cvBase64 = null;
		let coverLetterBase64 = null;

		// Convert files to base64 if they are provided
		if (cvFile) cvBase64 = await fileToBase64(cvFile);
		if (coverLetterFile)
			coverLetterBase64 = await fileToBase64(coverLetterFile);

		const formData = {
			fullName,
			phone,
			email,
			requestType,
			message: "Please find attached CV and Cover Letter",
			cvFile: cvBase64, // Base64 data for CV
			coverLetterFile: coverLetterBase64, // Base64 data for Cover Letter
		};

		const response = await sendApplicationEmail(formData);

		if (response.success) {
			setMessage({ text: response.message, type: "success" });
			setFullName("");
			setPhone("");
			setEmail("");
			setRequestType("recrutement");
			setCvFile(null);
			setCoverLetterFile(null);
		} else {
			setMessage({ text: response.message, type: "error" });
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col w-full items-center justify-center space-y-4"
		>
			<div className="flex flex-row justify-center w-full space-x-6">
				<div className="flex flex-col w-[50%]">
					<div className="text-xl font-semibold px-4 py-1">
						Nom complet <b className="text-red-600 font-normal">*</b>
					</div>
					<Input
						placeholder="Nom complet"
						value={fullName}
						onChange={e => setFullName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col w-[50%]">
					<div className="text-xl font-semibold px-4 py-1">
						Téléphone <b className="text-red-600 font-normal">*</b>
					</div>
					<Input
						placeholder="Téléphone"
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</div>
			</div>

			<div className="flex flex-row justify-center w-full space-x-6">
				<div className="flex flex-col w-[50%]">
					<div className="text-xl font-semibold px-4 py-1">
						Email <b className="text-red-600 font-normal">*</b>
					</div>
					<Input
						placeholder="Adresse mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="flex flex-col w-[50%]">
					<div className="text-xl font-semibold px-4 py-1">Type de demande</div>
					<select
						value={requestType}
						onChange={e => setRequestType(e.target.value)}
						className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
					>
						<option value="recrutement">Demande d'emploi</option>
						<option value="stage">Demande de stage</option>
					</select>
				</div>
			</div>

			<div className="flex flex-row justify-center w-full space-x-6">
				<div className="flex flex-col w-[50%]">
					<div className="text-xl font-semibold px-4 py-1">
						Déposer votre CV <b className="text-red-600 font-normal">*</b>
					</div>
					<input
						type="file"
						onChange={e => setCvFile(e.target.files?.[0] || null)}
						required
						className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 w-full"
					/>
				</div>
				<div className="flex flex-col w-[50%]">
					<div className="text-xl font-semibold px-4 py-1">
						Déposer votre lettre de motivation
					</div>
					<input
						type="file"
						onChange={e => setCoverLetterFile(e.target.files?.[0] || null)}
						className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 w-full"
					/>
				</div>
			</div>

			<Button
				type="submit"
				label="Envoyer votre candidature"
				className="px-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all"
			/>

			{message && (
				<p
					className={`text-center p-2 rounded-lg ${
						message.type === "success"
							? "bg-green-100 text-green-700"
							: "bg-red-100 text-red-700"
					}`}
				>
					{message.text}
				</p>
			)}
		</form>
	);
};

export default Form;
