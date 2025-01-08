import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item, deleteItem, toggleComplete }) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? "item-complete" : ""}`}>
          <div className="todo-content">{item.task}</div>
          <div className="todo-writer">작성자 : {item.userName || "Unknown"}</div> {/* 작성자(userName) 표시 */}
          <div>
            <button
              className="button-delete"
              onClick={() => deleteItem(item.id)} // 수정: item._id -> item.id
            >
              삭제
            </button>
            <button
              className="button-complete"
              onClick={() => toggleComplete(item.id)} // 수정: item._id -> item.id
            >
              {item.isComplete ? "안끝남" : "끝남"}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
