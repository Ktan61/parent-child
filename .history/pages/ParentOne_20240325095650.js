import { useState } from "react"

export default function ParentOne() {
    const [date, setData] = useState();

    const parentToChild = () => {
        setData("This is the data from the parent page which will be passed to the child page.");
    }
    return(
        <>
            <button onClick={() => parentToChild()}>Click parent to child</button>
        </>
    )
}