function checkEmpty(inputText) {
    if (inputText.trim().length === 0) throw 'Input is Empty';
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    try {
        checkEmpty(formText);
        console.log("::: Form Submitted :::")

        fetch(`http://localhost:8081/test/${formText.trim()}`)
            .then(res => res.json())
            .then((res) => {
                if (res.status.msg !== 'OK') throw res.status.msg;

                document.getElementById('score_tag').innerHTML = Client.resultField.score_tag(res.score_tag);
                document.getElementById('agreement').innerHTML = Client.resultField.agreement(res.agreement);
                document.getElementById('subjectivity').innerHTML = Client.resultField.subjectivity(res.subjectivity);
                document.getElementById('confidence').innerHTML = Client.resultField.confidence(res.confidence);
                document.getElementById('irony').innerHTML = Client.resultField.irony(res.irony);
            }).catch((error) => {
                alert(error);
            })
    } catch (error) {
        alert(error);
    }

}


export {
    checkEmpty,
    handleSubmit
}