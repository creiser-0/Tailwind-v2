import { FC, useState } from "react";
import { iData } from "../../../custom.interfaces/table.interfaces";
import ExtraRow from "./ExtraRow";

interface iBodyRowProps {
    data: iData;
    nestedKeys: string[];
    changeModalInfo: (data: iData) => void;
}

const BodyRow: FC<iBodyRowProps> = ({ data, nestedKeys, changeModalInfo }) => {
    const hasExpand = nestedKeys.length > 0;

    const [isExpanded, setIsExpanded] = useState(false);

    const switchExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    const getCellList = () => {
        const keys = Object.keys(data);

        return keys.map((key) => {
            if (nestedKeys.includes(key)) {
                return <td key={key}>{!isExpanded && <button onClick={()=>{changeModalInfo(data[key])}}>SHOW</button>}</td>;
            } else {
                return <td key={key}>{data[key]}</td>;
            }
        });
    };

    const getExtraRowData = (): [{ data: iData; header: string }[], number] => {
        const colSpan = Object.keys(data).length;
        const extraRowData = nestedKeys.map((key) => {
            return { data: data[key], header: key };
        });
        return [extraRowData, colSpan];
    };

    const cellList = getCellList();

    const [extraRowData, colSpan] = getExtraRowData();

    return (
        <>
            <tr>
                {hasExpand && <th onClick={switchExpanded}>E</th>}
                {cellList}
            </tr>
            {isExpanded && (
                <ExtraRow
                    data={extraRowData}
                    colSpan={colSpan}
                    changeModalInfo={changeModalInfo}
                />
            )}
        </>
    );
};

export default BodyRow;
