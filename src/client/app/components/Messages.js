import styles from './Messages.css';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.messages_container}>
        {this.props.messages.map((el, i) => {
          var message = null;
          switch(el.type) {
            case 'msg':
              message = (<span><span className={styles.nickname} style={{color: el.color}}>{el.author}</span>: {el.content}</span>)
              break;
            default:
              message = (<span style={{color: el.color}}>{el.content}</span>)
          }
          return (
            <div className={styles.message}>
              {message}
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
