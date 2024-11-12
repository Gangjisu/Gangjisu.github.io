console.log('Happy developing')

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

    // GitHub 파일의 raw URL
    const fileUrl = 'https://github.com/Gangjisu/TermProject/blob/main/assets/travel_picture/picture_osaka_1.jpg?raw=true';

    // 파일 다운로드 함수
    async function downloadFile(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('파일을 다운로드할 수 없습니다.');

            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);

            // 다운로드 링크 생성
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = 'downloaded_file.txt'; // 저장할 파일명 설정
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // 객체 URL 해제
            URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error('다운로드 실패:', error);
        }
    }

    // 파일 다운로드 호출
    downloadFile(fileUrl);

}


