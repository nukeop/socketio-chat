import styles from './ChatInput.css';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className={styles.chat_form} action="" method="get" onSubmit={(e) => {return this.props.handleSubmit(e);}}>
        <input value={this.props.value} onChange={this.props.handleChange}/> <button>Send</button>
      </form>
    );
  }
}
