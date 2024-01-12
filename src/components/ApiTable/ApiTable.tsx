import { FC, useState } from "react";
import { iData } from "../../custom.interfaces/table.interfaces";
import Modal from "../../sharedComponents/Modal/Modal";
import Select from "../../sharedComponents/Select/Select";
import Table from "../../sharedComponents/Table/Table";

const ApiTable: FC = () => {
    const [data, setData] = useState<object | any[]>({});

    async function getApiData(url: string) {
        try {
            const fetchData = await fetch(url);
            const data = await fetchData.json();
            setData(data);
        } catch {
            setData({});
        }
    }

    const [modalState, setModalState] = useState<[boolean, iData]>([false, {}]);

    const switchModal = () => {
        setModalState([!modalState[0], modalState[1]]);
    };

    const changeModalInfo = (data: iData) => {
        setModalState([true, data]);
    };

    return (
        <div className="api-table">
            <Select getApiData={getApiData} />
            <Table data={data} changeModalInfo={changeModalInfo} />
            {modalState[0] && (
                <Modal
                    data={modalState[1]}
                    changeModalInfo={changeModalInfo}
                    switchModal={switchModal}
                />
            )}
        </div>
    );
};

export default ApiTable
