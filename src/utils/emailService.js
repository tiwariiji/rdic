import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const TEMPLATE_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER || ''
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
const RECEIVER_EMAIL = import.meta.env.VITE_RECEIVER_EMAIL || 'rdic.edu@gmail.com'

function assertConfig() {
  const missing = []

  if (!SERVICE_ID) missing.push('VITE_EMAILJS_SERVICE_ID')
  if (!TEMPLATE_ADMIN) missing.push('VITE_EMAILJS_TEMPLATE_ID')
  if (!PUBLIC_KEY) missing.push('VITE_EMAILJS_PUBLIC_KEY')

  if (missing.length) {
    throw new Error(`Missing EmailJS configuration: ${missing.join(', ')}`)
  }
}

function buildTemplateParams(values) {
  return {
    from_name: values.fromName,
    from_email: values.fromEmail,
    from_phone: values.fromPhone,
    message: values.message,
    to_email: values.toEmail,
    to_name: values.toName,
    reply_to: values.replyTo,

    // Common aliases to support differently named EmailJS templates.
    name: values.fromName,
    email: values.fromEmail,
    phone: values.fromPhone,
    sender_name: values.fromName,
    sender_email: values.fromEmail,
    sender_phone: values.fromPhone,
    user_name: values.fromName,
    user_email: values.fromEmail,
    recipient_email: values.toEmail,
    recipient_name: values.toName,
  }
}

export async function sendEnquiry(formData) {
  assertConfig()

  const cleaned = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    message: formData.message.trim(),
  }

  const adminParams = buildTemplateParams({
    fromName: cleaned.name,
    fromEmail: cleaned.email,
    fromPhone: cleaned.phone,
    message: cleaned.message,
    toEmail: RECEIVER_EMAIL,
    toName: 'RDIC Admin',
    replyTo: cleaned.email,
  })

  await emailjs.send(SERVICE_ID, TEMPLATE_ADMIN, adminParams, PUBLIC_KEY)

  if (!TEMPLATE_USER) return

  const userParams = buildTemplateParams({
    fromName: cleaned.name,
    fromEmail: cleaned.email,
    fromPhone: cleaned.phone,
    message: cleaned.message,
    toEmail: cleaned.email,
    toName: cleaned.name,
    replyTo: RECEIVER_EMAIL,
  })

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_USER, userParams, PUBLIC_KEY)
  } catch (error) {
    console.warn('Confirmation email failed, but admin notification was sent.', error)
  }
}
