import React from 'react'

const SkillsItem = ({skill}) => {
    return (
        <div className="skill-item">
            <div className="inner-skill-wrap">
                <img src={'https://nath-port-strapi.herokuapp.com' + skill.image.url} alt="test"/>
                <span className="proficiency">{skill.skill_proficiency.name}</span>
                <h3>{skill.name}</h3>
            </div>
        </div>
    )
}

export default SkillsItem
