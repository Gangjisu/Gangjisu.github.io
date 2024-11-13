function page_href(url)
{
    window.location.href = url;
}


function Toggle(button_id, content_id) {

    const toggleButton = document.getElementById(button_id);
    const content = document.getElementById(content_id);

    for(let i = 1; i <= document.getElementsByClassName('Content').length; i++) //clear
    {
        let temp_button_id = 'Sub_' + i;
        let temp_content_id = 'Content_' + i;
        const temp_button = document.getElementById(temp_button_id);
        const temp_content = document.getElementById(temp_content_id);
        temp_button.style.backgroundColor = '';
        temp_content.style.display = 'none';
    }

    if(content.style.display === 'none') {
        content.style.display = 'block';
        toggleButton.style.backgroundColor = 'gray';
    }
    else
    {
        content.style.display = 'none';
        toggleButton.style.backgroundColor = ''; //if input color in '' error
    }

    const download_file = async (filename) => {
        //const filename = 'example.txt';
        
        // GET 요청 보내기
        fetch('http://localhost:8080/fileDownload?filename=' + filename, {
            method: 'GET',
        })
        .then((response) => response.blob())
        .then((blob) => {
            // blob 객체를 통해 URL 생성
            const url = window.URL.createObjectURL(blob);
            const element = document.createElement('a');

            // 생성한 URL과 다운로드될 파일명 설정
            element.setAttribute('href', url);
            element.setAttribute('download', '다운로드될파일명.txt');

            // 생성된 a tag를 body에 추가
            document.body.appendChild(element);

            // a tag 클릭을 통해 파일 다운로드 시도
            element.click();

            // 다운로드 후 a tag와 URL을 정리
            element.parentNode.removeChild(element);
            window.URL.revokeObjectURL(url);
        });
    }


}


