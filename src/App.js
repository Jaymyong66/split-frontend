import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import Layout from './pages/Layout';
import Earn from './pages/Earn';
import Register from './pages/Register';



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
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
