#!/bin/bash
# cd "C:\Users\test\Desktop\Visual-Data-Assistant"
if [ ! -d node_modules ]; then
	npm install
fi

npm start
