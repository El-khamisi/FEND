const picker = document.getElementById("date");

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}

const fullDate = year + '-' + month + '-' + day;
picker.setAttribute("min", fullDate);

//return 1 for Forecast 
//return 0 for Current
function calcDate() {

    if (picker.value.length == 0) {
        throw new Error('Choose A Date First')
    }

    const pickerDate = picker.value.split('-')
    const pickerDay = parseInt(pickerDate[2]);
    const pickerMonth = parseInt(pickerDate[1]);

    day = parseInt(day);
    month = parseInt(month)

    if (pickerDay < day) {
        return ((30 - day) + pickerDay >= 7 ? 1 : 0)
    }

    return (pickerDay - day >= 7 ? 1 : 0);
}




export {
    calcDate
}