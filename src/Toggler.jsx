import './Toggler.css'
import { useState } from "react";

export default function Toggler(){
    const [content,setcontent] = useState(true);

    function showcontent(){
        setcontent(!content);
    }
    
    return(
        <div className="main">
            <div className="sub">
                <button onClick={showcontent} className="custombtn">Toggle Button</button>
                {content && <p>‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content.</p>}
            </div>
        </div>
    );
}