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
const download_file = async () => {
    // 단순 예시를 위해 filename을 하드코딩 하였으며, 함수의 파라미터로 받아 동적으로 사용할 수 있습니다.
    const filename = '12d0cd704833e15b3d2478af9a709d93.jpg';
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