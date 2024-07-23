class Snow {
    init(): void {
        return;
    }

    enableSnow(): void {
        // (mp as Mp & { game1: any }).game1.gameplay.enableSnow = true;
        mp.game.invoke('0x6E9EF3A33C8899F8', true)
    }

    events = [
        mp.events.add('snow::enable', () => {
            mp.console.logWarning('snow::enable');
            this.enableSnow();
        }),,

        mp.events.add('snow::disable', () => {
            mp.console.logWarning('snow::disable');
            mp.game.invoke('0x6E9EF3A33C8899F8', false)
        })
    ];
}

const snow = new Snow();
export { snow };