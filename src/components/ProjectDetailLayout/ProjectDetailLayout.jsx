import "./ProjectDetailLayout.css";

const projectSections = [
    {
        id: "overview",
        title: "Overview",
        subtitle: "프로젝트 개요",
    },
    {
        id: "my-role",
        title: "My Role",
        subtitle: "담당 역할",
    },
    {
        id: "tech-stack",
        title: "Tech Stack",
        subtitle: "기술 스택",
    },
    {
        id: "architecture",
        title: "Architecture",
        subtitle: "구조 설계",
    },
    {
        id: "features",
        title: "Features",
        subtitle: "주요 기능",
    },
    {
        id: "troubleshooting",
        title: "Troubleshooting",
        subtitle: "트러블슈팅",
    },
    {
        id: "retrospective",
        title: "Retrospective",
        subtitle: "회고",
    },
];

function ProjectDetailLayout({ title, sections }) {
    return (
        <main className="project-detail">
            <h1>{title}</h1>

            {projectSections.map((section) => (
                <section className="project-section" id={section.id} key={section.id}>
                    <header className="project-section-header">
                        <h2>{section.title}</h2>
                        <p>{section.subtitle}</p>
                    </header>
                    {sections?.[section.id]}
                </section>
            ))}
        </main>
    );
}

export default ProjectDetailLayout;