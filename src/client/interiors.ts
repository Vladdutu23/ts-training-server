class interiorsUtils {
    init(): void {
        this.enableIpls();
        mp.gui.chat.push("Interiors initialized.");
        return;
    }

    enableIpls() {
        // LS Beach House
        mp.game.streaming.requestIpl('ch1_02_closed');
    }
}

const interiors = new interiorsUtils();
export { interiors };