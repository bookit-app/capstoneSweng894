import React from 'react'
import AccountAddress from '../../../src/components/account/AccountAddress'
import {create} from 'react-test-renderer';

describe("AccountAddress correctly", () => {
    test("AccountAddress renders without crashing", () => {
        const address = create(<AccountAddress />);
        expect (address.toJSON()).toBeTruthy();
    })
  });