import React from "react";
import {useNavigate} from "react-router-dom"

function Pagination({page, totalPages, getListData}) {
  const navigate = useNavigate();
  return (
    <div className="row">
      <div className="col">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {[...Array(11)].map((v, i) => {
              const p = page - 5 + i;
              if(p<1 || p>totalPages) return null;
              let myClass = 'page-item';
              if(p===page){
                myClass = 'page-item active';
              }

              return <li className={myClass} key={p} >
                <a className="page-link" href="#/" onClick={(e)=>{
                  e.preventDefault();
                  // getListData(p);
                  navigate(`?page=${p}`)
                } }>
                  { p }
                </a>
              </li>
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
