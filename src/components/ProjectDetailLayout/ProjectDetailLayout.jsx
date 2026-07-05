const projectSections = [
    { id: "overview", title: "Overview" },
    { id: "my-role", title: "My Role" },
    { id: "tech-stack", title: "Tech Stack" },
    { id: "architecture", title: "Architecture" },
    { id: "features", title: "Features" },
    { id: "troubleshooting", title: "Troubleshooting" },
    { id: "retrospective", title: "Retrospective" },
];

function ProjectDetailLayout({ title }) {
    return (
        <main>
            <h1>{title}</h1>

            {projectSections.map((section) => (
                <section id={section.id} key={section.id}>
                    <h2>{section.title}</h2>
                </section>
        ))}
        </main>
    );
}

export default ProjectDetailLayout;