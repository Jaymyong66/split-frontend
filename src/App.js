
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Main from './pages/Main';
import Layout from './pages/Layout';
import Earn from './pages/Earn';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route
            path="/earn"
            element={
              <Layout>
                <Earn />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
