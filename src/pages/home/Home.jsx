import "./Home.css"

function Home() {
    return (
        <main className="home">

            <section className="hero">
                <h1>이용훈</h1>
                <p className="hero-role">Web Developer</p>

                <p className="hero-description">
                    Spring Boot와 React를 활용하여 웹 서비스를 개발하며,
                    요구사항 변화에 유연하게 대응할 수 있는 구조와
                    유지보수성을 고려한 개발을 지향합니다.
                </p>
            </section>

            <section className="featured-project">
                <h2>Featured Project</h2>

                <h3>On-Sil</h3>

                <p>원격 스터디 플랫폼</p>
            </section>

            <section className="tech-stack">
                <h2>Tech Stack</h2>
            </section>

            <section className="links">
                <h2>Links</h2>
            </section>

        </main>
    );
}

export default Home;