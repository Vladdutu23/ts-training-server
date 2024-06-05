class ChatModule {
    init(): void {
        mp.gui.chat.show(false);
        this.chat = mp.browsers.new('http://package/Interfaces/advanced-chat/index.html');
        this.chat.markAsChat();

        this.setChatSettings();
        return;
    }

    chat: BrowserMp | undefined = undefined;

    showTimestamp = true;
    showChat = true;
    pageSize = 18;
    fontSize = 0.9;
    
    setChatSettings(): void {
        if (this.chat === undefined) return;
        
        this.chat.execute(`setToggleTimestamp(${this.showTimestamp});`);
        this.chat.execute(`setPageSize(${this.pageSize});`);
        this.chat.execute(`setFontSize(${this.fontSize});`);
        this.chat.execute(`setToggleChat(${this.showChat});`);

        mp.gui.chat.push("Chat initialized.");
    }
}

const chatModule = new ChatModule();
export { chatModule };