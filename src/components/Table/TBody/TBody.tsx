import { FC } from "react";
import { iData } from "../../../custom.interfaces/table.interfaces";
import BodyRow from "./BodyRow";

interface iTBodyProps {
    data: iData | iData[];
    nestedKeys: string[];
    isArray: boolean;
    changeModalInfo: (data: iData) => void;
}

const TBody: FC<iTBodyProps> = ({
    data,
    nestedKeys,
    isArray,
    changeModalInfo,
}) => {
    const getRowList = () => {
        if (isArray) {
            return data.map((rowData: iData, i: number) => {
                return (
                    <BodyRow
                        key={i}
                        data={rowData}
                        nestedKeys={nestedKeys}
                        changeModalInfo={changeModalInfo}
                    />
                );
            });
        } else {
            return (
                <BodyRow
                    data={data}
                    nestedKeys={nestedKeys}
                    changeModalInfo={changeModalInfo}
                />
            );
        }
    };

    const RowList = getRowList();

    return <tbody>{RowList}</tbody>;
};

export default TBody;
