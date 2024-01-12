import { FC } from "react";
import { iData } from "../../../custom.interfaces/table.interfaces";
import Table from "../Table";

interface iExtraRowProps {
    data: { data: iData; header: string }[];
    colSpan: number;
    changeModalInfo: (data: iData) => void;
}

const ExtraRow: FC<iExtraRowProps> = ({ colSpan, data, changeModalInfo }) => {

    const nestedCellList =data.map((cell) => {
            if (!cell.data) return <div key={cell.header}></div>
            return (
                <div key={cell.header}>
                    <p className="extra-header">{cell.header}</p>
                    <Table data={cell.data} changeModalInfo={changeModalInfo} />
                </div>
            );
        });
    

    return (
        <tr>
            <td></td>
            <td colSpan={colSpan}>
                <div className="extra-row-div">{nestedCellList}</div>
            </td>
        </tr>
    );
};

export default ExtraRow;
