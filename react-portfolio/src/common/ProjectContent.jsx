import React from 'react';

function ProjectContent({ title, period, detail, link }) {
    return (
        <>
        <h3>{title}</h3>
        <p>{period}<br />{detail}</p>
        <a href={link} target='_blank'>project here</a>
        </>
    );
}

export default ProjectContent;