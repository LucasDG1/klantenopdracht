// import { GOOGLE_EMAIL } from "$env/static/private";
// import transporter from "$lib/emailSetup.server.js";

// export const POST = async ({ request }) => {
//     try {
//         const formData = await request.formData();
//         const name = formData.get("name");
//         const email = formData.get("email");
//         const subject = formData.get("tel");
//         const body = formData.get("message");

//         let html = `<h2>Hi!</h2><pre>${body}</pre>`;

//         const message = {
//             from: GOOGLE_EMAIL,
//             to: email,
//             bcc: "hendrickhogendijk@gmail.com",
//             subject: subject,
//             text: body,
//             html: html,
//         };

//         await transporter.sendMail(message);

//         return {
//             status: 200,
//             body: "Email is sent",
//         };
//     } catch (error) {
//         console.error(error);
//         return {
//             status: 500,
//             body: "Failed to send email",
//         };
//     }
// };


import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";

export const actions = {
    default: async ({ request }) => {


        const formData = await request.formData()
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("tel");
        const body = formData.get("message");
        let html = `<h2>Je hebt een nieuwe mail ontangen!</h2><pre>${body}</pre>`;
        const message = {
            from: GOOGLE_EMAIL,
            to: email,
            bcc: "hendrickhogendijk@gmail.com",
            subject: subject,
            text: body,
            html: html,
        };


        console.log(await transporter.sendMail(message))
    

        return {
            success: "Email is sent",
        };
    }
}
  