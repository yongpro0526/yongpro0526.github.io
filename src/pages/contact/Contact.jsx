import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import "./Contact.css";

const contacts = [
    {
        title: "Email",
        value: "yongpro0526@gmail.com",
        href: "mailto:yongpro0526@gmail.com",
        icon: <MdEmail />,
        external: false,
    },
    {
        title: "GitHub",
        value: "github.com/yongpro0526",
        href: "https://github.com/yongpro0526",
        icon: <FaGithub />,
        external: true,
    },
];

function Contact() {
    return (
        <section className="contact">
            <h1>Contact</h1>

            <div className="contact-list">
                {contacts.map((contact) => (
                    <section
                        className="contact-item"
                        key={contact.title}
                    >
                        <h2>{contact.title}</h2>

                        <a
                            href={contact.href}
                            target={contact.external ? "_blank" : undefined}
                            rel={contact.external ? "noopener noreferrer" : undefined}
                        >
                            <span className="contact-icon">
                                {contact.icon}
                            </span>

                            <span className="contact-value">
                                {contact.value}
                            </span>
                        </a>
                    </section>
                ))}
            </div>
        </section>
    );
}

export default Contact;