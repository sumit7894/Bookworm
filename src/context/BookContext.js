const { createContext, useState } = require("react");

const BookContext = createContext();

const Provider = ({ children }) => {
  const [loginPage, setLoginPage] = useState(false);
  const [isSignup,setIsSignup] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState();
  const [popup,setPopup] = useState(false);
  const [cardData,setCardData] = useState([]);
  const [selectedGenre,setSelectedGenre] = useState([]);
  const [genre,setGenre] = useState([]);
  const [sortCard,setSortCard] = useState("upvotes");
  const value = { loginPage, setLoginPage,isSignup,setIsSignup,
  isLoggedIn,setIsLoggedIn,popup,setPopup,cardData,setCardData,
  selectedGenre,setSelectedGenre,genre,setGenre,sortCard,setSortCard
  };

  return (
    <BookContext.Provider value={value}>{children}</BookContext.Provider>
  );
};
export { Provider };
export default BookContext;  
