import React,{useContext} from "react";
import { FaTrashAlt } from "react-icons/fa";
import ThemeContext from "../contexts/ThemeContext";

function ListTable({ rows,removeItem }) {
  const {color, backgroundColor} = useContext(ThemeContext);
  return (
    <>
      <table className="table" style={{color, backgroundColor}}>
        <thead>
          <tr>
            <th scope="col">
              <FaTrashAlt />
            </th>
            <th scope="col">#</th>
            <th scope="col">姓名</th>
            <th scope="col">手機</th>
            <th scope="col">電郵</th>
            <th scope="col">生日</th>
            <th scope="col">地址</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((v, i) => {
            return (
              <tr key={v.sid}>
                <td>
                <a href="#/" onClick={(e)=>{
                  e.preventDefault()
                  removeItem(v.sid)
                }}><FaTrashAlt /></a>
                  
                </td>
                <td>{v.sid}</td>
                <td>{v.name}</td>
                <td>{v.mobile}</td>
                <td>{v.email}</td>
                <td>{v.birthday}</td>
                <td>{v.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListTable;
