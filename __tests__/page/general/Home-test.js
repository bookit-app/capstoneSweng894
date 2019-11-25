import '../../../src/setupTests'
import Home from '../../../src/page/general/Home'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

jest.mock('firebase', () => {
    return {
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
                currentUser: jest.fn(() => {
                    return {
                        email: 'a@a.com',
                        displayName: 'Test'
                    };
                })
            };
        })
    };
});

describe('Home render correctly', () =>{
    let home;
    let props;

    beforeEach(() => {
        props = {}
    })

    test('Home correctly render', () => {
        home = shallow(<Home {...props} />)
        expect(home).toBeTruthy()
    })
})