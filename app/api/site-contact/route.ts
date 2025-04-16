// app/api/site-contact/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

interface SiteContactData {
  name: string
  email: string
  subject: string
  message: string
  category:
    | 'MEDIA'
    | 'ACCESSIBILITY'
    | 'TECHNICAL'
    | 'GENERAL'
    | 'DEVELOPER'
    | 'VOLUNTEER'
}

export async function POST(request: NextRequest) {
  try {
    const data: SiteContactData = await request.json()

    // (Optional) Validate your data here

    // Create a nodemailer transporter configured via environment variables.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_FROM || 'no-reply@example.com',
      to: 'contact@ourhealthroi.com',
      subject: data.subject,
      text: `Name: ${data.name}\nEmail: ${data.email}\nCategory: ${data.category}\n\nMessage:\n${data.message}`,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending site contact email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
