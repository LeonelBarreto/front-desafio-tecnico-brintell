import { useEffect, useState } from 'react';
import GraphicBoard from '../../components/GraphicBoard';
import Header from '../../components/Header';
import MapBoard from '../../components/MapBoard';
import TableBoard from '../../components/TableBoard';
import api from '../../services/api.jsx';
import './styles.css';

export default function Main() {
    const [students, setStudents] = useState([]);

  useEffect(() => {
      async function loadAPI() {
        try {
          const response = await api.get(`/dashboard`);
  
          if (response.status > 204) {
            return;
          };
  
          setStudents(response.data);
        } catch (error) {
          console.log(error);
        }
      }
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
            <button className='btn-purple'>+ Adicionar aluno</button>
            <TableBoard students={students}/>
          </div>
        </main>
      </div>
  )
};