# EmailJS Setup Guide for Contact Form

## Overview
Your contact form is now configured to send emails directly to `aditya18.work.office@gmail.com` using EmailJS service.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended for Gmail addresses)
4. Connect your Gmail account (`aditya18.work.office@gmail.com`)
5. Note down your **Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Body:**
```
Hello Aditya,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_abc456`)

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_xyz789`)

### 5. Update JavaScript Configuration
In your `script.js` file, replace these placeholders:

```javascript
// Line 104: Replace with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");

// Line 131: Replace with your service and template IDs
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Example:**
```javascript
emailjs.init("user_xyz789");
emailjs.send('service_gmail123', 'template_contact456', templateParams)
```

### 6. Test the Form
1. Open your portfolio website
2. Fill out the contact form
3. Submit the form
4. Check your email (`aditya18.work.office@gmail.com`) for the message

## Features Implemented

✅ **Email Address Updated** - Changed to `aditya18.work.office@gmail.com`
✅ **Functional Contact Form** - Sends emails directly from the website
✅ **Loading States** - Shows sending progress to users
✅ **Success/Error Messages** - User feedback for form submission
✅ **Form Validation** - Required fields and email format validation
✅ **Responsive Design** - Works on all devices
✅ **Professional Styling** - Matches your portfolio design

## Troubleshooting

**Form not sending emails?**
- Check that all IDs are correctly replaced in script.js
- Verify your EmailJS service is connected to the correct Gmail account
- Check browser console for error messages

**Emails going to spam?**
- This is normal for new EmailJS accounts
- Check your spam folder
- EmailJS reputation improves over time

**Need help?**
- EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Free tier allows 200 emails per month

## Security Note
Your EmailJS public key is safe to use in client-side code. It only allows sending emails through your configured templates and services.
