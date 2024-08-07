class CasinoPentHouse {
    interiorId = 274689;
    pentHouseCoordinates = new mp.Vector3(976.636, 70.295, 115.164);

    ipl = 'vw_casino_penthouse';

    init(): void {
        return;
    }

    loadPentHouse() {
        mp.game.streaming.requestIpl(this.ipl);

        const interior = mp.game.interior.getInteriorAtCoords(
            this.pentHouseCoordinates.x, 
            this.pentHouseCoordinates.y, 
            this.pentHouseCoordinates.z
        );

        mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Tint_Shell');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Pattern_01');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Pattern_02');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Pattern_03');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Pattern_04');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Pattern_05');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Pattern_06');
        mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Pattern_07');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Pattern_08');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Pattern_09');

        mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Spa_Bar_Open');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Spa_Bar_Closed');

        mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Media_Bar_Open');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Media_Bar_Closed');

        mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Dealer');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_NoDealer');

        mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Arcade_Retro');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Arcade_Modern');
        
        mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Bar_Clutter');
        mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Clutter_01');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Clutter_02');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_Clutter_03');

        mp.game.interior.enableInteriorProp(this.interiorId, 'set_pent_bar_party_0');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'set_pent_bar_party_1');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'set_pent_bar_party_2');
        // mp.game.interior.enableInteriorProp(this.interiorId, 'set_pent_bar_party_after');
        
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_GUEST_BLOCKER');

        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_LOUNGE_BLOCKER');
        
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_OFFICE_BLOCKER');
        
        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_CINE_BLOCKER');

        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_SPA_BLOCKER');

        // mp.game.interior.enableInteriorProp(this.interiorId, 'Set_Pent_BAR_BLOCKER');
        
        mp.game.interior.refreshInterior(interior);

        mp.gui.chat.push('Penthouse loaded');
    }

    events = [
        mp.events.add('playerCommand', (command) => {
            const args = command.split(/[ ]+/);
            const commandName = args.splice(0, 1)[0];
            const name = args.splice(0, 1)[0];
            const intensity = args.splice(0, 1)[0];
            mp.gui.chat.push(`commandName: ${commandName}, val1: ${name}, val2: ${intensity}`);

            if (commandName === 'penthouse') {
                mp.players.local.position = this.pentHouseCoordinates;
                this.loadPentHouse();
            }
        }),
    ];
}

const pentHouse = new CasinoPentHouse();
export { pentHouse };