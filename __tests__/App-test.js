/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('firebase', () => {
  return {
    initializeApp: jest.fn(() => {
      return {
      };
    }),
    auth: jest.fn(() => {
        return {
          createUserWithEmailAndPassword: jest.fn((para1, para2) => {
            return new Promise(function(resolve, reject) {
              resolve({
                email: 'test@test.com',
                uid: '12345678abcdefg'
              });

              reject({ message: 'error!' });
            });
          }),
          signOut: jest.fn(() => {
            return new Promise(function(resolve, reject) {
              resolve('Success');
              reject({ message: 'error!' });
            });
          }),
          onAuthStateChanged: jest.fn(() => {
            return {
              email: 'test@test.com',
              uid: '12345678abcdefg'
            };
          }),
          signInWithEmailAndPassword: jest.fn((para1, para2) => {
            return new Promise(function(resolve, reject) {
              reject({ message: 'error!' });
            });
          }),
        };
      })
  };
});

it('renders correctly', async () => {
  renderer.create(<App />);
});
