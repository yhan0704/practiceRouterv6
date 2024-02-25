import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Bye = () => <h1>Bye</h1>;

const App = () => {
  const navigate = useNavigate();

  const handleChangePath = (newPath) => {
    navigate(newPath);
  };

  return (
    <BrowserRouter>
      <nav>
        <button onClick={() => handleChangePath("/hi")}>Hi</button>
        <button onClick={() => handleChangePath("/bye")}>Bye</button>
      </nav>
      <Routes>
        <Route path="/hi" element={<Home />} />
        <Route path="/bye" element={<Bye />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
