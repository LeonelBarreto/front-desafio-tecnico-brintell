import './styles.css';
import UserIcon from '../../assets/user.svg';
import {useState} from 'react'
import desselectedInput from '../../assets/desselect-input.svg'
import selectedInput from '../../assets/select-input.svg'
import api from '../../services/api';
import ToastSuccess from '../../helpers/toastSuccess';
import ToastError from '../../helpers/toastError';
import CloseIcon from '../../assets/close.svg';

export default function StudentModal({setOpenRegisterModal, loadAPI, register, setOpenEditModal, id}) {
    const [form, setForm] = useState({nome: "", email: "", cpf: "", telefone: "", sexo: ""})
    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value});
    }
    const registerStudent = async () => {
        try {
            await api.post('/dashboard', form);
            await loadAPI();
            setOpenRegisterModal(false);
            return ToastSuccess("Aluno cadastrado");
        } catch (error) {
            setOpenRegisterModal(false);
            return ToastError("Não foi possível cadastrar o aluno")
        }
    }
    const editStudent = async () => {
        try {
            await api.put(`/dashboard/${id}`, form);
            await loadAPI();
            setOpenEditModal(false);
            return ToastSuccess("Aluno Alterado!")
        } catch (error) {
            setOpenEditModal(false);
            return ToastError("Não foi possível alterar o aluno")
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!form.nome || !form.email || !form.cpf || !form.telefone || !form.sexo){
            return ToastError("Preencha todos os campos");
        }
        if(register) return registerStudent();
        return editStudent();
    }
    return (
        <div className='backdrop'>
            <form className='modal' onSubmit={handleSubmit}>
                {register ?
                <img className='modal-close' src={CloseIcon} onClick={() => setOpenRegisterModal(false)} alt="botão de fechar o modal" />
                :
                <img className='modal-close' src={CloseIcon} onClick={() => setOpenEditModal(false)} alt="botão de fechar o modal" />
            }
                <div className='modal-title'>
                    <img src={UserIcon} alt="ícone de usuário" />
                    <span className="modal-title_span">{register ? "Cadastro de Aluno" : "Editar Aluno"}</span>
                </div>
                <div className='modal-data'>
                    <label htmlFor='nome'>Nome</label>
                    <input 
                    type="text" 
                    placeholder='Digite seu nome' 
                    id="nome"
                    name="nome"
                    onChange={handleChangeInput}
                    />
                    <label htmlFor="email">E-mail</label>
                    <input 
                    type="email" 
                    placeholder='Digite seu e-mail' 
                    id="email"
                    name="email"
                    onChange={handleChangeInput}
                    />
                    <div className='modal-data-numbers'>
                        <div>
                            <label htmlFor="cpf">CPF</label>
                            <input 
                            type="number" 
                            placeholder='Digite seu CPF' 
                            id="cpf"
                            name="cpf"
                            onChange={handleChangeInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone</label>
                            <input 
                            type="number" 
                            placeholder='Digite seu telefone' 
                            id="telefone"
                            name="telefone"
                            onChange={handleChangeInput}
                            />
                        </div>
                    </div>
                    <div className='modal-data-gender'>
                        <label>Sexo</label>
                        <div className='modal-data-gender-input'>
                            <div
                                onClick={() => setForm({...form, sexo: "masculino"})}
                            >
                                <img 
                                src={`${form.sexo === "masculino" ? selectedInput : desselectedInput}`}
                                />
                                <label htmlFor="sexo-m">Masculino</label>
                            </div>
                            <div
                                onClick={() => setForm({...form, sexo: "feminino"})}
                            >
                                <img 
                                src={`${form.sexo === "feminino" ? selectedInput : desselectedInput}`}
                                />
                                <label htmlFor="sexo-f">Feminino</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='modal-buttons'>
                    <div className='modal-buttons-container'>
                        <div>
                            {
                                register ? 
                                <button className='btn-red' type="button" onClick={() => setOpenRegisterModal(false)}>Cancelar</button>
                                :
                                <button className='btn-red' type="button" onClick={() => setOpenEditModal(false)}>Cancelar</button>
                            }
                        </div>
                        <div>
                            <button className='btn-green' type='submit'>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};