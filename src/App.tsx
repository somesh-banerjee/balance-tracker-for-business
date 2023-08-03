import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FullTransactionList } from './components/TransactionList';
import { ClearStorage } from './components/AddPlayer';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/txs" element={<FullTransactionList />} />
          <Route path="/clear" element={<ClearStorage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
