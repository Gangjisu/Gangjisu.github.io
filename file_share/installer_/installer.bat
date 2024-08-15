@echo off
chcp 65001  >nul  &  

echo
echo 모드로더 설치 시작
echo

java -jar modloader\neoforge-21.1.12-installer.jar

echo
echo 모드 및 리소스팩 설치 시작
echo

copy "resourcepacks" "%appdata%\.minecraft" /y
copy "mods" "%appdata%\.minecraft" /y

echo
echo 설치가 완료되었습니다.
echo

pause

