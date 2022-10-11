import './styles.css';
import Edit from '../../assets/edit.svg';
import Delete from '../../assets/delete.svg';
import {useState} from 'react';
import StudentModal from '../StudentModal';
import DeleteModal from '../DeleteModal';

function TableBoard({students, loadAPI}) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    function formatCPF(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    function formatPhone(number){
        number  = number.replace(/[^\d]/g, "");
        return number.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return (
        <div className='container-table'>
            <div className='table-header'>
                <div className='table-header-name'>
                    <strong>NOME</strong>
                </div>
                <div className='table-header-cpf'>
                    <strong>CPF</strong>
                </div>
                <div className='table-header-gender'>
                    <strong>SEXO</strong>
                </div>
                <div className='table-header-email'>
                    <strong>E-MAIL</strong>
                </div>
                <div className='table-header-phone'>
                    <strong>TELEFONE</strong>
                </div>
                <div className='table-header-icons'>
                    <strong></strong>
                </div>
            </div>

            <div className='table-body'>

                {
                    students.map((student) => (
                        <div className='table-line' key={student.id}>
                            <span className='table-line-name'>{student.nome}</span>
                            <span className='table-line-cpf'>{formatCPF(student.cpf)}</span>
                            <span className='table-line-gender'>{student.sexo === "Masculino" ? "M" : "F"}</span>
                            <span className='table-line-email'>{student.email}</span>
                            <span className='table-line-phone'>{formatPhone(student.telefone)}</span>
                            <div className='table-line-icons'>
                                <img src={Edit} alt="editar" onClick={() => setOpenEditModal(student.id)}/>
                                {openEditModal === student.id && 
                                <StudentModal 
                                setOpenEditModal={setOpenEditModal} 
                                loadAPI={loadAPI} 
                                id={student.id}
                                register={false}
                                />
                                }
                                <img src={Delete} alt="deletar" onClick={() => setOpenDeleteModal(student.id)}/>
                                {openDeleteModal === student.id && 
                                <DeleteModal 
                                setOpenDeleteModal={setOpenDeleteModal}
                                loadAPI={loadAPI}
                                id={student.id}/>
                            }
                            </div>
                        </div>
                    ))
                }
            </div>

            
        </div>
    )
};

export default TableBoard;