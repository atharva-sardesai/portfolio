import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
      throw new Error("Missing Resend API key")
    }

    console.log('Attempting to send email with:', {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['atharvapsardesai@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
    })

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['atharvapsardesai@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Resend API Error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    console.log('Email sent successfully:', data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Detailed error:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    return NextResponse.json(
      { error: 'Failed to send email. Please check server logs.' },
      { status: 500 }
    )
  }
} 