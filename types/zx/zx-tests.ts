async function main() {
	// $
	const $result = await $`cat package.json | grep name`
	assertType<import('zx').ProcessOutput>($result)
	assertType<string>($.shell)
	assertType<string>($.prefix)
	const quoteResult = $.quote('hello world')
	assertType<string>(quoteResult)
	assertType<boolean>($.verbose)

	// cd
	cd('/tmp')

	// fetch
	const resp = await fetch('http://wttr.in')
	if (resp.ok) {
		console.log(await resp.text())
	}

	// question
	const username = await question('What is your username? ')
	assertType<string>(username)
	await question('Choose env variable: ', {
		choices: Object.keys(process.env)
	})

	// chalk
	console.log(chalk.blue('Hello world!'))

	// fs
	await fs.readFile('./package.json')

	// os
	await $`cd ${os.homedir()} && mkdir example`
}

function assertType<Type>(_input: Type) {}