function ProjectsList({list}) {
    if (!list) return;

    return <ul>
        {list.map(({title, desc, timeDate}, ind) => <li key={ind}>{title}</li>)}
    </ul>;
};

export default ProjectsList;