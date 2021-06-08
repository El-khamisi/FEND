async function checkEmpty(inputText) {
    if (inputText.trim().length === 0) {

        throw new Error('Input is Empty');
    } else {
        console.log("::: Form Submitted :::")
        const fetch_response = await fetch(`http://localhost:8081/test/${inputText.trim()}`)
        const res = await fetch_response.json();

        return res;
    }
}


export {
    checkEmpty
}