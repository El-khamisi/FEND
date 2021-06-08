import { score_tag } from './resultField.js'

test('Testing default score_tag', () => {

    const temp = score_tag('');
    expect(temp).toBe(`Polarity Score is: confused${String.fromCodePoint(0x1F615)}`);
})