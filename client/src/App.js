import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import RouterView from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { client } from './store/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:5000/',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <RouterView />
      </Router>
    </ApolloProvider>
  );
}

export default App;
