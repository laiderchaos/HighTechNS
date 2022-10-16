export default function ajax() {
    function ajax(url, method, functionName, dataArr) {
        let xhttp = new XMLHttpRequest();
        xhttp.open(method, url, true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(dataArr);

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                functionName(this);
            }
        }
    }

    function requestData(dataArr) {
        let out = '';
        for (let dataArrKey in dataArr) {
            out += `${dataArrKey} = ${dataArr[dataArrKey]}&`;
        }
        console.log(out)
        return out;
    }

    function setLog(data) {
        console.log(data);
    }
}