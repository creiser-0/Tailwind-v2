import { FC } from "react";
import { iData } from "../../custom.interfaces/table.interfaces";
import Table from "../Table/Table";
import "./Modal.css"

interface iModalProps {
    data: iData[] | iData;
    changeModalInfo: (data: iData) => void;
    switchModal: () => void;
}

const Modal: FC<iModalProps> = ({ data, changeModalInfo, switchModal }) => {
    console.log("data", data);
    return (
        <div className="modal" onClick={switchModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={switchModal}>x</button>
                <Table data={data} changeModalInfo={changeModalInfo}></Table>
            </div>
        </div>
    );
};

export default Modal;
