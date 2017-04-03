import Messages from '../components/Messages';

export default class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.props.socket.on('newuser', () => {
      this.state.messages.push({text: 'A new user has connected.', type: 'newuser'});
      this.setState(this.state);
    });

    this.props.socket.on('userleft', () => {
      this.state.messages.push({text: 'A user has left.', type: 'userleft'});
      this.setState(this.state);
    });

    this.props.socket.on('msg', (msg) => {
      this.state.messages.push({text: msg, type: 'msg'});
      this.setState(this.state);
    });
  }

  render() {
    return (
        <Messages
          messages={this.state.messages}
        />
    );
  }
}
