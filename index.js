
function displayChart(response){
    $('#wordlist').empty();
    if(response.length){
        $('#container').css('display','block')
        for(let i = 0; i < response.length; i++){
            $('#wordlist').append(`<li>${response[i].word}</li>`)
        }

    }else{
        $('#container').css('display', 'none');
    }
}

function getWords(){

    let ourinput= $('#userword').val();
    let ouroption = $('#relatedto').val()
    let url = '';
    if(ouroption){
        url = `https://api.datamuse.com/words?rel_rhy=${ourinput}&ml=${ouroption}`;
    }else{
        url = `https://api.datamuse.com/words?rel_rhy=${ourinput}`;
    }
    
    
    fetch(url)
    .then(response => response.json())
    .then(responseJson => {
        if(responseJson.length === 0){
            throw new Error('No words found, did you type in a real word?')
        }
    
        displayChart(responseJson);

        console.log(responseJson);
    })
    .catch((error)=> alert(error));
}


$('form').submit(function(event){
    event.preventDefault();
    getWords();
})
