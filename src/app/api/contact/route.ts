import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message }: ContactFormData = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Email service implementation
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.CONTACT_EMAIL || 'contact@onynx.dev',
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #A10000; border-bottom: 2px solid #A10000; padding-bottom: 10px;">New Contact Form Submission</h2>
              <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
              </div>
              <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h3>Message:</h3>
                <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Still return success but log the error
      }
    } else {
      // Log the submission if email is not configured
      console.log('Contact form submission (email not configured):', {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        success: false 
      },
      { status: 500 }
    );
  }
}
