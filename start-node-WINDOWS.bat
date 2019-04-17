@echo off
REM cd "C:\Users\test\Desktop\Visual-Data-Assistant"
if not exist node_modules (
	npm install
)

npm start
