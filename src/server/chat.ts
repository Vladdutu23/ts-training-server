class Chat {
    init(): void {
        return;
    }

    checkChatMessage(player: any, text: string) {
        console.log(`${player.name}: ${text}`);
        mp.players.broadcast(`${player.name}: ${text}`);
    }

    events = [
        mp.events.add("playerChat", this.checkChatMessage)
    ];
}

const chat = new Chat();
export { chat };