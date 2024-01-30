import {useState} from "react";

export default function Counter() {
    const [ value, setValue ] = useState(0);
    // const incrementClick = () => setValue(prev => prev+1);
    return <div className={'level pt-4 is-mobile'}>
        <button className={'button is-link is-light'} onClick={() => setValue(prev => prev+1)}>Increment</button>
        <p>Value of counter is {value}</p>
        <button className={'button is-link is-light'} onClick={() => setValue(prev => prev-1)}>Decrement</button>
    </div>
}