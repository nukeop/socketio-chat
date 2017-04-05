import styles from './Messages.css';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.messages_container}>
        {this.props.messages.map((el, i) => {
          return (
            <div className={styles.message}>
              {el.text}
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
