Reason for this:
The voice api will ask for your permission every single time if you try to just double-click the html file to open it the way we've been doing. You CANNOT change this permission-seeking behavior for file:// urls. This is how chrome is designed. To work around this, you have to set up a server. NodeJS is one of the easiest ways to set up a local server on your own computer.
-Yes, each group member MUST do this if you want to work with the voice api. Sorry, but I didn't design chrome. Firefox isn't any different.
-This will ABSOLUTELY have to be used in the production environment, so you may as well be familiar with it even if you don't use the voice yourself.

INSTRUCTIONS:
1. Download Node.js from the official Node.js web site: https://nodejs.org
2. Follow installation instructions
3. You may have to add it to your path variable in order to use it
	(this may require you to restart your computer to work)
4. Go to the TOP project directory
	(outside of the "project" folder, but inside "Visual-Data-Assistant") 
	-There will be two files "app.js" and "package.json" in the current directory if you're in the right one
5. Open a command prompt in that directory (cmd.exe for windows, Terminal for mac)
5. Type "npm install"
	(you may have to type the full path to npm/node/nodemon unless you added it to your PATH var)
6a. If you want to test the voice api itself, type "npm test"
6b. Otherwise type "npm start" or "node app.js" (or "nodemon" if you installed nodemon below)
7.  Open Chrome (will only work in chrome) and go to
	localhost:3000

REFER TO NODEJS.ORG IF THERE ARE PROBLEMS (also youtube or just google)

CAVEATS:
	-You will have to leave the command prompt open.
	-You will have to to press CTRL+C at the command prompt and then re-run "npm start"
		(or "node app.js"):
		-EVERY SINGLE TIME YOU WANT TO ACCESS THE WEB PAGE FOR THE FIRST TIME IN A SESSION
		-EVERY SINGLE TIME YOU MAKE A CHANGE TO ANY SOURCE FILE (html, js, anything else)
			(yes, it gets annoying)
		-You do NOT have to re-start it every time you press reload or f5, as long as you don't make a change to the source
-To make life easier with all this, type "npm install nodemon" at the top level directory where you do "npm start"
-nodemon is an application that will monitor your changes and automatically restart node for you.
	(I'm not sure if it monitors HTML file changes, but I know it monitors JS file changes)

LAST:
-the "Speak" button at the top of the page is tacky, I know.  It's just an example. This is the
"trigger" for it to start recording. This should be changed to whatever the name of the input boxes
are, but they're not present in my version for some reason.
