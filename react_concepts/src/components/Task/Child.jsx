import React from 'react';

const Child = ({ updateName, addToFrontendStack, addNewCompany }) => {
    return (
        <div>
            <button onClick={updateName}>Update Name</button>
            <button onClick={() => addToFrontendStack("python")}>Add to Stack</button>
            <button onClick={() => addNewCompany("newCompany")}>Add New Company</button>
        </div>
    );
};

export default Child;
