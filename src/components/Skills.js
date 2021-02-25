import SkillsList from './Skill-Components/SkillsList'

const Skills = ({skills_data}) => {
    return (
        <div className="sec-skills">
            <div className="inner-wrapper">
                <h2>Attained Skills</h2>
                <p>I've listed below the skills which I've gained throughout the course of my career. 
                    Proficiency of each skill is based on how frequent I've applied it through projects I've handled.</p>
                
                <SkillsList skill_items={skills_data}/>  
            </div>
        </div>
    )
}

export default Skills
