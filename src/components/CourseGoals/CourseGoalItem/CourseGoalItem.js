import './CourseGoalItem.css';

const CourseGoalItem = (props) => {

    const {deleteGoal, goal} = props;

    return (
        <li className="goal-item" onClick={() => deleteGoal(goal.id)}>
            {goal.text}
        </li>
    );
};

export default CourseGoalItem;
