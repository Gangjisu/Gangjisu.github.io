//페이지 이동
function page_href(url)
{
    window.location.href = url;
}


//페이지 메뉴 버튼
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

}

//파일 다운로드
function download_file(filename) {
    // const filename = 'example.txt';
    const apiUrl = '/fileDownload?filename=' + filename;

    const element = document.createElement('a');
    element.href = apiUrl;
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
