import { DamageModifiers, Weapons } from "@shared/constants";


class WeaponsUtils {
    init(): void {
        mp.gui.chat.push("Weapons Utils initialized.");
        return;
    }

    events = [
        mp.events.add('render', function() {

            const weaponHash = mp.players.local.weapon;
            const damageMod = DamageModifiers[weaponHash as Weapons];

            if (damageMod !== undefined) {
                mp.game.player.setWeaponDamageModifier(damageMod.damageModifier);
                if (damageMod.recoilShakeCameraIntensity && mp.players.local.isShooting()) {
                    mp.gui.chat.push(`shakeGameplayCam value: ${damageMod.recoilShakeCameraIntensity}`);
                    mp.game.cam.shakeGameplayCam('SMALL_EXPLOSION_SHAKE', damageMod.recoilShakeCameraIntensity);
                }
            } else mp.game.player.setWeaponDamageModifier(1);
        })
    ];
}

const weaponsUtils = new WeaponsUtils();
export { weaponsUtils };