import React from 'react'

function ListTable({rows}) {
  return (
    <>
        <table className="table">
        <thead>
          <tr>
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
  )
}

export default ListTable