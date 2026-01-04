import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // In production, you would send this to your email service
    // For now, we'll log it and return success
    
    // Example integrations you could add:
    // 1. Nodemailer to send email
    // 2. SendGrid/Mailgun/Resend API
    // 3. Slack webhook notification
    // 4. CRM integration (HubSpot, etc.)
    
    const contactData = {
      name,
      email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
      source: 'website_contact_form',
    };

    // Log for development (remove in production)
    console.log('New contact form submission:', contactData);

    // If CONTACT_EMAIL is configured, you could send an email here
    // const contactEmail = process.env.CONTACT_EMAIL;
    
    // If SLACK_WEBHOOK_URL is configured, send to Slack
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `New contact form submission from ${name} (${email})`,
            blocks: [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone || 'Not provided'}\n*Company:* ${company || 'Not provided'}\n*Message:* ${message}`,
                },
              },
            ],
          }),
        });
      } catch (slackError) {
        console.error('Failed to send Slack notification:', slackError);
        // Don't fail the request if Slack fails
      }
    }

    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

