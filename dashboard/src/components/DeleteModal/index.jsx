import './styles.css';
import AtentionIcon from '../../assets/atention.svg';
import CloseIcon from '../../assets/close.svg';
import api from '../../services/api';
import ToastSuccess from '../../helpers/toastSuccess';
import ToastError from '../../helpers/toastError';

export default function DeleteModal({setOpenDeleteModal, id, loadAPI}) {
    const deleteStudent = async () => {
        try{
            await api.delete(`/dashboard/${id}`)
            await loadAPI();
            setOpenDeleteModal(false);
            return ToastSuccess("Aluno excluído");
        }
        catch(error){
            setOpenDeleteModal(false);
            return ToastError("Não foi possível excluir o aluno");
        }
    }
    return (
        <div className='backdrop'>
            <div className='modal'>
                <div>
                    <img src={CloseIcon} className='modal-close' alt="ícone de fechar o modal" onClick={() => setOpenDeleteModal(false)}/>
                </div>
                <div className='modal-img'>
                    <img src={AtentionIcon} alt="icone de atenção" />
                    <h2>Você deseja deletar este aluno?</h2>
                </div>
                <div className='modal-buttons'>
                    <button className='btn-red' onClick={() => setOpenDeleteModal(false)}>Cancelar</button>
                    <button className='btn-green' onClick={() => deleteStudent()}>Confirmar</button>
                </div>
            </div>
        </div>
    )
};