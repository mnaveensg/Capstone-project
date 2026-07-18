import React, { useState } from 'react';

function CourseToggle() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleDescription = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="section-card">
      <h2>React Fundamentals Course</h2>
      <button onClick={toggleDescription} style={{ padding: '8px 16px' }}>
        {isVisible ? 'Hide Description' : 'Show Description'}
      </button>
      {isVisible && (
        <p style={{ marginTop: '10px', color: '#333' }}>
          This course covers React fundamentals including components, JSX, and props.
        </p>
      )}
    </div>
  );
}

export default CourseToggle;
