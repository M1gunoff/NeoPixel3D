import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from "./pages/Layout/Layout";


const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  </div>
};

export default App;
