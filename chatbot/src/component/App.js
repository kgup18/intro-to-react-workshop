import React from 'react';
import './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import restclient from '../restclient';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      messages: []
    };
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages(mes) {
    console.log(mes + ' received');
    restclient.get('https://chatapi.site/messages', data => {
      this.setState({ messages: data.messages });
    });
  }

  sendmessage(event, msg) {
    event.preventDefault();
    restclient.post('https://chatapi.site/messages', msg);
    console.log(msg + ' received');
  }

  render() {
    return (
      <div>
        <h1 className="App-header">Intro to React Workshop</h1>
        <MessageForm handler={this.sendmessage} />
        <MessageList entries={this.state.messages} />
      </div>
    );
  }
}

export default App;
