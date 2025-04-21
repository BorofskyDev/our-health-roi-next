# 📌 Our Health ROI

**Our Health ROI** is an open-source Next.js application built by a concerned citizen to highlight the importance of NIH-funded medical research. Users can easily search medical conditions and generate custom messages to advocate directly to lawmakers, showing the real-world impact of public health funding.

---

## 🚀 Features

- **Instant Condition Search**: Find NIH-funded projects, patents, publications, and clinical trials for specific medical conditions.
- **Direct Advocacy Tools**: Generate personalized, data-driven messages to Congress.
- **Real-Time Data**: Leveraging NIH APIs to provide current funding and research details.
- **User Privacy First**: No personal user data collection or storage.
- **Accessibility Focus**: Built with inclusive design principles for all users.

---

## 🛠️ Tech Stack

| Area | Technologies Used |
|-------------------|--------------------------------------------------------|
| **Framework** | Next.js (App Router, React 19) |
| **Styling** | SCSS (transitioning to BEM - class names are unstructured)|
| **Component Lib** | Headless UI |
| **Animations** | Framer Motion |
| **Data Validation**| Zod |
| **Email Integration**| Nodemailer |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```
app
├── api              # API route handlers
├── about, faq, ...  # Page routes
components
├── common           # Reusable buttons, headers, links, inputs
├── containers       # Major layout and data-driven containers
├── layout           # Global layout components (Header, Footer)
├── modals           # Modal dialogs and popups
├── icons            # SVG Icons and animated graphics
context              # React Context providers
lib
├── fetchers         # Data-fetching functions for NIH APIs
├── hooks            # Custom React hooks
└── utils            # Utilities for email/message formatting
styles               # SCSS architecture (BEM + Utility)
├── abstracts        # Variables & mixins
├── base             # Reset and global styles
├── components       # Component-specific styles
└── utilities        # Utility classes (spacing, typography)
```

---

## 🖥️ Installation and Local Development

**Prerequisites:** Node.js (20+ recommended), npm/yarn/pnpm

1. Clone this repository:
```bash
git clone https://github.com/BorofskyDev/our-health-roi-next.git
```

2. Navigate to project directory:
```bash
cd our-health-roi-next
```

3. Install dependencies:
```bash
npm install # or yarn install # or pnpm install
```

4. Configure environment variables:
Create .env.local in root, and add:
```env
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
```

5. Start the development server:
```bash
npm run dev # or yarn dev # or pnpm dev
```

6. Open your browser to:
```
http://localhost:3000
```

---

## 📡 API Integration

- **NIH RePORTER API**: Fetches current data on NIH-funded medical research.
- **Nodemailer (SMTP)**: Sends user-generated advocacy emails directly.

---

## 🧩 Utilities & Helper Functions

Key utility functions found in /lib/utils include:

- buildResearchLines.ts: Formats research data for display.
- messageTemplates.ts: Prepares templated emails and scripts.
- sendSiteContactEmail.ts: Handles email sending logic through Nodemailer.

---

## 🎨 Styling & UI

This project leverages SCSS with clearly defined mixins, variables, and utility classes:

- **Abstracts**: SCSS mixins (flex, grid, accessibility) and variables (colors, typography, spacing).
- **Components**: Modularized component-specific styles (buttons, headers, modals).
- **Utilities**: Spacing, typography, layout helper classes.

---

## 🤝 Contributing

Contributions from developers passionate about public health advocacy are warmly welcome!

- Fork this repository
- Create your feature branch (git checkout -b feature/new-feature)
- Commit your changes (git commit -m 'Add some feature')
- Push to the branch (git push origin feature/new-feature)
- Open a Pull Request

Or, simply reach out via the site's contact page.

---

## 📖 FAQs

**What inspired this site?**
A social media comment sparked me—a passionate NIH supporter—to build this tool so people can understand its importance.

**Is there a cost to use Our Health ROI?**
No, it's entirely free, even though maintaining the site does cost me personally.

**Who should use Our Health ROI?**
Every American who relies—or might someday rely—on medical technology.

More FAQs are available on the FAQ page.

---

## 📜 License

Distributed under the MIT License. See LICENSE for more information.

---

## 📬 Contact & Support

- **Website**: ourhealthroi.com
- **GitHub Issues**: Submit issues or bugs
- **Direct Contact**: Contact Form

---

## 🌟 Deployment

Deployed with ❤️ on Vercel:

- Next.js deployment docs

---

## 🧑‍💻 Developer Notes

- **Linting & Formatting**: ESLint, TypeScript enforced.
- **Accessibility**: Focus on semantic HTML, keyboard navigation, and ARIA roles.
- **Open Graph Integration**: Dynamic images via Vercel OG for rich social sharing.

---

## 💖 Support this Project

This project is independent—no ads, no sponsors.
If you'd like to help with hosting costs, support via PayPal.
