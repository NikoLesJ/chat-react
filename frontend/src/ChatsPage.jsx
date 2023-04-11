import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'beafc756-6038-48b5-8ade-ac815a69d89f', 
        props.user.username, 
        props.user.secret
        );
    return (    
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
    )
}

export default ChatsPage;