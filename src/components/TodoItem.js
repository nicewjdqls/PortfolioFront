import React from "react";
import { CCol, CRow } from "@coreui/react";  // @coreui/react에서 CCol, CRow를 임포트

const TodoItem = ({ item, delTask, putTask }) => {
  const itemStyle = {
    backgroundColor: item.isComplete ? 'lightgray' : 'white', // 완료된 항목은 회색 배경
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    textDecoration: item.isComplete ? 'line-through' : 'none' // 완료 시 취소선 추가 가능
  };

  return (
    <CRow>
      <CCol xs={12}>
        <div className="todo-item" style={itemStyle}>
          <div className="todo-content">{item.task}</div>
          <div>
            {/* CoreUI 스타일의 버튼 사용 */}
            <button className="btn btn-danger" onClick={() => delTask(item._id)}>삭제</button>
          </div>
        </div>
      </CCol>
    </CRow>
  );
};

export default TodoItem;
