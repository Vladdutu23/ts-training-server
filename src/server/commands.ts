class Commands {
    init(): void {
        return;
    }

    events = [
        mp.events.add('playerCommand', (player, command) => {        
            player.outputChatBox(`${command} is not a valid command.`);
        })
    ];
}

const commands = new Commands();
export { commands };