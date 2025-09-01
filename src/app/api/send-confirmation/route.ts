import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: Request) {
    try {
        const { email, name } = await req.json();

        // Set up transporter with Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });
        //working now
        // Send email
        await transporter.sendMail({
            from: `"Mansa to Mansa" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "Welcome to Mansa-to-Mansa! 🌍",
            html: `
    <p>Dear ${name},</p>

    <p>Welcome to <strong>Mansa-to-Mansa</strong>! We're excited to have you join our community.</p>

    <p>As a member, you'll have access to:</p>
    <ul>
      <li>Networking opportunities with professionals across Africa</li>
      <li>Collaborative project opportunities</li>
      <li>Knowledge sharing and learning resources</li>
    </ul>

    <p>We'll be in touch soon with more information about upcoming events and opportunities.</p>

    <p>Best regards,<br>
    The Mansa to Mansa Team<br>
    <a href="mailto:mansatomansa@gmail.com">mansatomansa@gmail.com</a></p>
  `,
        });


        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
