export enum cayoPericoNative {
    SET_ISLAND_ENABLED = '0x9A9D1BA639675CF1',
    SET_TOGGLE_MINIMAP_HEIST_ISLAND = '0x5E1460624D194A38',
}

export const islandData = {
    'ipls': [
        'h4_islandairstrip',
        'h4_islandairstrip_props',
        'h4_islandx_mansion',
        'h4_islandx_mansion_props',
        'h4_islandx_props',
        'h4_islandxdock',
        'h4_islandxdock_props',
        'h4_islandxdock_props_2',
        'h4_islandxtower',
        'h4_islandx_maindock',
        'h4_islandx_maindock_props',
        'h4_islandx_maindock_props_2',
        'h4_IslandX_Mansion_Vault',
        'h4_islandairstrip_propsb',
        'h4_beach',
        'h4_beach_props',
        'h4_beach_bar_props',
        'h4_islandx_barrack_props',
        'h4_islandx_checkpoint',
        'h4_islandx_checkpoint_props',
        'h4_islandx_Mansion_Office',
        'h4_islandx_Mansion_LockUp_01',
        'h4_islandx_Mansion_LockUp_02',
        'h4_islandx_Mansion_LockUp_03',
        'h4_islandairstrip_hangar_props',
        'h4_IslandX_Mansion_B',
        'h4_islandairstrip_doorsclosed',
        'h4_Underwater_Gate_Closed',
        'h4_mansion_gate_closed',
        'h4_aa_guns',
        'h4_IslandX_Mansion_GuardFence',
        'h4_IslandX_Mansion_Entrance_Fence',
        'h4_IslandX_Mansion_B_Side_Fence',
        'h4_IslandX_Mansion_Lights',
        'h4_islandxcanal_props',
        'h4_beach_props_party',
        'h4_islandX_Terrain_props_06_a',
        'h4_islandX_Terrain_props_06_b',
        'h4_islandX_Terrain_props_06_c',
        'h4_islandX_Terrain_props_05_a',
        'h4_islandX_Terrain_props_05_b',
        'h4_islandX_Terrain_props_05_c',
        'h4_islandX_Terrain_props_05_d',
        'h4_islandX_Terrain_props_05_e',
        'h4_islandX_Terrain_props_05_f',
        'H4_islandx_terrain_01',
        'H4_islandx_terrain_02',
        'H4_islandx_terrain_03',
        'H4_islandx_terrain_04',
        'H4_islandx_terrain_05',
        'H4_islandx_terrain_06',
        'h4_ne_ipl_00',
        'h4_ne_ipl_01',
        'h4_ne_ipl_02',
        'h4_ne_ipl_03',
        'h4_ne_ipl_04',
        'h4_ne_ipl_05',
        'h4_ne_ipl_06',
        'h4_ne_ipl_07',
        'h4_ne_ipl_08',
        'h4_ne_ipl_09',
        'h4_nw_ipl_00',
        'h4_nw_ipl_01',
        'h4_nw_ipl_02',
        'h4_nw_ipl_03',
        'h4_nw_ipl_04',
        'h4_nw_ipl_05',
        'h4_nw_ipl_06',
        'h4_nw_ipl_07',
        'h4_nw_ipl_08',
        'h4_nw_ipl_09',
        'h4_se_ipl_00',
        'h4_se_ipl_01',
        'h4_se_ipl_02',
        'h4_se_ipl_03',
        'h4_se_ipl_04',
        'h4_se_ipl_05',
        'h4_se_ipl_06',
        'h4_se_ipl_07',
        'h4_se_ipl_08',
        'h4_se_ipl_09',
        'h4_sw_ipl_00',
        'h4_sw_ipl_01',
        'h4_sw_ipl_02',
        'h4_sw_ipl_03',
        'h4_sw_ipl_04',
        'h4_sw_ipl_05',
        'h4_sw_ipl_06',
        'h4_sw_ipl_07',
        'h4_sw_ipl_08',
        'h4_sw_ipl_09',
        'h4_islandx_mansion',
        'h4_islandxtower_veg',
        'h4_islandx_sea_mines',
        'h4_islandx',
        'h4_islandx_barrack_hatch',
        'h4_islandxdock_water_hatch',
        'h4_beach_party',
        'h4_mph4_terrain_01_grass_0',
        'h4_mph4_terrain_01_grass_1',
        'h4_mph4_terrain_02_grass_0',
        'h4_mph4_terrain_02_grass_1',
        'h4_mph4_terrain_02_grass_2',
        'h4_mph4_terrain_02_grass_3',
        'h4_mph4_terrain_04_grass_0',
        'h4_mph4_terrain_04_grass_1',
        'h4_mph4_terrain_04_grass_2',
        'h4_mph4_terrain_04_grass_3',
        'h4_mph4_terrain_05_grass_0',
        'h4_mph4_terrain_06_grass_0',
        'h4_mph4_airstrip_interior_0_airstrip_hanger',
        'ch1_02_closed'
    ]
};

class CayoUtils {
    islandPosition = new mp.Vector3(4840.571, -5174.425, 2.0);
    isInCayo = false;

    init(): void {
        mp.gui.chat.push("Cayo Perico initialized.");
        setInterval(() => {
            const player = mp.players.local;
            const dist = mp.game.system.vdist(
                player.position.x, 
                player.position.y, 
                player.position.z, 
                this.islandPosition.x,
                this.islandPosition.y, 
                this.islandPosition.z);
            if (dist > 1750) this.unloadCayo();
            else this.initializeCayo();
        }, 5000);
        return;
    }

    initializeCayo() {
        if (this.isInCayo) return;
        this.isInCayo = true;
        mp.game.invoke(cayoPericoNative.SET_TOGGLE_MINIMAP_HEIST_ISLAND, true);
        mp.game.invoke(cayoPericoNative.SET_ISLAND_ENABLED, 'HeistIsland', true);

        for (let i = 0; i < islandData.ipls.length; i++) 
            mp.game.streaming.requestIpl(islandData.ipls[i]);
        const interior = mp.game.interior.getInteriorAtCoords(this.islandPosition.x, this.islandPosition.y, this.islandPosition.z);
        mp.game.interior.refreshInterior(interior);

        mp.gui.chat.push("Cayo Perico loaded.");
    }

    unloadCayo() {
        if (!this.isInCayo) return;
        this.isInCayo = false;
        mp.game.invoke(cayoPericoNative.SET_TOGGLE_MINIMAP_HEIST_ISLAND, false);
        mp.game.invoke(cayoPericoNative.SET_ISLAND_ENABLED, 'HeistIsland', false);

        mp.gui.chat.push("Cayo Perico unloaded.");
    }
}

const cayoUtils = new CayoUtils();
export { cayoUtils };