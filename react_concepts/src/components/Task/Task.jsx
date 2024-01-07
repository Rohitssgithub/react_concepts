import React, { useState } from 'react';
import Child from './Child';

const Task = () => {
    const [data, setData] = useState({
        name: "prathamesh",
        stack: {
            frontend: ["react", "html", "css"],
            backend: ["node", "java"]
        },
        company: {
            name: {
                company1: "nimap1",
                company2: "nimap2",
                company3: "nimap3"
            }
        }
    });

    const updateName = () => {
        setData((prevData) => ({
            ...prevData,
            name: "prathamesh kadam"
        }));
    };

    const addToFrontendStack = (element) => {
        setData((prevData) => ({
            ...prevData,
            stack: {
                frontend: [...prevData.stack.frontend, element]
            }
        }));
    };

    const addNewCompany = (newCompany) => {
        setData((prevData) => ({
            ...prevData,
            company: {
                name: {
                    ...prevData.company.name,
                    [`company${Object.keys(prevData.company.name).length + 1}`]: newCompany
                }
            }
        }));
    };

    console.log('data', data)
    return (
        <div>
            <Child
                updateName={updateName}
                addToFrontendStack={addToFrontendStack}
                addNewCompany={addNewCompany}
            />
            <div>Name: {data.name}</div>
            <div>Frontend Stack: {data.stack.frontend.join(" , ")}</div>
            <div>Company Names: {Object.values(data.company.name).join(" , ")}</div>
        </div>
    );
};

export default Task;
