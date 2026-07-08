import ProjectDetailLayout from "../../../components/ProjectDetailLayout/ProjectDetailLayout";

function OnSil() {
    const sections = {
        overview: (
            <>
                <p>
                    On-Sil은 혼자 공부할 때 발생하기 쉬운 중도 포기를 줄이고,
                    스터디원들이 서로의 참여를 확인하며 목표를 달성할 수 있도록 만든
                    원격 스터디 플랫폼입니다.
                </p>

                <dl>
                    <div>
                        <dt>개발 기간</dt>
                        <dd>2026.01 ~ 2026.02</dd>
                    </div>

                    <div>
                        <dt>팀 구성</dt>
                        <dd>6명</dd>
                    </div>

                    <div>
                        <dt>담당 역할</dt>
                        <dd>게시판, 일정, 마이페이지, 스터디원 관리</dd>
                    </div>

                    <div>
                        <dt>주요 기술</dt>
                        <dd>React, Spring Boot, MyBatis, MySQL, AWS</dd>
                    </div>
                </dl>
            </>
        ),
        "my-role": (
            <>
                <p>
                    프로젝트에서 게시판, 일정, 마이페이지, 스터디원 관리 기능을 담당하며
                    프론트엔드와 백엔드 개발을 함께 수행했습니다.
                    게시판과 일정 기능은 데이터베이스 테이블 설계부터 API, 화면 구현까지
                    전반적인 개발을 담당했으며, 이후 기존 구조를 활용해 마이페이지와
                    스터디원 관리 기능을 추가 구현했습니다.
                </p>

                <h3>핵심 담당 기능</h3>
                <ul>
                    <li>게시판(Board) 기능 설계 및 구현</li>
                    <li>일정(Calendar) 기능 설계 및 구현</li>
                    <li>마이페이지(My Page) 기능 구현</li>
                    <li>스터디원 관리 및 탈퇴 기능 구현</li>
                </ul>

                <h3>주요 개발 업무</h3>
                <ul>
                    <li>React 기반 화면 개발</li>
                    <li>Spring Boot REST API 설계 및 개발</li>
                    <li>MyBatis Mapper 및 SQL 작성</li>
                    <li>프론트엔드 · 백엔드 API 연동</li>
                    <li>권한 검증 로직 구현</li>
                    <li>데이터 구조 및 API 응답 구조 개선</li>
                    <li>AWS S3 파일 업로드 기능 구현</li>
                </ul>
            </>
        ),
        "tech-stack": (
            <div className="project-tech-list">
                <div className="project-tech-category">
                    <h3>Frontend</h3>

                    <div className="project-tech-item">
                        <strong>React</strong>
                        <p>
                            게시판, 일정, 마이페이지 등 사용자 화면을 구현하고
                            REST API를 연동하는 데 사용했습니다.
                        </p>
                    </div>
                </div>

                <div className="project-tech-category">
                    <h3>Backend</h3>

                    <div className="project-tech-item">
                        <strong>Spring Boot</strong>
                        <p>
                            게시판, 일정, 사용자 기능의 REST API와
                            비즈니스 로직을 구현했습니다.
                        </p>
                    </div>

                    <div className="project-tech-item">
                        <strong>MyBatis</strong>
                        <p>
                            게시판과 일정 기능을 중심으로 SQL을 작성하고
                            데이터 조회 및 CRUD 기능을 구현했습니다.
                        </p>
                    </div>
                </div>

                <div className="project-tech-category">
                    <h3>Database</h3>

                    <div className="project-tech-item">
                        <strong>MySQL</strong>
                        <p>
                            사용자, 스터디, 게시판, 일정 등
                            프로젝트의 주요 데이터를 저장하고 관리했습니다.
                        </p>
                    </div>
                </div>

                <div className="project-tech-category">
                    <h3>Infrastructure</h3>

                    <div className="project-tech-item">
                        <strong>AWS</strong>
                        <p>
                            프로젝트를 배포하고 S3를 활용한
                            첨부파일 업로드 기능을 구현했습니다.
                        </p>
                    </div>
                </div>

                <div className="project-tech-category">
                    <h3>Tools</h3>

                    <div className="project-tech-item">
                        <strong>Git / GitHub</strong>
                        <p>
                            브랜치 기반으로 버전을 관리하고
                            팀원들과 코드를 공유하며 협업했습니다.
                        </p>
                    </div>
                </div>
            </div>
        ),
        architecture: (
            <>
                <h3>전체 구조</h3>
                <p>
                    On-Sil은 React 프론트엔드와 Spring Boot 백엔드가 REST API로 통신하고,
                    MyBatis를 통해 MySQL 데이터베이스와 연동되는 구조로 구현했습니다.
                </p>

                <h3>권한 구조</h3>
                <p>
                    사용자의 상태를 Guest, User, Member, Host로 구분하고,
                    스터디룸 참여 여부와 방장 여부에 따라 접근 가능한 기능을 분리했습니다.
                </p>

                <h3>핵심 설계</h3>
                <p>
                    게시판은 게시글, 댓글, 첨부파일 테이블을 분리하여 관리했고,
                    일정 기능은 일반 일정과 스터디 일정을 분리하여 각각의 역할에 맞게 관리했습니다.
                </p>
            </>
        ),
        features: (
            <>
                <section>
                    <h3>Board</h3>

                    <p>
                        공지, 일반, 질문, 자료 게시판을 구분하여
                        스터디 운영에 필요한 게시판 기능을 구현했습니다.
                    </p>

                    <ul>
                        <li>공지글 상단 고정</li>
                        <li>댓글 및 대댓글</li>
                        <li>첨부파일 업로드</li>
                        <li>검색 및 페이지네이션</li>
                        <li>권한별 작성·수정·삭제</li>
                    </ul>
                </section>

                <section>
                    <h3>Calendar</h3>

                    <p>
                        일반 일정과 스터디 일정을 구분하여
                        스터디 운영에 필요한 일정을 관리할 수 있도록 구현했습니다.
                    </p>

                    <ul>
                        <li>일반 일정 / 스터디 일정 분리</li>
                        <li>6주 고정 달력</li>
                        <li>회차 및 시간 표시</li>
                        <li>방장 전용 일정 관리</li>
                    </ul>
                </section>

                <section>
                    <h3>My Page</h3>

                    <p>
                        스터디룸별 닉네임과 최근 활동을 확인하고
                        정보를 수정할 수 있도록 구현했습니다.
                    </p>

                    <ul>
                        <li>방별 닉네임 관리</li>
                        <li>최근 게시글 및 댓글 조회</li>
                        <li>프로필 정보 확인</li>
                    </ul>
                </section>

                <section>
                    <h3>Members</h3>

                    <p>
                        방장이 스터디원을 관리하고,
                        멤버가 스터디를 탈퇴할 수 있도록 구현했습니다.
                    </p>

                    <ul>
                        <li>스터디원 조회</li>
                        <li>방장 위임</li>
                        <li>강퇴 기능</li>
                        <li>스터디 탈퇴</li>
                    </ul>
                </section>
            </>
        ),
        troubleshooting: (
            <>
                <section>
                    <h3>일반 일정과 스터디 일정 구조 분리</h3>

                    <h4>문제</h4>
                    <p></p>

                    <h4>분석</h4>
                    <p></p>

                    <h4>해결</h4>
                    <p></p>

                    <h4>결과</h4>
                    <p></p>
                </section>

                <section>
                    <h3>게시판 권한 검증 로직 개선</h3>

                    <h4>Problem</h4>
                    <p></p>

                    <h4>Cause</h4>
                    <p></p>

                    <h4>Solution</h4>
                    <p></p>

                    <h4>Result</h4>
                    <p></p>
                </section>

                <section>
                    <h3>게시글 고정 처리 개선</h3>

                    <h4>Problem</h4>
                    <p></p>

                    <h4>Cause</h4>
                    <p></p>

                    <h4>Solution</h4>
                    <p></p>

                    <h4>Result</h4>
                    <p></p>
                </section>
            </>
        ),
        retrospective: (
            <>
                <p>
                    On-Sil 프로젝트를 통해 단순히 기능을 구현하는 것에서 끝나는 것이 아니라,
                    요구사항 변화에 대응할 수 있는 구조를 설계하고 유지보수성을 고려하는 개발의
                    중요성을 배웠습니다.
                </p>

                <p>
                    특히 게시판과 일정 기능을 직접 설계하고 구현하면서 데이터 구조와 API 설계가
                    이후 기능 확장과 협업에 큰 영향을 준다는 점을 체감했습니다.
                </p>

                <p>
                    앞으로도 새로운 기술을 꾸준히 학습하며, 기능 구현뿐 아니라 설계와
                    유지보수성까지 고려하는 개발자로 성장하고 싶습니다.
                </p>
            </>
        ),
    };

    return <ProjectDetailLayout title="On-Sil" sections={sections} />
}

export default OnSil;