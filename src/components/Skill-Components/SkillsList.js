import SkillsItem from './SkillsItem';

const SkillsList = ({skill_items}) => {
    return (
        <div className="skills-list">
            {
                skill_items.map(item => {
                    return <SkillsItem skill={item} key={item.id}/>
                })
            }
        </div>
    )
}

export default SkillsList
