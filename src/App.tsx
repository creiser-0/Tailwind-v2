import { FC, useState } from "react";
import Table from "./components/Table/Table";
import { iData } from "./custom.interfaces/table.interfaces";
import Modal from "./components/Modal/Modal";
import Select from "./components/Select/Select";

const App: FC = () => {
    const [data, setData] = useState<object | any[]>({});

    async function getApiData(url: string) {
        const fetchData = await fetch(url);
        const data = await fetchData.json();
        setData(data);
    }

    const [modalState, setModalState] = useState<[boolean, iData]>([false, {}]);

    const switchModal = () => {
        setModalState([!modalState[0], modalState[1]]);
    };

    const changeModalInfo = (data: iData) => {
        setModalState([true, data]);
    };

    return (
        <main>
            {/* <Header></Header> */}
            <Select getApiData={getApiData} />
            <Table data={data} changeModalInfo={changeModalInfo} />
            {modalState[0] && (
                <Modal
                    data={modalState[1]}
                    changeModalInfo={changeModalInfo}
                    switchModal={switchModal}
                />
            )}
            {/* <Footer></Footer> */}
        </main>
    );
};

export default App;
