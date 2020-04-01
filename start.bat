@echo off 

npm start
IF %ERRORLEVEL% == 0 GOTO QUIT
pause
:QUIT