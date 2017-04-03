import ChatInput from '../components/ChatInput';

export default class ChatInputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    this.props.socket.emit('msg', this.state.value);
    this.setState({value: ""});

    e.preventDefault();
    return false;
  }

  render() {
    return (
      <ChatInput
        handleSubmit={this.handleSubmit.bind(this)}
        handleChange={this.handleChange.bind(this)}
        value={this.state.value}
      />
    );
  }
}
