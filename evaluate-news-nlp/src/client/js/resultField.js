export function score_tag(inputText) {
    let outputText = 'NULL';
    switch (inputText) {
        case 'P+':
            outputText = `strong positive${String.fromCodePoint(0x1F60E)}`;
            break;
        case 'P':
            outputText = `positive${String.fromCodePoint(0x1F60F)}`;
            break;
        case 'NEU':
            outputText = `neutral${String.fromCodePoint(0x1F607)}`
            break;
        case 'N':
            outputText = `negative${String.fromCodePoint(0x1F630)}`
            break;
        case 'N+':
            outputText = `strong negative${String.fromCodePoint(0x1F62D)}`
            break;
        case 'NONE':
            outputText = `confused${String.fromCodePoint(0x1F615)}`;
            break;
        default:
            outputText = `confused${String.fromCodePoint(0x1F615)}`;

    }
    return `Polarity Score is: ${outputText}`;
}



export function agreement(inputText) {
    let outputText = 'NULL';

    if (inputText === 'AGREEMENT') {
        outputText = `The different elements have the same polarity.`;
    } else if (inputText === 'DISAGREEMENT') {
        outputText = `There is disagreement between the different elements' polarity.`;
    }
    return outputText;
}

export function subjectivity(inputText) {
    let outputText = 'NULL';

    if (inputText === 'OBJECTIVE') {
        outputText = `The text does not have any subjectivity marks.`;
    } else if (inputText === 'SUBJECTIVE') {
        outputText = `The text has subjective marks.`;
    }
    return outputText;
}

export function confidence(inputText) {
    return `With ${inputText}% of confidence.`
}

export function irony(inputText) {
    let outputText = 'NULL';

    if (inputText === 'NONIRONIC') {
        outputText = `The text does not have any irony marks.`;
    } else if (inputText === 'IRONIC') {
        outputText = `The text has irony marks.`;
    }
    return outputText;
}