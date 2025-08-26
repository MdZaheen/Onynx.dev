import { NextRequest, NextResponse } from 'next/server';

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

    // Here you can integrate with your preferred email service:
    
    // Option 1: Using Nodemailer (install: npm install nodemailer @types/nodemailer)
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL || 'contact@onyxdev.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    */

    // Option 2: Using Resend (install: npm install resend)
    /*
    import { Resend } from 'resend';
    
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'contact@onyxdev.com',
      to: [process.env.CONTACT_EMAIL || 'contact@onyxdev.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    // Option 3: Using EmailJS (client-side, no backend needed)
    // See integration example in the component

    // For now, just log the data (replace with your actual email service)
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Option 4: Save to database (if you have one)
    /*
    // Example with MongoDB/Mongoose
    const Contact = require('@/models/Contact');
    const newContact = new Contact({
      name,
      email,
      message,
      submittedAt: new Date(),
    });
    await newContact.save();
    */

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
