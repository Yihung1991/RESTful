import { createContext, useState } from "react";

const AuthContext = createContext({});
export default AuthContext;


export const AuthContextProvider = ({children})=>{
  // 預設為未登入狀態
  const unAuth = {
    authorised: false,
    sid: 0,
    account: '',
    token: ''
  };

  let initAuth = {...unAuth};

  const str = localStorage.getItem('myAuth');

  try{
    if(str){
      const localAuth = JSON.parse(str);
      if(localAuth.token && localAuth.account && localAuth.accountId){
        initAuth = {
          authorised: true,
          sid: localAuth.accountId,
          account: localAuth.account,
          token: localAuth.token
        };
      }
    }
  }catch(ex){}

  const [myAuth, setMyAuth] = useState(initAuth);


  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}