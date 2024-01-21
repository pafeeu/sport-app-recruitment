import {ReactNode} from "react";

function Container({children}: { children: ReactNode }) {
    return (
            <div className="card is-size-6 padding-with-lines is-half-rounded has-text-black">
                {children}
            </div>
    );
}

export default Container;