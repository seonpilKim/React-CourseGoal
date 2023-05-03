import React, {useRef, useState} from 'react';

import './App.css';
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";


/**
 * React's re-rendering 조건
 *
 * 1. props changed
 * 2. state changed
 * 3. parent component rendered
 * 4. forceUpdate() called
 */

const App = () => {

    const id = useRef(1);
    const [courseGoals, setCourseGoals] = useState([
        {text: 'Do all exercises!', id: 'g1'},
        {text: 'Finish the course!', id: 'g2'}
    ]);

    return (
        <div>
            <section id="goal-form">
                <CourseInput id={id} courseGoals={courseGoals} setCourseGoals={setCourseGoals}/>
            </section>
            <section id="goals">
                <CourseGoalList courseGoals={courseGoals} setCourseGoals={setCourseGoals}/>
            </section>
        </div>
    );
};

export default App;
