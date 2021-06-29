import React, {useState, forwardRef, useImperativeHandle} from "react";
import ReactDom from "react-dom";
import "./modelPopup.css"

const ModelPopup = forwardRef((props, ref) =>{

    const [display, setDisplay] = useState(true);

    useImperativeHandle(ref, ()=>{
        return{
            openModel: () => open(),
            close: () => close()
        }
    });

    const open = () =>{
        setDisplay(false);
    };

    const close = () =>{
        setDisplay(true);
    };

    if(!display){

        return  ReactDom.createPortal(
            <div className={"model-wrapper"}>
                <div onClick={close} className={"model-backdrop"}/>
                    <div className={"model-box"}>
                    {props.children}
                </div>
            </div>, document.getElementById("model-root")
        )
    }
    return null
})

export default ModelPopup;