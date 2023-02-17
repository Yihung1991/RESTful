import React, { useEffect, useState } from "react";
import ListTable from "./../components/ListTable";
import Pagination from "../components/Pagination";
import { LIST_DATA } from "./../components/Api_config";
import { useLocation } from "react-router-dom";

function AbList() {
    const location = useLocation()
    const usp = new URLSearchParams(location.search);
  const [data, setData] = useState({
    page: 0,
    rows: [],
    perPage: 0,
    totalPages: 0,
    totalRows: 0,
  });
//   {
//     console.log("1--");
//   }
  const getListData = async (page=1) => {
    const r = await fetch(LIST_DATA + `?page=${page}` );
    const json = await r.json();
    console.log(json);
    setData(json);
  };

  useEffect(() => {
    // {
    //   console.log("useEffect--");
    // }
    getListData(+usp.get('page'));
    return () => {
    //   {
    //     console.log("unmount AbList--");
    //   }
    };
  }, [location.search]);

  return (
    <div className="container">
      <Pagination page={data.page} totalPages={data.totalPages} getListData={getListData}/>
      <ListTable rows={data.rows}/>
      
    </div>
  );
}

export default AbList;
