import ChatInputContainer from '../containers/ChatInputContainer';
import MessagesContainer from '../containers/MessagesContainer';

import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: io()
    }
  }

  render() {
    return (
      <div className={styles.app}>

        <div className={styles.chat_container}>
          <MessagesContainer
            socket={this.state.socket}
          />
          <ChatInputContainer
            socket={this.state.socket}
          />
        </div>
      </div>
    );
  }
}
