import { Link } from "react-router-dom";

const projects = [
    {
        title: "On-Sil",
        description: "원격 스터디 플랫폼",
        path: "/projects/on-sil",
    },
    {
        title: "Java Bean",
        description: "카페 애플리케이션",
        path: "/projects/java-bean",
    },
    {
        title: "ChaJava",
        description: "자동차 리뷰 사이트",
        path: "/projects/chajava",
    },
];

function Projects() {
    return (
        <main>
            <section>
                <h1>Projects</h1>
                <p>진행한 웹 개발 프로젝트를 정리했습니다.</p>
                <div className="project-grid">
                    <div className="project-card">
                        {projects.map((project) => (
                            <article
                                className="project-card"
                                key={project.path}
                            >
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <Link to={project.path}>자세히 보기</Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Projects;