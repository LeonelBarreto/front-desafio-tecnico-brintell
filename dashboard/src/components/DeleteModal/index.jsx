import './styles.css';
import AtentionIcon from '../../assets/atention.svg';
import CloseIcon from '../../assets/close.svg';

export default function DeleteModal(open, handleClose, title, textBtnCancel, textBtnConfirm) {
    return (
        <div className='backdrop'>
            <div className='modal'>
                <div>
                    <img src={CloseIcon} alt="ícone de fechar" />
                </div>
                <div>
                    <img src={AtentionIcon} alt="icone de atenção" />
                    <h2>{title}</h2>
                </div>
                <div>
                    <button className='btn-red'>{textBtnCancel}</button>
                    <button className='btn-green'>{textBtnConfirm}</button>
                </div>
            </div>
        </div>
    )
};