function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if (Client.urlCheck(formText)) {

        console.log("::: Form Submitted :::")
        posting('http://localhost:8081/api', { url: formText })

            .then(function (datas) {
                document.getElementById('polarity').innerHTML = 'POLARITY: ' + polarityCheck(datas.score_tag);
                document.getElementById("agreement").innerHTML = `AGREEMENT: ${datas.agreement}`;
                document.getElementById("subjectivity").innerHTML = `SUBJECTIVITY: ${datas.subjectivity}`;
                document.getElementById("confidence").innerHTML = `CONFIDENCE: ${datas.confidence}`;
                document.getElementById("irony").innerHTML = `IRONY: ${datas.irony}`;
            })
    } else {
        alert('Invalid URL!');
    }
}
// Async Post 
const posting = async (url = "", data = {}) => {
    console.log('Sentiment Analysis in progress:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const fullData = await response.json();
        console.log('Data delivered:', fullData)
        return fullData;
    } catch (error) {
        console.log('error', error);
    }
};

// polarityCheck for Output
const polarityCheck = (score) => {

    let show = "";
    switch (score) {
        case 'NONE':
            show = 'no sentiment';
        case 'P+':
            show = 'high positive';
            break;
        case 'P':
            show = 'positive';
            break;
        case 'NEW':
            show = 'neutral';
            break;
        case 'N':
            show = 'negative';
            break;
        case 'N+':
            show = 'high negative';
            break;
        
    }
    return show;
}

export {handleSubmit}
export {polarityCheck}