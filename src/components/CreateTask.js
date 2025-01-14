import React from 'react';
import styles from '../styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  enterTaskTitleActionCreator,
  enterRewardActionCreator,
  addTaskActionCreator,
} from '../actions/actions';
import { useNavigate } from 'react-router-dom';

export default function CreateTask() {
  const dispatch = useDispatch();
  const taskState = useSelector((state) => state.task);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      taskname: taskState.taskname,
      rewards: taskState.rewards,
      completed: taskState.completed,
    };
    dispatch(addTaskActionCreator(task));
    navigate('/dashboard');
  };

  return (
    <div className="createTaskStyling">
      <h2 className="formTitle">Create New Task</h2>
      <form className="taskForm" onSubmit={handleSubmit}>
        <div className="taskAndRewardInputDiv">
          <label className="taskCreaterForm" id="taskCreaterForm">
            <input
              placeholder="Next on the list..."
              onChange={(e) =>
                dispatch(enterTaskTitleActionCreator(e.target.value))
              }
              type="text"
              id="enterTask"
            />
          </label>
          <label className="enterReward" id="enterReward">
            <input
              placeholder="Reward"
              onChange={(e) =>
                dispatch(enterRewardActionCreator(e.target.value))
              }
              type="text"
              id="enterReward"
            />
          </label>
        </div>
        <button id="submitTaskButton">
          <div>Add Task</div>
        </button>
      </form>
    </div>
  );
}

/*
    <div>
      <h1>My To Do List</h1>
      <input type="text" id="my input" placeholder='Next on the list...'></input>
      <button onClick='newElement()' className='addButton'>Add</button>
      </div>
*/
