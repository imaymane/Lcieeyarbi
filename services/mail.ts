import emailjs from "@emailjs/browser";

export const sendContactEmail = async (formData: any) => {
    try {
        await emailjs.send(
            "service_u7mlf7s",
            "template_4yafx1r",
            formData,
            "nJKHimyHiv3Knokwn"
        );
        return { success: true, message: "Email sent successfully!" };
    } catch (error: any) {
        return { success: false, message: error.text || "Fail to send email" };
    }
};

export const sendApplicationEmail = async (formData: any) => {
    try {
        await emailjs.send(
            "service_u7mlf7s",
            "template_i7qrod8",
            formData,
            "nJKHimyHiv3Knokwn"
        );
        return { success: true, message: "Email sent successfully!" };
    } catch (error: any) {
        return { success: false, message: error.text || "Failed to send email" };
    }
};