import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item, delTask, putTask }) => {
  const itemStyle = {
    backgroundColor: item.isComplete ? 'lightgray' : 'white', // 완료된 항목은 회색 배경
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    textDecoration: item.isComplete ? 'line-through' : 'none' // 완료 시 취소선 추가 가능
  };

  return (
    <Row>
      <Col xs={12}>
        <div className="todo-item" style={itemStyle}>
          <div className="todo-content">{item.task}</div>
          <div>
            <button className="button-delete" onClick={() => delTask(item._id)}>삭제</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
