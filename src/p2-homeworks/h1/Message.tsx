import React, {useState} from 'react'
import a from './Message.module.css'

export type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropsType) { // Надо понять как через Онклиак, вывести в Меседжес данные из инпута

    /* const [title, setTitle] = useState('')*/

    return (
        <div className={a.mainBlock}>
            <div className={a.avaTextArea}>
                <div className={a.avaPosition}><img src={props.avatar}/></div>
                <div className={a.messageBlock}>
                    <div className={a.message}>
                        <div className={a.name}><div className={a.nameContent}>{props.name}</div></div>
                        <div className={a.content}><div className={a.contentContent}>{props.message}</div> </div>
                        <div className={a.time}><div className={a.timeContent}>{props.time}</div></div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Message
