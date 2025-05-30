import { useState } from "react";

const NameChanger = () => {
    const [name, setName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <>
        <h1 className="text-center text-xl pt-4">Hello, {name || "stranger"}!</h1>
        <div className="text-center mt-4">
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name."
                className="border px-4 py-2"
                />
        </div>
        </>
    )
}

export default NameChanger;