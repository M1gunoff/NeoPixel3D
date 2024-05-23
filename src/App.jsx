import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./pages/Layout/Layout";
import YellowPrinter from "./pages/YellowPrinter/YellowPrinter";
import RedPrinter from "./pages/RedPrinter/RedPrinter";
import BluePrinter from "./pages/BluePrinter/BluePrinter";

const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="yellow" element={<YellowPrinter/>}/>
        <Route path="blue" element={<BluePrinter/>}/>
        <Route path="red" element={<RedPrinter/>}/>
      </Routes>
    </BrowserRouter>
  </div>
};

export default App;
