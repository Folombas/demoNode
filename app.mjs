// import log, { characters, greet as hello} from './characters.mjs';

async function main() {
	try {
		const { characters, greet } = await import('./characters.mjs')
		for (const c of characters) {
			reet(c);
		}
	} catch (e) {
		console.log('Ошибка');
	}
}
main();


