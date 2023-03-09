const execSync = require('child_process').execSync;
const packageJson = require('./package.json');
const writeFileSync = require('fs').writeFileSync;

/**
 * @function permaDeploy
 *
 * If process.env.ENVIRONMENT is set to 'local' this will deploy files to arlocal
 * You need to specify a path to your wallet by setting process.env.PATH_TO_WALLET to <path/to/wallet> in order for this to work
 * https://www.youtube.com/watch?v=rbzUYdPocH0 (deep dive, deploying to local arweave using arlocal and arkb)
 * arkb deploy <./directory> -w <path/to/wallet.json> -g http://localhost:1984
 */
function permaDeploy() {
	try {
		const variables = setupVariables();
		deployFiles(variables);
		const output = deployFiles(variables);
		const manifestId = getManifestId(output);
		buildOutputFile(manifestId);
	} catch (error) {
		console.log('There was an error uploading your files.', error);
		process.exit(1);
	}
}

function getManifestId(output) {
	const arweaveAddressLength = 43;
	const noWhitespace = output.replace(/\s/g, '');
	const manifestId = noWhitespace.substring(noWhitespace.length - arweaveAddressLength);
	return manifestId;
}

function setupVariables() {
	// Setup Variables
	const path = process.argv[2];
	console.log('PATH', path);
	const folder = `${path}`;
	process.env.ENVIRONMENT = 'prod';
	const environment = process.env.ENVIRONMENT;
	const wallet = process.env.PATH_TO_WALLET;
	const gateway =
		environment === 'local'
			? ' --gateway http://localhost:1984'
			: environment === 'testnet'
			? ' --gateway https://www.arweave.run'
			: '';
	const version = packageJson.version;
	// log variables
	console.log(`CONFIGURATION:`);
	console.log('=========================');
	console.log(`Folder: ${folder}`);
	console.log(`Environment: ${environment}`);
	console.log(`Wallet: ${wallet}`);
	console.log(`Gateway: ${gateway}`);
	console.log(`Version: ${version}`);
	console.log('=========================');
	return {
		folder,
		environment,
		wallet,
		gateway,
		version,
	};
}
// first: IBuurMJ9_DB61wmEomuRnrX8Qq5-jjjUzwTYWruI-bo
function deployFiles(props) {
	// TODO: add tags [version]
	console.log('PROPS.WALLET', props.wallet);
	const output = execSync(
		`arkb deploy ${props.folder} --wallet ${props.wallet} --auto-confirm --no-colors --force${props.gateway}`,
		{ encoding: 'utf8' }
	).toString();
	console.log('OUTPUT', output);
	return output;
}

async function buildOutputFile(manifestId) {
	if (!manifestId) throw new Error('A manifestId is not here.');
	console.log(`ManifestId: ${manifestId}`, `Length: ${manifestId.length}`);
	writeFileSync('./manifest-output.json', JSON.stringify({ manifestId }));
	// const arweave = Arweave.init({
	// 	host: 'arweave.net',
	// 	port: 443,
	// 	protocol: 'https',
	// });
	// const jwk = JSON.parse(process.env.SOME_SECRET);
	// const warpClient = warp.WarpFactory.custom(arweave, warp.defaultCacheOptions, 'mainnet').useArweaveGateway().build();
	// Object.keys(ANTS).forEach(async (key) => {
	// 	const contract = warpClient.contract(ANTS[key]).connect(jwk);
	// 	await contract.writeInteraction({
	// 		function: 'setRecord',
	// 		subDomain: '@',
	// 		transactionId: manifestId,
	// 	});
	// });
	// console.log('Deployed, please wait 20 - 30 minutes for ArNS to update!');
}

permaDeploy();
