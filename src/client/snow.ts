class Snow {
    init(): void {
        return;
    }

    events = [
        mp.events.add('snow::toggle', (toggle) => {
            mp.console.logWarning(`snow::toggle ${toggle}`);
            mp.game.invoke('0x6E9EF3A33C8899F8', toggle)
        }),,

        mp.events.add('snow::enable', () => {
            mp.console.logWarning('snow::enable');
            mp.game.invoke('0x6E9EF3A33C8899F8', true)
        }),,

        mp.events.add('snow::disable', () => {
            mp.console.logWarning('snow::disable');
            mp.game.invoke('0x6E9EF3A33C8899F8', false)
        })
    ];
}

const snow = new Snow();
export { snow };