import { chat } from './chat';
import { commands } from './commands';
import './setup';

import { SHARED_CONSTANTS } from '@shared/constants';

initServer();

mp.events.add('playerReady', (player) => {
	console.log(`${player.name} is ready!`);

	player.customProperty = 1;

	player.customMethod = () => {
		console.log('customMethod called.');
	};

	player.customMethod();
});

console.log(SHARED_CONSTANTS.HELLO_WORLD);

function initServer() {
	commands.init();
	chat.init();
}