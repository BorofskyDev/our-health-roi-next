# Our Health ROI

**Our Health ROI** is an open-source Next.js application built by a concerned citizen to highlight the importance of NIH-funded medical research. Users can easily search medical conditions and generate custom messages to advocate directly to lawmakers, showing the real-world impact of public health funding.

---


## Features

- **Instant Condition Search**: Find NIH-funded projects, patents, publications, and clinical trials for specific medical conditions. 
- **Direct Advocacy Tools**: Generate personalized, data-driven messages to Congress
- ***Real-Time Data***: Leveraging NIH APIs to provide current funding and research details.
- ***User Privacy First***: No personal user data collection or storage.
- ***Accessibility Focus***: Built with inclusive design principles for all users.



## Tech Stack 

| Area               | Technologies Used                                      |
|--------------------|--------------------------------------------------------|
| **Framework**      | [Next.js](https://nextjs.org/) (App Router, React 19)  |
| **Styling**        | SCSS (structured with BEM-inspired and utility classes)|
| **Component Lib**  | [Headless UI](https://headlessui.com/)                 |
| **Animations**     | [Framer Motion](https://www.framer.com/motion/)        |
| **Email Integration**| [Nodemailer](https://nodemailer.com/)                |
| **Deployment**     | [Vercel](https://vercel.com/)                          |

---

## Project Structure
plaintext app ├── api (#) API route handlers ├── about, faq, ... (#) Page routes components ├── common (#) Reusable buttons, headers, links, inputs ├── containers (#) Major layout and data-driven containers ├── layout (#) Global layout components (Header, Footer) ├── modals (#) Modal dialogs and popups ├── icons (#) SVG Icons and animated graphics context (#) React Context providers lib ├── fetchers (#) Data-fetching functions for NIH APIs ├── hooks (#) Custom React hooks └── utils (#) Utilities for email/message formatting styles (#) SCSS architecture (BEM + Utility) ├── abstracts (#) Variables & mixins ├── base (#) Reset and global styles ├── components (#) Component-specific styles └── utilities (#) Utility classes (spacing, typography) ()
