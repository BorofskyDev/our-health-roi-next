// app/api/site-contact/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  subject: z.string().min(3).max(120),
  message: z.string().min(10).max(5_000),
  category: z.enum([
    'MEDIA',
    'ACCESSIBILITY',
    'TECHNICAL',
    'GENERAL',
    'DEVELOPER',
    'VOLUNTEER',
  ]),
})

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log('Received data:', data)

    const validatedData = ContactSchema.parse(data)
    console.log('Validated data:', validatedData)

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error('Missing SMTP environment variables')
      throw new Error('Server configuration error')
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    console.log('Testing SMTP connection...')
    await transporter.verify()
    console.log('SMTP connection successful')

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'no-reply@example.com',
      to: 'joelborofskydev@gmail.com',
      subject: `[${validatedData.category}] ${validatedData.subject}`,
      text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing request:', error)

    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors)
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
