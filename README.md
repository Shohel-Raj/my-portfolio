# 💼 Mohammed Shohel RaJ - Developer Portfolio

Welcome to the source code for my personal **developer portfolio website** — built with modern frontend technologies to showcase my projects, skills, and contact information.

---
## 🙋‍♂️ About Me

I'm a passionate **MERN Stack Developer** who loves building user-focused applications with clean design and powerful functionality.

### 👨‍💻 Tech Skills:
- MongoDB, Express.js, React.js, Node.js (MERN Stack)
- Tailwind CSS, DaisyUI
- Framer Motion, React Router, EmailJS
- Git, GitHub, Figma

### 🧠 What I Enjoy:
- Crafting beautiful and performant UIs
- Solving real-world problems with code
- Learning new technologies and tools

### 🌐 Connect With Me:
- Portfolio: [mohammed-sohel-dev.netlify.app](https://mohammed-sohel-dev.netlify.app/)
- GitHub: [Shohel Raj](https://github.com/Shohel-Raj)
- LinkedIn: [Mohammed Sohel](https://www.linkedin.com/in/mohammedshohel87)


## 🚀 Live Demo

🔗 [Visit Portfolio Website](https://mohammed-sohel-dev.netlify.app/)

---

## 🛠️ Tech Stack

- ⚛️ **React 19** – Frontend library
- 🎨 **Tailwind CSS** – Utility-first CSS framework
- 🌼 **DaisyUI** – Beautiful component library for Tailwind
- 🎞️ **Framer Motion** – Animations and transitions
- 🧭 **React Router v7** – Routing and navigation
- 📩 **EmailJS** – Contact form email integration
- 🏃‍♂️ **React Fast Marquee** – Scrolling marquee text
- 🔔 **React Hot Toast** – Elegant toast notifications
- 🎨 **React Icons** – Icon set

---
## 🔥 Features

- Modern responsive layout
- Animated hero and transitions using Framer Motion
- Project showcase with detail pages
- Smooth navigation and hash linking
- Contact form with toast notifications
- Marquee for skill scrolling
- Theme-ready design (optional dark mode ready)
- Deployed on Netlify

---

## 📸 Screenshots


![Homepage Screenshot](./src/assets/portfolio-site.gif)




---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio


### 📦 Install Dependencies

Make sure you have Node.js and npm installed.

```bash
npm install



---

### ▶️ **Run the Development Server**

```markdown
### ▶️ Run the Development Server

Start the development server:

```bash
npm run dev



---

### ✉️ **Contact Form Setup**

```markdown
### ✉️ Contact Form Setup

The contact form uses **EmailJS** to send emails directly from the frontend.

To configure it:

1. Go to [https://emailjs.com](https://emailjs.com) and sign up.
2. Create an email service and a template.
3. Copy your:
   - **Service ID**
   - **Template ID**
   - **Public Key** (User ID)

4. In your code, configure EmailJS like this:

```js
emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  form.current,
  'YOUR_PUBLIC_KEY'
)

