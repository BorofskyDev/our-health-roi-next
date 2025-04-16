
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

    // Debug environment variables
    console.log('SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? 'Present' : 'Missing',
      pass: process.env.SMTP_PASS ? 'Present' : 'Missing',
      from: process.env.SMTP_FROM,
    })

    // Create a nodemailer transporter configured via environment variables.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_FROM || 'no-reply@example.com',
      to: 'joelborofskydev@gmail.com',
      subject: data.subject,
      text: `Name: ${data.name}\nEmail: ${data.email}\nCategory: ${data.category}\n\nMessage:\n${data.message}`,
    }
    // Test connection before sending
    try {
      await transporter.verify()
      console.log('SMTP connection verified')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        {
          error: 'SMTP connection failed',
          details:
            verifyError instanceof Error
              ? verifyError.message
              : String(verifyError),
        },
        { status: 500 }
      )
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
