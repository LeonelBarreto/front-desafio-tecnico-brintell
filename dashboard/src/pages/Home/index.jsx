import { useEffect, useState } from 'react';
import GraphicBoard from '../../components/GraphicBoard';
import Header from '../../components/Header';
import MapBoard from '../../components/MapBoard';
import StudentModal from '../../components/StudentModal';
import TableBoard from '../../components/TableBoard';
import api from '../../services/api.jsx';
import './styles.css';

export default function Main() {
    const [students, setStudents] = useState([]);
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    async function loadAPI() {
      try {
        const response = await api.get(`/dashboard`);

        if (response.status > 204) {
          return;
        };
        const studentsData = response.data.reverse();
        setStudents(studentsData);
      } catch (error) {
        console.log(error);
      }
    }
  useEffect(() => {
      loadAPI();
    }, []);
  
  return (
      <div className="container">
        <Header />
        <main className='container-main'>
          <aside className='column-left'>
            <GraphicBoard students={students}/>
            <MapBoard />
          </aside>
          <div className='column-right'>
            <button className='btn-purple' onClick={() => setOpenRegisterModal(true)}>+ Adicionar aluno</button>
            <TableBoard students={students} loadAPI={loadAPI}/>
          </div>
          {openRegisterModal && <StudentModal setOpenRegisterModal={setOpenRegisterModal} loadAPI={loadAPI} register/>}
        </main>
      </div>
  )
};