import { FaJava, FaGitAlt, FaGithub } from "react-icons/fa"
import { FaAws } from "react-icons/fa6"
import { SiSpringboot, SiReact, SiJavascript, SiHtml5, SiCss, SiMysql, SiIntellijidea } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

const techStacks = [
    {
        category: "Backend",
        skills: [
            { name: "Java", icon: <FaJava />},
            { name: "Spring Boot", icon: <SiSpringboot />},
            { name: "MyBatis" },
            { name: "JPA" },
        ],
    },
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: <SiReact /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "HTML5", icon: <SiHtml5 /> },
            { name: "CSS3", icon: <SiCss /> },
        ],
    },
    {
        category: "Database",
        skills: [
            { name: "MySQL", icon: <SiMysql /> },
        ],
    },
    {
        category: "DevOps",
        skills: [
            { name: "AWS", icon: <FaAws /> },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
            { name: "VS Code", icon: <VscVscode /> },
        ]
    }
];

function TechStack() {
    return (
        <main>
            <h1>Tech Stack</h1>

            {techStacks.map((group) => (
                <section className="tech-category" key={group.category}>
                    <h2>{group.category}</h2>

                    {group.skills.map((skill) => (
                        <div className="tech-item" key={skill.name}>
                            <span className="tech-icon">{skill.icon && skill.icon}</span>
                            <span className="tech-name">{skill.name}</span>
                        </div>
                    ))}
                </section>
            ))}
        </main>
    );
}

export default TechStack;