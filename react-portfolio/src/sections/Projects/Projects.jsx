import styles from './ProjectsStyles.module.css';
import ProjectContent from '../../common/ProjectContent';

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectContainer}>
                <ProjectContent 
                title="SAMPLE1"
                period="2023/7~2023/10"
                detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas odio repudiandae voluptas, nihil omnis obcaecati porro, veritatis distinctio nemo reiciendis vitae pariatur? Hic sint ipsa ad illo labore eveniet mollitia, necessitatibus porro commodi deleniti blanditiis laborum ratione vitae omnis, numquam quam iste reiciendis unde accusantium? Saepe impedit voluptatibus fugit quos iure quaerat omnis esse fugiat est provident aperiam, ipsa natus veritatis doloremque molestiae eligendi sint, accusamus numquam quod optio. Delectus harum corrupti dolorem nihil libero atque. Exercitationem excepturi dicta deserunt maxime sequi omnis debitis dolores rerum architecto sunt. Mollitia totam eveniet at est similique aut modi eum et ad!"
                link="./"
                />
                <ProjectContent 
                title="SAMPLE2"
                period="2023/7~2023/10"
                detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas odio repudiandae voluptas, nihil omnis obcaecati porro, veritatis distinctio nemo reiciendis vitae pariatur? Hic sint ipsa ad illo labore eveniet mollitia, necessitatibus porro commodi deleniti blanditiis laborum ratione vitae omnis, numquam quam iste reiciendis unde accusantium? Saepe impedit voluptatibus fugit quos iure quaerat omnis esse fugiat est provident aperiam, ipsa natus veritatis doloremque molestiae eligendi sint, accusamus numquam quod optio. Delectus harum corrupti dolorem nihil libero atque. Exercitationem excepturi dicta deserunt maxime sequi omnis debitis dolores rerum architecto sunt. Mollitia totam eveniet at est similique aut modi eum et ad!"
                link="./"
                />
                <ProjectContent 
                title="SAMPLE3"
                period="2023/7~2023/10"
                detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas odio repudiandae voluptas, nihil omnis obcaecati porro, veritatis distinctio nemo reiciendis vitae pariatur? Hic sint ipsa ad illo labore eveniet mollitia, necessitatibus porro commodi deleniti blanditiis laborum ratione vitae omnis, numquam quam iste reiciendis unde accusantium? Saepe impedit voluptatibus fugit quos iure quaerat omnis esse fugiat est provident aperiam, ipsa natus veritatis doloremque molestiae eligendi sint, accusamus numquam quod optio. Delectus harum corrupti dolorem nihil libero atque. Exercitationem excepturi dicta deserunt maxime sequi omnis debitis dolores rerum architecto sunt. Mollitia totam eveniet at est similique aut modi eum et ad!"
                link="./"
                />
                <ProjectContent 
                title="SAMPLE4"
                period="2023/7~2023/10"
                detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quas odio repudiandae voluptas, nihil omnis obcaecati porro, veritatis distinctio nemo reiciendis vitae pariatur? Hic sint ipsa ad illo labore eveniet mollitia, necessitatibus porro commodi deleniti blanditiis laborum ratione vitae omnis, numquam quam iste reiciendis unde accusantium? Saepe impedit voluptatibus fugit quos iure quaerat omnis esse fugiat est provident aperiam, ipsa natus veritatis doloremque molestiae eligendi sint, accusamus numquam quod optio. Delectus harum corrupti dolorem nihil libero atque. Exercitationem excepturi dicta deserunt maxime sequi omnis debitis dolores rerum architecto sunt. Mollitia totam eveniet at est similique aut modi eum et ad!"
                link="./"
                />
            </div>
        </section>
    );
}

export default Projects;