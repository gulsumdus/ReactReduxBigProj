import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi"
import {Route, Router, Routes} from "react-router-dom"//************************** */
import CartDetail from "../cart/CartDetail";


function App() {
  return (
      <Container>
        <Navi />
        <Routes> {/* Routes ile Route'ları sarmala */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Dashboard />} />
          <Route path="/cart" element={<CartDetail />} />
        </Routes>
      </Container>
  );
}

export default App;
