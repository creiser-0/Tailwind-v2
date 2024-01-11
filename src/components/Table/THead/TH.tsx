import { FC, useEffect, useState } from "react";
import defaultImage from "../../../assets/default.svg"
import ascendImage from "../../../assets/ascend.svg"
import descendImage from "../../../assets/descend.svg"

interface iTH {
    header: string;
    hasFilter: boolean;
    setCurrentFilterInfo: React.Dispatch<React.SetStateAction<[string, number]>>
    currentHeader: string
}

const TH: FC<iTH> = ({ header, hasFilter , setCurrentFilterInfo, currentHeader}) => {


    const [sortOrder, setSortOrder] = useState(0)

    const [image, setImage] = useState(defaultImage)

    useEffect(()=>{
        if (sortOrder === 1){
            setImage(ascendImage)
        } else if (sortOrder === 2){
            setImage(descendImage)
        } else {
            setImage(defaultImage)
        }

    },[sortOrder])

    useEffect(()=>{
        if (currentHeader !== header){
            setSortOrder(0)
        }
    })

    const clickHandler = ()=>{
        if (sortOrder >= 2){
            setSortOrder(0)
            setCurrentFilterInfo([header, 0])
        } else {
            setSortOrder(sortOrder + 1)
            setCurrentFilterInfo([header, sortOrder+1])
        }
    }

    return (
        <th onClick={hasFilter?clickHandler:()=>{}} className="th">
            <div className="flex justify-center">
                <p>{header}</p>
                {hasFilter && <img className="filter-image"  src={image}/>}
            </div>
        </th>
    );
};

export default TH;
