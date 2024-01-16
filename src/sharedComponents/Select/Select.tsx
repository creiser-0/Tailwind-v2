import { FC, useEffect, useRef, useState } from "react";
import "./Select.css"

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
        <div className="select-div">
            <label htmlFor="select" className="select-label">Please Enter an API URL</label>
            <input
                onChange={eventHandler}
                id="select"
                className="select-input"
                ref={input}
                placeholder="https://jsonplaceholder.typicode.com/users"
            />
            <button onClick={eventHandler} className="submit">Submit</button>
        </div>
    );
};

export default Select;
