# html-workflow
Simple website, showing html workflow with typescript# html-workflow
Simple website, showing html workflow

#### Prerequisites:
- npm, current version 8.1.0
- node, current version 16.13.0
- git, current version 2.14.3

#### Workflow:
1. Clone the repository to your local computer.<br />
`git clone https://github.com/JBerg60/html-workflow.git`<br />
A new folder with subfolders html-workflow will be created with all files

2. Update all node modules by running `npm install`

3. Start the devellopment by running `gulp`
This will start a local web server, with browser reload.

4. When done you can deploy files from the `dist` folder to the live website.

5. Use ```gulp --task``` to see all the tasks that gulp can perform

#### Unit testing
This setup provides typescript unit testing, in VS Code.  
Install the `Test explorer UI and Mocha Test Eplorer` extensions intn VS Code. Make sure there is a settings.json file in the local .vscode folder. Add the following 2 lines to settings.json
``` 
"mochaExplorer.files": "test/**/*.ts",
"mochaExplorer.require": "ts-node/register"
```
Now, unit tests can be run from the VS Code explorer.

#### Notes:
- Packages can be added by `npm install --save-dev {package name}`
- Gulp can be called with parameters: `gulp clean` or `gulp build` 
