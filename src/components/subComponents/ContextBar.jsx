import React, {useRef, useState, useEffect} from 'react'
import DragLockComp from "../DragLock.jsx"

export default function ContextBar(){
    const context = useRef(null)
    const btn = useRef(null)
    const [orgSize, setOrgSize] = useState({height: "200px", padding: "1rem"})
    const [minimize, setMinimize] = useState(false)

    useEffect(()=>{
        
    }, [])

    function handleClick(){
        if (!minimize){
            setOrgSize({
                height: context.current.parentElement.style.height,
                padding: context.current.parentElement.style.padding
            })
            context.current.parentElement.style.height = "0px"
            context.current.parentElement.style.padding = "2.5rem"
            btn.current.style.backgroundImage = "url(../../public/images/iconSpread.svg)"
        } else {
            context.current.parentElement.style.height = orgSize.height
            context.current.parentElement.style.padding = orgSize.padding
            btn.current.style.backgroundImage = "url(../../public/images/iconMinimize.svg)"
        }
        
        setMinimize(!minimize)
    }

    return (
        <>
            <DragLockComp />
            <div className="contextBar" ref={context}><button ref={btn} onClick={handleClick} className="btn-minimize btn-frameless"></button></div>
        </>
    )   
}