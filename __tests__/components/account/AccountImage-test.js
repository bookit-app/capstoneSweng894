import React from 'react'
import AccountImage from '../../../src/components/account/AccountImage'
import {create} from 'react-test-renderer';

describe('Account Image correctly renders', () => {
    test('Matches the snapshot', () => {
        const accountImage = create(
            <AccountImage
            imageHolder={false}
            placeholder={require('../../../src/image/Placeholder150.png')}
        />
        )
        expect(accountImage.toJSON()).toMatchSnapshot();
    })
})
