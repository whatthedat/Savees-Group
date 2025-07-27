# EmailJS Integration Guide

This guide will help you set up EmailJS for the contact form in your Savees Group website.

## Prerequisites
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Verify your email address

## Setup Instructions

### 1. Create an Email Service
1. Log in to your EmailJS account
2. Go to "Email Services" in the sidebar
3. Click "Add New Service"
4. Choose your preferred email service provider (Gmail, Outlook, etc.)
5. Follow the prompts to connect your email account
6. Note down the **Service ID** (you'll need this later)

### 2. Create an Email Template
1. Go to "Email Templates" in the sidebar
2. Click "Create New Template"
3. Name your template (e.g., "Contact Form")
4. In the template editor, you can use these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone number
   - `{{company}}` - Sender's company
   - `{{service}}` - Selected service from the form
   - `{{message}}` - The message content
   - `{{date}}` - Date of submission
5. Design your email template as needed
6. Note down the **Template ID** (you'll need this later)

### 3. Get Your Public Key
1. Go to "Account" in the sidebar
2. Under "API Keys", find your **Public Key**

### 4. Configure Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. Save the file

### 5. Test the Contact Form
1. Start your development server if it's not already running
2. Fill out the contact form and submit it
3. Check your email to see if you received the test message

## Troubleshooting

### Emails not being sent
- Verify all environment variables are correctly set in your `.env` file
- Check the browser console for any error messages
- Make sure your email service is properly connected in EmailJS
- Verify that your email template uses the correct variable names

### File Attachments
- The contact form supports file attachments (PDF, DOC, DOCX)
- Attachments up to 5MB are supported
- Make sure your EmailJS service plan allows file attachments

## Security Notes
- Never commit your `.env` file to version control
- The public key is safe to expose in client-side code
- For production, make sure to set up proper CORS and rate limiting on your server

## Support
If you encounter any issues, please refer to the [EmailJS documentation](https://www.emailjs.com/docs/) or contact their support team.
