const { createContext, useState } = require("react");

const ProductContext = createContext();

const Provider = ({ children }) => {
  const [loginPage, setLoginPage] = useState(false);
//   const [signupPage,setSignupPage] = useState(false);
  const [isSignup,setIsSignup] = useState(false);
  
  const value = { loginPage, setLoginPage,isSignup,setIsSignup };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export { Provider };
export default ProductContext;  
