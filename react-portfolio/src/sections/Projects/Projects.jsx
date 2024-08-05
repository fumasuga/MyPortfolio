import styles from './ProjectsStyles.module.css';
import ProjectContent from '../../common/ProjectContent';

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectContainer}>
                <ProjectContent 
                title="○○業向け××システム開発支援"
                period="2023/07~2023/10"
                detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas odio repudiandae voluptas, nihil omnis obcaecati porro, veritatis distinctio nemo reiciendis vitae pariatur? Hic sint ipsa ad illo labore eveniet mollitia, necessitatibus porro commodi deleniti blanditiis laborum ratione vitae omnis, numquam quam iste reiciendis unde accusantium? Saepe impedit voluptatibus fugit quos iure quaerat omnis esse fugiat est provident aperiam, ipsa natus veritatis doloremque molestiae eligendi sint, accusamus numquam quod optio. Delectus harum corrupti dolorem nihil libero atque. Exercitationem excepturi dicta deserunt maxime sequi omnis debitis dolores rerum architecto sunt. Mollitia totam eveniet at est similique aut modi eum et ad!"
                />
                <ProjectContent 
                title="○○業向け××システム開発支援"
                period="2023/10~2024/04"
                detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas odio repudiandae voluptas, nihil omnis obcaecati porro, veritatis distinctio nemo reiciendis vitae pariatur? Hic sint ipsa ad illo labore eveniet mollitia, necessitatibus porro commodi deleniti blanditiis laborum ratione vitae omnis, numquam quam iste reiciendis unde accusantium? Saepe impedit voluptatibus fugit quos iure quaerat omnis esse fugiat est provident aperiam, ipsa natus veritatis doloremque molestiae eligendi sint, accusamus numquam quod optio. Delectus harum corrupti dolorem nihil libero atque. Exercitationem excepturi dicta deserunt maxime sequi omnis debitis dolores rerum architecto sunt. Mollitia totam eveniet at est similique aut modi eum et ad!"
                />
                <ProjectContent 
                title="○○業向け××システム開発支援"
                period="2024/05~2024/6"
                detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas odio repudiandae voluptas, nihil omnis obcaecati porro, veritatis distinctio nemo reiciendis vitae pariatur? Hic sint ipsa ad illo labore eveniet mollitia, necessitatibus porro commodi deleniti blanditiis laborum ratione vitae omnis, numquam quam iste reiciendis unde accusantium? Saepe impedit voluptatibus fugit quos iure quaerat omnis esse fugiat est provident aperiam, ipsa natus veritatis doloremque molestiae eligendi sint, accusamus numquam quod optio. Delectus harum corrupti dolorem nihil libero atque. Exercitationem excepturi dicta deserunt maxime sequi omnis debitis dolores rerum architecto sunt. Mollitia totam eveniet at est similique aut modi eum et ad!"
                />
                <ProjectContent 
                title="○○業向け××システム開発支援"
                period="2024/07~"
                detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas odio repudiandae voluptas, nihil omnis obcaecati porro, veritatis distinctio nemo reiciendis vitae pariatur? Hic sint ipsa ad illo labore eveniet mollitia, necessitatibus porro commodi deleniti blanditiis laborum ratione vitae omnis, numquam quam iste reiciendis unde accusantium? Saepe impedit voluptatibus fugit quos iure quaerat omnis esse fugiat est provident aperiam, ipsa natus veritatis doloremque molestiae eligendi sint, accusamus numquam quod optio. Delectus harum corrupti dolorem nihil libero atque. Exercitationem excepturi dicta deserunt maxime sequi omnis debitis dolores rerum architecto sunt. Mollitia totam eveniet at est similique aut modi eum et ad!"
                />
            </div>
        </section>
    );
}

export default Projects;