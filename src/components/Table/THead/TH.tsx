import { FC, useEffect, useRef } from "react";

interface iTH {
    header: string;
    hasFilter: boolean;
    setCurrentFilterInfo: React.Dispatch<React.SetStateAction<[string, number]>>
    currentHeader: string
}

const TH: FC<iTH> = ({ header, hasFilter , setCurrentFilterInfo, currentHeader}) => {

    const sortOrder = useRef(0)

    useEffect(()=>{
        if (currentHeader !== header){
            sortOrder.current = 0
        }
    })

    const clickHandler = ()=>{
        if (sortOrder.current >= 2){
            sortOrder.current = 0
            setCurrentFilterInfo([header, sortOrder.current])
        } else {
            sortOrder.current += 1
            setCurrentFilterInfo([header, sortOrder.current])
        }
    }

    return (
        <th onClick={hasFilter?clickHandler:()=>{}}>
            <div>
                <p>{header}</p>
                {hasFilter && <img />}
            </div>
        </th>
    );
};

export default TH;
