import { getWeaponHashByName } from "@shared/constants";

class Commands {
    init(): void {
        return;
    }

    commandsList = {
        HELP: 'help',
        GOTO: 'goto',
        GETHERE: 'gethere',
        SETHP: 'sethp',
        SETARMOR: 'setarmor',
        MAKEFULL: 'mf',
        GETGUN: 'gg',
        REVIVE: 'revive',
        VEH: 'veh',
    }

    findPlayer(usernameOrId: string): PlayerMp | null {
        var isNumber = this.isStringOrNumber(usernameOrId) === 'number';
        // console.log(`isNumber: ${isNumber}`);
        if (isNumber) {
            // console.log(`player number: ${JSON.stringify(mp.players.at(parseInt(usernameOrId)))}`);
            return mp.players.at(parseInt(usernameOrId));
        } else if (typeof usernameOrId === 'string') {
            var target: null | PlayerMp = null;
            mp.players.forEach((p) => {
                if (target == null && p.name.toLowerCase().includes(usernameOrId.toLowerCase())) {
                    // console.log(`player: ${JSON.stringify(p)}`);
                    target = p;
                }
            });
            return target;
        }
        return null;
    }

    goto(player: PlayerMp, target: PlayerMp): void {
        player.position = target.position;
        mp.players.broadcast(`(/goto) ${player.name} Goes to ${target.name}.`);
    }
    
    gethere(player: PlayerMp, target: PlayerMp): void {
        target.position = player.position;
        mp.players.broadcast(`(/gethere) ${player.name} Get ${target.name} to his position.`);
    }

    setHealth(player: PlayerMp, target: PlayerMp, health: number): void {
        target.health = health;
        mp.players.broadcast(`(/sethp) ${player.name} Sets Health ${health} to ${target.name}.`);
    }

    setArmor(player: PlayerMp, target: PlayerMp, armor: number): void {
        target.armour = armor;
        mp.players.broadcast(`(/setarmor) ${player.name} Sets Armor ${armor} to ${target.name}.`);
    }

    makeFull(player: PlayerMp): void {
        player.health = 100;
        player.armour = 100;
        player.notify(`You are now full health and armor.`);
    }

    getGun(player: PlayerMp, weapon: string, ammo: number): void {
        const weaponHash = getWeaponHashByName(weapon);
        if (weaponHash === undefined) {
            player.outputChatBox(`Weapon ${weapon} not found!`);
            return;
        }
        player.giveWeapon(parseInt(weaponHash), ammo);
        mp.players.broadcast(`(/gg) ${player.name} Get ${weapon} with ${ammo} ammo.`);
    }

    revive(player: PlayerMp, target: PlayerMp): void {
        if (target.health > 0) {
            player.outputChatBox(`Player is not dead!`);
            return;
        }
        target.spawn(new mp.Vector3(target.position.x, target.position.y, target.position.z + 1));
        target.health = 100;
        mp.players.broadcast(`(/revive) ${player.name} Revive ${target.name}.`);
    }

    spawnVehicle(player: PlayerMp, name: string): void {
        const vehName = mp.joaat(name);
        if (!vehName) {
            player.outputChatBox(`Vehicle not found!`);
            return;
        }
        const veh = mp.vehicles.new(vehName, player.position,
            {
                engine: true,
                color: [
                    [Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1],
                    [Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1]
                ]
            });
        veh.numberPlate = 'TR-BZONE';
        player.putIntoVehicle(veh, 0);
        mp.players.broadcast(`(/veh) ${player.name} Spawned a ${name}.`);
    }

    events = [
        // Help
        mp.events.addCommand(this.commandsList.HELP, (player, _fullText) => {
            player.outputChatBox(`Teleport Commands: /goto, /gethere, F2 - No Clip`);
            player.outputChatBox(`Health & Armor Commands: /sethp, /setarmor, /mf, /revive`);
            player.outputChatBox(`Weapon Commands: /gg`);
            player.outputChatBox(`Vehicle Commands: /veh`);
        }),

        // Teleport
        mp.events.addCommand(this.commandsList.GOTO, (player, id) => {
            if (!id) {
                player.outputChatBox(`Usage: [/goto <Player Name / Player Id>]`);
                return;
            }
            let target = this.findPlayer(id);
            if (!target) {
                player.outputChatBox(`Player not found!`);
                return;
            }
            this.goto(player, target);
        }),

        mp.events.addCommand(this.commandsList.GETHERE, (player, id) => {
            if (!id) {
                player.outputChatBox(`Usage: [/gethere <Player Name / Player Id>]`);
                return;
            }
            let target = this.findPlayer(id);
            if (!target) {
                player.outputChatBox(`Player not found!`);
                return;
            }
            this.gethere(player, target);
        }),

        // Health & Armor
        mp.events.addCommand(this.commandsList.SETHP, (player, _fullText, id, health) => {
            if (!id || !health) {
                player.outputChatBox(`Usage: [/sethp <Player Name / Player Id> <Health>]`);
                return;
            }
            let target = this.findPlayer(id);
            if (!target) {
                player.outputChatBox(`Player not found!`);
                return;
            }
            this.setHealth(player, target, parseInt(health) || 100);
        }),

        mp.events.addCommand(this.commandsList.SETARMOR, (player, _fullText, id, armor) => {
            if (!id || !armor) {
                player.outputChatBox(`Usage: [/setarmor <Player Name / Player Id> <Armor>]`);
                return;
            }
            let target = this.findPlayer(id);
            if (!target) {
                player.outputChatBox(`Player not found!`);
                return;
            }
            this.setArmor(player, target, parseInt(armor));
        }),

        mp.events.addCommand(this.commandsList.MAKEFULL, (player, _fullText) => {
            this.makeFull(player);
        }),

        // Weapons
        mp.events.addCommand(this.commandsList.GETGUN, (player, _fullText, weapon, ammo) => {
            if (!weapon || !ammo) {
                player.outputChatBox(`Usage: [/givegun <Weapon Name> <Ammo>]`);
                return;
            }
            this.getGun(player, weapon, parseInt(ammo) || 100);
        }),

        // Revive
        mp.events.addCommand(this.commandsList.REVIVE, (player, _fullText, id) => {
            if (!id) {
                player.outputChatBox(`Usage: [/revive <Player Name / Player Id>]`);
                return;
            }
            let target = this.findPlayer(id);
            if (!target) {
                player.outputChatBox(`Player not found!`);
                return;
            }
            this.revive(player, target);
        }),
        
        // Vehhicles
        mp.events.addCommand(this.commandsList.VEH, (player, _fullText, vehicleName) => {
            if (!vehicleName) {
                player.outputChatBox(`Usage: [/veh <Vehicle Name>]`);
                return;
            }
            this.spawnVehicle(player, vehicleName);
        }),

        mp.events.add("playerCommand", (player, command) => {
            player.outputChatBox(`${command} is not a valid command. Use /help for a list of commands.`);
        }),
    ];

    // Utils
    isStringOrNumber(value: any): "string" | "number" | null {
        if (typeof value === "string") {
          if (!isNaN(Number(value)))  return "number";
          return "string";
        } else if (typeof value === "number") return "number";
        else return null;
    }
}

const commands = new Commands();
export { commands };