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
    from: email,
    to: process.env.EMAIL,
    subject: `Message From ${email}`,
    text: subject + " | Sent from: " + email,
    html: `<div>${subject}</div><p>Sent from:${email}</p>
    <div>${message}<id/>`,
  };

 
  try {
    const emailSent = await transporter.sendMail(mailData);
    if (emailSent) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export async function POST(req, res) {
  const data  =await req.json()
  const emailSend = await sendEmail(
    data.message,
    data.email,
    data.subject
  );
  if (emailSend) {
    return NextResponse.json(
      { success: true, message: "Envoyé avec succès" },
      { status: 200, statusText: "success" }
    );
  } else
    return NextResponse.json(
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
