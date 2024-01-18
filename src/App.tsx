import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from './components/UserForm';
import DataTable from './components/datatable/DataTable';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserForm />} />
        <Route path='data' element={<DataTable />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
