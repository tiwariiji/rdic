# Raksha Devi Inter College — Official Website

A **production-ready**, fully responsive school website built with React (Vite) + Tailwind CSS.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env
# → Fill in your EmailJS credentials (see Email Setup section below)

# 3. Run development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 📧 Email Setup (EmailJS)

This project uses **EmailJS** as a frontend-only email solution (no backend required).  
It mirrors how Nodemailer would work on a Node.js server.

### Step-by-step:

1. **Sign up** at [https://www.emailjs.com/](https://www.emailjs.com/) (free tier: 200 emails/month)

2. **Create an Email Service**  
   - Connect your Gmail account (rdic.edu@gmail.com)  
   - Copy the **Service ID**

3. **Create an Email Template**  
   Use these template variables:
   ```
   From:    {{from_name}} <{{from_email}}>
   Phone:   {{from_phone}}
   Message: {{message}}
   To:      {{to_email}}
   ```

4. **Copy your Public Key** from Account → General

5. **Fill in `.env`**:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
   VITE_RECEIVER_EMAIL=rdic.edu@gmail.com
   ```

---

## 📁 Project Structure

```
rdic-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx          # Full-screen page loader
│   │   ├── Navbar.jsx          # Sticky navbar + mobile menu
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── MarqueeBar.jsx      # Scrolling announcement ticker
│   │   ├── About.jsx           # About college + leadership
│   │   ├── StatsBar.jsx        # Animated counter stats
│   │   ├── Facilities.jsx      # Facility cards grid
│   │   ├── Gallery.jsx         # Photo gallery + lightbox
│   │   ├── Testimonials.jsx    # Parent testimonials carousel
│   │   ├── Admission.jsx       # Admission steps + benefits
│   │   ├── Contact.jsx         # Contact form + map
│   │   ├── Footer.jsx          # Full footer
│   │   └── ScrollToTop.jsx     # Floating scroll-to-top button
│   ├── utils/
│   │   ├── emailService.js     # EmailJS wrapper (Nodemailer-style)
│   │   └── useReveal.js        # Scroll-reveal custom hook
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind + custom CSS
├── index.html                  # SEO meta tags + Google Fonts
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── .env.example
└── package.json
```

---

## 🎨 Design System

| Token       | Value                        |
|-------------|------------------------------|
| Primary     | Navy `#0a0f2e`               |
| Accent      | Gold `#f59e0b`               |
| Font (Head) | Playfair Display (serif)     |
| Font (Body) | Plus Jakarta Sans (sans)     |
| Radius      | `rounded-2xl` / `rounded-3xl`|

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```
Set environment variables in Vercel Dashboard → Project → Settings → Environment Variables.

### Netlify
```bash
npm run build
# Drag-and-drop the `dist/` folder to Netlify
```

---

## 📌 College Info

| Field       | Details                                    |
|-------------|--------------------------------------------|
| Name        | Raksha Devi Inter College                  |
| Recognition | UP Board + NIOS Board                      |
| Classes     | Nursery to 12th                            |
| Location    | Lothinagar Khimsapur, Farrukhabad, UP      |
| Chairman    | Gaurav Rajput — 8191948793                 |
| Manager     | Shivkumar Singh (Advocate) — 9810403287   |
| Email       | rdic.edu@gmail.com                         |

---

© 2026 Raksha Devi Inter College. All rights reserved.
