const { createContext, useState } = require("react");

const ProductContext = createContext();

const Provider = ({ children }) => {
  const [loginPage, setLoginPage] = useState(false);
  const [isSignup,setIsSignup] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState();
  const [popup,setPopup] = useState(false);
  const [cardData,setCardData] = useState([]);
  // const [commentCount,setCommentCount] = useState();
  const value = { loginPage, setLoginPage,isSignup,setIsSignup,
  isLoggedIn,setIsLoggedIn,popup,setPopup,cardData,setCardData,
  
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export { Provider };
export default ProductContext;  
