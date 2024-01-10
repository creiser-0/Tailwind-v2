import { FC, ReactElement, useRef } from "react";

interface iSelectProps {
    getApiData: (url: string) => void;
}

const Select: FC<iSelectProps> = ({ getApiData }) => {
    const input = useRef<HTMLInputElement | null>(null);

    const eventHandler = () => {
        if (input.current?.value !== "") {
            getApiData(input.current!.value);
        }
    };

    return (
        <div>
            <label htmlFor="select">Please Enter an API URL</label>
            <input
                onChange={eventHandler}
                type="url"
                id="select"
                ref={input}
                placeholder="https://jsonplaceholder.typicode.com/users"
            />
            <button onClick={eventHandler}>x</button>
        </div>
    );
};

export default Select;
