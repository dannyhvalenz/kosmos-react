import Head from "next/head";
import Selector from "../components/selector";
import { useEffect, useState } from "react";
import Form from "../components/form";
import classNames from "classnames";
import useBrowser from "../hooks/useBrowser"
export default function Home() {
    const [selected, setSelected] = useState([])
    const [jsonString, setJsonString] = useState(null)
    const [reload, setReload] = useState(false);
    const { isIE } = useBrowser();

    useEffect(() => {
      setReload(false);
    }, [reload]);

  
    return (
        <div className="w-screen h-screen">
            <h1 className="font-bold text-7xl text-center pt-5">Kosmos</h1>
            <p className="text-center font-light">
                Daniela Hernández Valenzuela {isIE}
            </p>
            <main className={classNames(isIE ? "ie-columns" : "m-3 grid grid-cols-2")}>
                <Form setJsonString={setJsonString} selected={selected} />
                <Selector setSelected={setSelected} selected={selected} setReload={setReload}/>
            </main>
            {jsonString !== null && <div className="m-3 grid grid-cols-2">
              JSON: {JSON.stringify(jsonString, null, 2)}
            </div>}

        </div>
    );
}
