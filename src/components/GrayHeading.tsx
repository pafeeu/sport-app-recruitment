import {ReactNode} from "react";

function GrayHeading ({ children }: { children: ReactNode }) {
    return (
        <div className="tag is-medium has-text-weight-semibold has-text-left is-justify-content-flex-start has-text-black p-4" style={{ backgroundColor: '#eeeeee', width: '100%', fontSize: '0.8rem'}}>
            {children}
        </div>
    );
}

export default GrayHeading;
