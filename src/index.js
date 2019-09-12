
/* baseado no artigo https://medium.com/reactbrasil/meu-primeiro-higher-order-component-a376efc654a8 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Infos from './features/Infos';
import ReposList from './features/ReposList';

class App extends Component {

    constructor(){
        super();
        this.state = {
            showInfo: false,
            showRepoList: false
        }
    }

    componentDidMount(){
        setTimeout(() => this.setState({showInfo: true}), 2000);
        setTimeout(() => this.setState({showRepoList: true}), 4000);
    }

    render() {
      const { showInfo, showRepoList } = this.state;
      
      return (
        <div>
            <Infos isLoadingComponent={showInfo} />
            <ReposList isLoadingComponent={showRepoList} />
        </div>
      );

    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
