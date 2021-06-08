import 'regenerator-runtime/runtime'; //To defined regeneratorRuntime 

import { checkEmpty } from './checkEmpty.js'

test('Testing Empty input', async() => {
    await expect(checkEmpty(''))
        .rejects
        .toThrow('Input is Empty')

});