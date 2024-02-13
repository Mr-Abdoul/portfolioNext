// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const sendEmail = async (message, email, subject) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message From ${message}`,
    text: subject + " | Sent from: " + email,
    html: `<div>${subject}</div><p>Sent from:
    ${email}</p>`,
  };

  try {
    const emailSent = await transporter.sendMail(mailData);
    console.log(emailSent);
    if (emailSent) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export async function POST(req, res) {
  // console.log( {
  //   user: process.env.EMAIL,
  //   pass: process.env.EMAIL_PASS,
  // });
  const emailSend = await sendEmail(
    req.body.message,
    req.body.email,
    req.body.subject
  );
  if (emailSend) {
    return res.json(
      { success: true, message: "Envoyé avec succès" },
      { status: 200, statusText: "success" }
    );
  } else
    return res.json(
      { success: false, message: "Server Error" },
      { status: 500, statusText: "an error occured" }
    );
}

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const body = await req.json();
//   // console.log(body);
//   const {email, subject, message} = body;
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: ['abdourahamaneabdoulaye36@gmail.com', email],
//       subject: subject,
//       react:(
//         <>
//         <h1>{subject}</h1>
//         <p>Thank you for contacting us!</p>
//         <p>New message submitted:</p>
//         <p>{message}</p>
//         </>
//       ),

//     });

//     return NextResponse.json(data);
//   } catch (error) {

//     return NextResponse.json({ error });
//   }
// }
// sendEmail('good gob', 'abdoul@gmail.com', 'Hello');
