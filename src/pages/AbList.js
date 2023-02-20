import React, { useEffect, useState } from "react";
import ListTable from "./../components/ListTable";
import Pagination from "../components/Pagination";
import { LIST_DATA, ADDRESS_BOOK } from "./../components/Api_config";
import { useLocation } from "react-router-dom";
import axios from "axios";

function AbList() {
  const location = useLocation();

  const [data, setData] = useState({
    page: 0,
    rows: [],
    perPage: 0,
    totalPages: 0,
    totalRows: 0,
  });
  //axios.get
  const getListData = async (page = 1) => {
    const response = await axios.get(LIST_DATA, {
      params: {
        page,
      },
    });
    //response.data會依據回應的擋頭做解析,JSON
    // console.log(response.data);
    setData(response.data);

    /*const r = await fetch(LIST_DATA + `?page=${page}` );
    const json = await r.json();
    console.log(json);
    setData(json);*/
  };

  //axios.delete
  const removeItem = async (itemId = 0) => {
    if (!+itemId) {
      return;
    }
    let myAuth = {
      account:'',
      accountId:0,
      token:''
    };
    let mAuth = localStorage.getItem('myAuth');
    try{
      if(mAuth){
        myAuth = JSON.parse(mAuth);
      }
    }catch(ex){}
    const response = await axios.delete(ADDRESS_BOOK + "/" + itemId,{
      headers:{Authorization:'Bearer ' + myAuth.token,}
    });
    console.log(response.data);
    getListData(data.page || 1);
  };

  useEffect(() => {
    const usp = new URLSearchParams(location.search);
    //當路徑變更時，重新取得列表數據
    getListData(+usp.get("page"));
    //組件卸載時，取消任何未完成的請求
    return () => {
      //do cleanup
    };
  }, [location.search]);

  return (
    <div className="container">
      <Pagination
        page={data.page}
        totalPages={data.totalPages}
        getListData={getListData}
      />
      <ListTable rows={data.rows} removeItem={removeItem} />
    </div>
  );
}

export default AbList;
