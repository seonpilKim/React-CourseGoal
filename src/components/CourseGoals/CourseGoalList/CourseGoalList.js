import './CourseGoalList.css';
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = (props) => {

    const {courseGoals, setCourseGoals} = props;
    const deleteGoal = (id) => {
        setCourseGoals(courseGoals.filter(goal => goal.id !== id));
    }

    return (
        <ul className="goal-list">
            {courseGoals.map(goal => <CourseGoalItem key={goal.id} deleteGoal={deleteGoal} goal={goal}/>)}
        </ul>
    );
};

export default CourseGoalList;
