import Link from "next/link";
import styles from "./ProjectsList.module.scss";

function ProjectsList({list}) {
    if (!list) return;

    return <ul className={styles.projectsList}>
        {list.map(({title, desc, logoClass, link}, ind) => <li key={ind}>
            <Link href={link} className={styles.projectItem}>
                <main>
                    <div className={`${styles.logoProject} ${logoClass}`}></div>
                    <h2>{title}</h2>
                </main>
                <hr/>
                <p>{desc}</p>
            </Link>
        </li>)}
    </ul>;
};

export default ProjectsList;