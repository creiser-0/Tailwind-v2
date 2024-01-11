import { FC, useEffect, useState } from "react";
import { iData } from "../../../custom.interfaces/table.interfaces";
import TH from "./TH";

interface iTHeadProps {
    data: iData | iData[];
    nestedKeys: string[];
    isArray: boolean;
    changeFilter: (header: string, sortOrder: number) => void;
}

const THead: FC<iTHeadProps> = ({
    data,
    nestedKeys,
    isArray,
    changeFilter,
}) => {
    const [currentFilterInfo, setCurrentFilterInfo] = useState<
        [string, number]
    >(["", 0]);

    useEffect(() => {
        changeFilter(...currentFilterInfo);
    }, [currentFilterInfo]);

    const getHeaderList = () => {
        const keys = Object.keys(isArray ? data[0] : data);
        return keys.map((key) => {
            const hasFilter = !nestedKeys.includes(key);
            return (
                <TH
                    key={key}
                    hasFilter={hasFilter}
                    header={key}
                    setCurrentFilterInfo={setCurrentFilterInfo}
                    currentHeader={currentFilterInfo[0]}
                />
            );
        });
    };

    const hasExpand = nestedKeys.length > 0;

    const headerList = getHeaderList();

    return (
        <thead className="thead">
            <tr className="header-row">
                {hasExpand && <th />}
                {headerList}
            </tr>
        </thead>
    );
};

export default THead;
