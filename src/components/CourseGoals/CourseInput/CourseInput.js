import './CourseInput.css';
import Button from "../../UI/Button/Button";
import {useCallback, useRef, useState} from "react";

const CourseInput = (props) => {

    const {id, courseGoals, setCourseGoals} = props;
    const inputRef = useRef(null);
    const [flag, setFlag] = useState(false);

    const insertGoal = (event, text) => {
        event.preventDefault();
        if (text === '') {
            setFlag(true);
        } else {
            setCourseGoals([{text: text, id: id.current++}].concat(courseGoals));
        }
    };

    const check = useCallback((event) => {
        if (event.target.value !== '') {
            setFlag(false);
        }
    }, []);

    return (
        <form>
            <div className='form-control'>
                <label className={flag ? 'error' : 'correct'}>Course Goal</label>
                <input className={flag ? 'error' : 'correct'}
                       ref={inputRef}
                       type="text"
                       onChange={event => check(event)}/>
            </div>
            <Button type="submit"
                    insertGoal={(event) => insertGoal(event, inputRef.current.value)}>
                Add Goal
            </Button>
        </form>
    );
};

export default CourseInput;
