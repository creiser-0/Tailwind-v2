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
            return (
                <div key={cell.header}>
                    <p>{cell.header}</p>
                    <Table data={cell.data} changeModalInfo={changeModalInfo} />
                </div>
            );
        });
    

    return (
        <tr>
            <td></td>
            <td colSpan={colSpan}>
                <div>{nestedCellList}</div>
            </td>
        </tr>
    );
};

export default ExtraRow;
