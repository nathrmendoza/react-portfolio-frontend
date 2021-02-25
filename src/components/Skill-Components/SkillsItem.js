import React from 'react'

const SkillsItem = ({skill}) => {
    return (
        <div className="skill-item">
            <div className="inner-skill-wrap">
                <img src={'http://localhost:1337' + skill.image.url} alt="test"/>
                <span className="proficiency">{skill.skill_proficiency.name}</span>
                <h3>{skill.name}</h3>
            </div>
        </div>
    )
}

export default SkillsItem
