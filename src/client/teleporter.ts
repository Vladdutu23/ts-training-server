class TeleportUtils {
    Native_Call_UI = {
        IS_WAYPOINT_ACTIVE: () => mp.game.invoke('0x1DD1F58F493F1DA5'),
        GET_BLIP_INFO_ID_ITERATOR: () => mp.game.invoke('0x186E5D252FA50E7D'),
        GET_NEXT_BLIP_INFO_ID: (blipSprite: any) => mp.game.invoke('0x14F96AA50D6FBEA7', blipSprite),
        GET_FIRST_BLIP_INFO_ID: (blipSprite: any) => mp.game.invoke('0x1BEDE233E6CD2A1F', blipSprite),
        DOES_BLIP_EXIST: (blip: any) => mp.game.invoke('0xA6DB27D19ECBB7DA', blip),
        GET_BLIP_INFO_ID_TYPE: (blip: any) => mp.game.invoke('0xBE9B0959FFD0779B', blip)
    };

    init(): void {
        mp.gui.chat.push("Teleporter initialized.");
        return;
    }

    teleportToWaypoint(): void {
        const player = mp.players.local;
        if (this.Native_Call_UI.IS_WAYPOINT_ACTIVE()) {
            const blipIterator = this.Native_Call_UI.GET_BLIP_INFO_ID_ITERATOR();
            const FirstInfoId = this.Native_Call_UI.GET_FIRST_BLIP_INFO_ID(blipIterator);
            const NextInfoId = this.Native_Call_UI.GET_NEXT_BLIP_INFO_ID(blipIterator);

            let found = false;
            let i = FirstInfoId;
            while (this.Native_Call_UI.DOES_BLIP_EXIST(i) != 0 && !found) {
                if (this.Native_Call_UI.GET_BLIP_INFO_ID_TYPE(i) == 4) {
                    found = true;
                    mp.game.cam.doScreenFadeOut(100);
                    setTimeout(() => {
                        const oldpos = player.position;
                        const coord = mp.game.ui.getBlipInfoIdCoord(i);

                        coord.z = mp.game.gameplay.getGroundZFor3DCoord(coord.x, coord.y, 5000, false, false); // getGroundZFor3dCoord old | ignoreWater: 0 (false)
                        player.position = coord;
                        player.freezePosition(true);
                        setTimeout(async () => {
                            // let the game load the map
                            let tries = 0;
                            while (tries <= 6 && coord.z == undefined) {
                                coord.z = mp.game.gameplay.getGroundZFor3DCoord(coord.x, coord.y, 5000, false, false); // getGroundZFor3dCoord old | ignoreWater: 0 (false)
                                tries++;
                                await mp.game.waitAsync(10);
                            }
                            if (coord.z != undefined) {
                                // if found groundZ
                                coord.z += 1;
                                player.position = coord;
                                mp.system.notify({
                                    title: 'Teleporter',
                                    text: `TeleportSuccess!`,
                                    attribute: 'B-Zone V',
                                    duration: 5,
                                    silent: true
                                });
                            } else {
                                player.position = oldpos;
                                mp.system.notify({
                                    title: 'Teleporter',
                                    text: `TeleportError!`,
                                    attribute: 'B-Zone V',
                                    duration: 5,
                                    silent: true
                                });
                            }
                            player.freezePosition(false);
                            mp.game.cam.doScreenFadeIn(250);
                        }, 1500);
                        i = NextInfoId;
                    }, 200);
                }
            }
        } else {
            mp.system.notify({
                title: 'Teleporter',
                text: `WaypointNotSet!`,
                attribute: 'B-Zone V',
                duration: 5,
                silent: true
            });
        }
    }

    events = [
        mp.events.add('teleporter::goto-waypoint', () => {
            mp.console.logWarning('teleporter::goto-waypoint');
            this.teleportToWaypoint();
        })
    ];
}

const teleporter = new TeleportUtils();
export { teleporter };
