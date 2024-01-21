import {ReactNode} from "react";

function OutsideContainer({children}: { children: ReactNode }) {
    return (
        <div className="container" style={{margin: '2rem auto'}}>
                {children}
        </div>
    );
}

export default OutsideContainer;