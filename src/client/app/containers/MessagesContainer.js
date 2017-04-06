import Messages from '../components/Messages';

export default class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.props.socket.on('newuser', (id) => {
      this.state.messages.push({content: 'A new user has connected: '+id+'.', color: '#2ecc71', type: 'newuser'});
      this.setState(this.state);
    });

    this.props.socket.on('userleft', (id) => {
      this.state.messages.push({content: 'A user has left: '+id+'.', color: '#e74c3c', type: 'userleft'});
      this.setState(this.state);
    });

    this.props.socket.on('msg', (msg) => {
      this.state.messages.push({
        author: msg.author,
        content: msg.content,
        color: msg.color,
        type: 'msg'
      });
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
