import React from 'react';
import { CourseRecommender } from '../components/LMSComponents';
import CourseToggle from '../components/CourseToggle';

function Courses() {
  return (
    <div>
      <CourseRecommender />
      <CourseToggle />
    </div>
  );
}

export default Courses;
