@echo off
cd /d "%~dp0"
node scripts/preview-local.mjs
if errorlevel 1 pause
