@echo off
setlocal
cd /d "%~dp0"

set "GIT_EXE=C:\Program Files\Git\cmd\git.exe"
set "GIT_SAFE=-c safe.directory=*"

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

echo Repositorio:
"%GIT_EXE%" %GIT_SAFE% rev-parse --show-toplevel
if errorlevel 1 goto :erro
echo Branch atual:
"%GIT_EXE%" %GIT_SAFE% branch --show-current
if errorlevel 1 goto :erro
echo Remotos configurados:
"%GIT_EXE%" %GIT_SAFE% remote
if errorlevel 1 goto :erro
echo.
echo Estado antes da preparacao:
"%GIT_EXE%" %GIT_SAFE% status --short
if errorlevel 1 goto :erro

"%GIT_EXE%" %GIT_SAFE% add .
if errorlevel 1 goto :erro

echo.
echo Arquivos preparados para commit:
"%GIT_EXE%" %GIT_SAFE% diff --cached --name-status
if errorlevel 1 goto :erro

"%GIT_EXE%" %GIT_SAFE% diff --cached --quiet
if errorlevel 1 goto :commit
goto :push

:commit
echo.
set "MSG=Atualiza site Maos a Obra"
echo Commit automatico: %MSG%

"%GIT_EXE%" %GIT_SAFE% commit -m "%MSG%"
if errorlevel 1 goto :erro

:push
echo.
echo Enviando para o GitHub...
set /a PUSH_TRY=0

:push_attempt
set /a PUSH_TRY+=1
echo Tentativa %PUSH_TRY% de 3...
"%GIT_EXE%" %GIT_SAFE% push origin main
if not errorlevel 1 goto :push_ok
if %PUSH_TRY% GEQ 3 goto :erro
echo Falha de conexao. Nova tentativa em 5 segundos...
timeout /t 5 /nobreak >nul
goto :push_attempt

:push_ok

echo.
echo Push concluido. Estado final:
"%GIT_EXE%" %GIT_SAFE% status --short --branch
if errorlevel 1 goto :erro

echo.
echo ========================================
echo Publicacao enviada com sucesso.
echo O Cloudflare Pages atualizara o site automaticamente.
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
