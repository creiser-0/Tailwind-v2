import { FC, useState } from "react";
import { iData } from "../../custom.interfaces/table.interfaces";
import TBody from "./TBody/TBody";
import THead from "./THead/THead";
import "./Table.css";

interface iTableProps {
    data: iData[] | iData;
    changeModalInfo: (data: iData) => void;
}

const Table: FC<iTableProps> = ({ data, changeModalInfo }) => {
    const getNestedKeys = (data: iData) => {

        return Object.keys(data).filter(
            (key) => Array.isArray(data[key]) || typeof data[key] === "object"
        );
    };

    const getTableProperties = (data: iData | iData[]): [string[], boolean] => {
        if (Array.isArray(data)) {
            return [getNestedKeys(data[0]), true];
        } else if (typeof data === "object") {
            return [getNestedKeys(data), false];
        } else {
            alert("The Data Provided cannot be processed");
            return [[], false];
        }
    };

    const [nestedKeys, isArray] = getTableProperties(data);

    function filter(
        data: iData[] | iData,
        header: string,
        filterOrder: number
    ) {
        if (!Array.isArray(data)) return data;
        const dataCopy = [...data];
        if (filterOrder === 1) {
            switch (typeof dataCopy[0][header]) {
                case "string":
                    return dataCopy.sort(
                        (a, b) =>
                            a[header][0].toLowerCase().charCodeAt() -
                            b[header][0].toLowerCase().charCodeAt()
                    );
                case "number":
                    return dataCopy.sort((a, b) => a[header] - b[header]);
            }
        } else if (filterOrder === 2) {
            switch (typeof dataCopy[0][header]) {
                case "string":
                    return dataCopy.sort(
                        (a, b) =>
                            b[header][0].toLowerCase().charCodeAt() -
                            a[header][0].toLowerCase().charCodeAt()
                    );
                case "number":
                    return dataCopy.sort((a, b) => b[header] - a[header]);
            }
        }
        return dataCopy;
    }

    const [filterInfo, setFilterInfo] = useState<[string, number]>(["", 0]);

    const changeFilter = (header: string, sortOrder: number) => {
        setFilterInfo([header, sortOrder]);
    };

    const sortedData = filter(data, filterInfo[0], filterInfo[1]);

    return (
        <div className="table-div">
            <table className="table">
                <THead
                    data={sortedData}
                    nestedKeys={nestedKeys}
                    isArray={isArray}
                    changeFilter={changeFilter}
                />
                <TBody
                    data={sortedData}
                    nestedKeys={nestedKeys}
                    isArray={isArray}
                    changeModalInfo={changeModalInfo}
                />
            </table>
        </div>
    );
};

export default Table;
