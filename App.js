import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;        

//Home.js
function Home(){
    return(
        <div>Home</div>
    )
}

//About.js
function About(){
    return(
        <div>About</div>
    )
}

//NotFound.js
function NotFound(){
    return(
        <div>404 Not Found</div>
    )
}