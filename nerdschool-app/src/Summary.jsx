import React from 'react'
import PropTypes from "prop-types"
import "./summary.css";

/*Summary component here */

const Summary =(todosCount, completedTodoCount)=>(
    <div className="summary_container">
        <p className="summary_text">
        {`${completedTodoCount}/${todosCount} tasks completed`}
        </p>
    </div>
      );

//add prop type validation to our props:
Summary.propTypes = {
    todosCount: PropTypes.number.isRequired,
    completedTodoCount: PropTypes.number.isRequired
};

  /* export component here */
export default Summary;
