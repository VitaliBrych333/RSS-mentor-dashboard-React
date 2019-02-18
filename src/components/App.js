import React, { Component, Fragment } from 'react';

import Select from 'react-select';
import mentors from '../JSON/data.json';
import Table from './table';
import Description from './description';

import 'font-awesome/css/font-awesome.css';
import '../css/button.css';
import '../css/user.css';

class App extends Component {
  state = {
      selectedOption: null,
      user: 'not authorized',
  }

  componentDidMount () {
      const oauthScript = document.createElement('script');
      oauthScript.src = 'https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js';

      document.body.appendChild(oauthScript);

      const selectedOption = JSON.parse(localStorage.getItem('githubMentor'));
      const user = JSON.parse(localStorage.getItem('user'));

      if (selectedOption) {
          this.setState({ selectedOption });
      }

      if (user) {
          this.setState({ user });
      }
  }

  handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      localStorage.setItem('githubMentor', JSON.stringify(selectedOption));
  }

  handleClick(e) {
      e.preventDefault();
      window.OAuth.initialize('gBNE0I9tVq4ZUc5bXJvYd-3aZHc');

      window.OAuth.popup('github').then((provider) => {
          provider.me().then((data) => {
              const number = mentors.findIndex(obj => obj.github === data.alias.toLowerCase());

              if (number !== -1) {
                  const selectedOption = mentors[number];
                  this.setState({ selectedOption });
          
                  localStorage.setItem('githubMentor', JSON.stringify(selectedOption));
          
                  if (!JSON.parse(localStorage.getItem('user')) || JSON.parse(localStorage.getItem('user')) !== data.alias) {
                      alert('Welcome mentor ' + data.alias + '!');
                  }         
              } else {         
                  if (!JSON.parse(localStorage.getItem('user')) || JSON.parse(localStorage.getItem('user')) !== data.alias) {
                      alert('Welcome ' + data.alias + '! You are not a mentor');
                  }   
              } 
        
              this.setState({ user: data.alias });
              localStorage.setItem('user', JSON.stringify(data.alias));
          });
      });
  }

  render() {
      const { selectedOption } = this.state;

      return (
          <Fragment>
              <div className='user'>
                  <p>Authorized user:</p>
                  <p>{this.state.user}</p>
              </div>
              <div className='enter'>Mentor</div>
              <Select value={selectedOption}
                  onChange={this.handleChange}
                  options={mentors}
                  getOptionLabel={({ github }) => github} />
              <div className='button'>
                  <a href='' onClick={this.handleClick.bind(this)}>
                      <span className='fa fa-github'></span>Login Github
                  </a> 
              </div>
              <Table selectedOption={selectedOption}/> 
              <Description selectedOption={selectedOption}/>         
          </Fragment>
      );
  }
}

export default App;
