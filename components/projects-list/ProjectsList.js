import styles from "./ProjectsList.module.scss";

function ProjectsList({list}) {
    if (!list) return;

    return <ul className={styles.projectsList}>
        {list.map(({title, desc, timeDate}, ind) => <li key={ind}>{title}</li>)}
    </ul>;
};

export default ProjectsList;