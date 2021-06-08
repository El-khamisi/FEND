import * as resultField from './resultField'
import { checkEmpty } from './checkEmpty'

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value


    try {
        const res = await checkEmpty(formText);



        if (res.status.msg !== 'OK')
            throw new Error(res.status.msg);

        document.getElementById('score_tag').innerHTML = resultField.score_tag(res.score_tag);
        document.getElementById('agreement').innerHTML = resultField.agreement(res.agreement);
        document.getElementById('subjectivity').innerHTML = resultField.subjectivity(res.subjectivity);
        document.getElementById('confidence').innerHTML = resultField.confidence(res.confidence);
        document.getElementById('irony').innerHTML = resultField.irony(res.irony);

    } catch (error) {
        alert(error);
    }

}


export {
    handleSubmit
}