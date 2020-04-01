npm install 
IF %ERRORLEVEL% == 0 GOTO NEXT
pause
GOTO EXIT
:NEXT


npm update 
IF %ERRORLEVEL% == 0 GOTO QUIT
pause
:QUIT