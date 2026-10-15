@echo off
setlocal
chcp 65001 >nul

cd /d "%~dp0"

set "GIT_EXE=C:\Program Files\Git\cmd\git.exe"

if not exist "%GIT_EXE%" (
  echo ERRO: Git nao foi encontrado em:
  echo %GIT_EXE%
  echo.
  pause
  exit /b 1
)

echo ========================================
echo   Publicar site Maos a Obra
echo ========================================
echo.

"%GIT_EXE%" status --short
if errorlevel 1 goto :erro

"%GIT_EXE%" add .
if errorlevel 1 goto :erro

"%GIT_EXE%" diff --cached --quiet
if errorlevel 1 goto :commit
goto :push

:commit
echo.
set "MSG="
set /p "MSG=Descreva a alteracao: "
if not defined MSG set "MSG=Atualiza site Maos a Obra"

"%GIT_EXE%" commit -m "%MSG%"
if errorlevel 1 goto :erro

:push
echo.
echo Enviando para o GitHub...
"%GIT_EXE%" push
if errorlevel 1 goto :erro

echo.
echo ========================================
echo Publicacao enviada com sucesso.
echo A Netlify atualizara o site automaticamente.
echo ========================================
echo.
pause
exit /b 0

:erro
echo.
echo ========================================
echo A publicacao falhou. Leia o erro acima.
echo Nenhum arquivo local foi apagado.
echo ========================================
echo.
pause
exit /b 1
