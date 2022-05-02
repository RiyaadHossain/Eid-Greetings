import React, { useContext } from 'react';
import { NameContext } from '../../App';

const WishMsg = () => {
    const [name] = useContext(NameContext)
    console.log(name);
    return (
        <div>
            <button onClick={() => console.log(name)}>name</button>
        </div>
    );
};

export default WishMsg;