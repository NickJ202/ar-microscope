import Bundlr from '@bundlr-network/client';
import { execSync } from 'child_process';
import fs from 'fs';

// Deploys files and adds a renderer tags.
async function deployRenderer(folder) {
	const jwk = JSON.parse(fs.readFileSync(process.env.PATH_TO_WALLET).toString());
	const bundlr = new Bundlr.default('http://node2.bundlr.network', 'arweave', jwk);

	const tags = [
		{ name: 'Implements', value: 'ANS-110' },
		{ name: 'Type', value: 'renderer' },
		{ name: 'Title', value: 'The Microscope Renderer' },
		{ name: 'Description', value: 'ANS-110' },
		{ name: 'Topic:Renderer', value: 'Renderer' },
		// { name: 'Render-For', value: '<add value here if the renderer is for a specific ANS-110 type>' },
	];
	const uploaded = await bundlr.uploadFolder(folder, {
		indexFile: 'index.html', // optional index file (file the user will load when accessing the manifest)
		batchSize: 50, //number of items to upload at once
		keepDeleted: false, // whether to keep now deleted items from previous uploads
		manifestTags: [{ tags }],
	});

	console.log(`Files uploaded. Manifest Id ${uploaded.id}`);
}

// Deploys files without adding tags
function deployFiles(folder) {
	execSync(
		`npx bundlr upload-dir ${folder} -w ${process.env.PATH_TO_WALLET} --index-file index.html -c arweave -h https://node2.bundlr.network --no-confirmation`,
		{ encoding: 'utf8', stdio: 'inherit' }
	);
}

if (!process.env.PATH_TO_WALLET) {
	console.log('Set process.env.PATH_TO_WALLET to the path to your key file.');
	process.exit(1);
}
const folder = process.argv[2];
if (!folder) {
	console.log('You must pass a path to this script. eg. node ./perma-deploy.mjs ./path/to/dist');
	process.exit(1);
}

deployRenderer(folder).catch(console.log);
