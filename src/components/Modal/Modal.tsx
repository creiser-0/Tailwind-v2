import { FC } from "react";
import { iData } from "../../custom.interfaces/table.interfaces";
import Table from "../Table/Table";

interface iModalProps {
    data: iData[] | iData;
    changeModalInfo: (data: iData) => void;
    switchModal: ()=>void
}

const Modal: FC<iModalProps> = ({ data, changeModalInfo, switchModal}) => {
    console.log('data', data)
    return (
        <div className="modal">
            <div className="modal-content">
                <Table data={data} changeModalInfo={changeModalInfo}></Table>
            </div>
        </div>
    );
};

export default Modal;
