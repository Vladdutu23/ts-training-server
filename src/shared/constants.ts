export const SHARED_CONSTANTS = {
	HELLO_WORLD: 'HELLO WORLD!'
};

export enum Weapons {
    MTLION = 148160082,
    ROTTWEILER = 4194021054,
    COW = 94548753,
    COYOTE = 1161062353,
    DEER = 4106648222,
    CAT = 3799318422,
    PIG = 1205296881,
    PUDDLE = 3146768957,
    HUSKY = 3854032506,
    BOAR = 861723357,
    CHICKEN = 955837630,
	DAGGER = 2460120199,
	BAT = 2508868239,
	KNIFE = 2578778090,
	KNUCKLE = 3638508604,
	UNARMED = 2725352035,
    SNS_PISTOL = 3218215474,
    PISTOL = 453432689,
    PISTOL_MK2 = 3219281620,
    PISTOL_50 = 2578377531,
    MACHINE_PISTOL = 3675956304,
    COMBAT_PISTOL = 1593441988,
    NAVY_REVOLVER = 2441047180,
    SMG_MK2 = 2024373456,
    HEAVY_PISTOL = 3523564046,
    REVOLVER = 3249783761,
    DOUBLE_ACTION = 2548703416,
    VINTAGE_PISTOL = 137902532,
    SMG = 736523883,
    MICROSMG = 324215364,
    MINISMG = 3173288789,
    ASSAULTSMG = 4024951519,
    ASSAULTRIFLE_MK2 = 961495388,
    SPECIALCARBINE_MK2 = 2526821735,
    SPECIALCARBINE = 3231910285,
    MG = 2634544996,
    CARBINERIFLE_MK2 = 4208062921,
    CARBINRIFLE = 2210333304,
    TACTICALRIFLE = 3520460075,
    COMPACTRIFLE = 1649403952,
    BULLPUPRIFLE = 2132975508,
    COMBATMG = 2144741730,
    GUSENBERG = 1627465347,
    COMBATPDW = 171789620,
    NIGHTSTICK = 1737195953,
    BOTTLE = 4192643659,
    SWITCH_BLADE = 3756226112,
    MACHETE = 3713923289,
    BATTLEAXE = 3441901897,
    RADAR_GUN = 1709242816,
}

export interface WeaponValue {
    damageModifier: number,
    recoilShakeCameraIntensity?: number
}

type EnumDictionary<T extends string | symbol | number, U> = {
	[K in T]?: U;
};

export const DamageModifiers: EnumDictionary<Weapons, WeaponValue> = {
    [Weapons.SNS_PISTOL]: {
        damageModifier: 0.35714,
        recoilShakeCameraIntensity: 0.1
    } as WeaponValue,
    [Weapons.PISTOL]: {
        damageModifier: 0.46154,
        recoilShakeCameraIntensity: 0.12
    } as WeaponValue,
    [Weapons.COMBAT_PISTOL]: { 
        damageModifier: 0.45,
        recoilShakeCameraIntensity: 0.09
    } as WeaponValue,
    [Weapons.HEAVY_PISTOL]: { 
        damageModifier: 0.37500,
        recoilShakeCameraIntensity: 0.10
    } as WeaponValue,
    [Weapons.MACHINE_PISTOL]: {
        damageModifier: 0.48148,
        recoilShakeCameraIntensity: 0.11
    } as WeaponValue,
    [Weapons.PISTOL_MK2]:  {
        damageModifier: 0.53125,
        recoilShakeCameraIntensity: 0.11
    } as WeaponValue,
    [Weapons.MINISMG]: {
        damageModifier: 0.47619047619,
        recoilShakeCameraIntensity: 0.14
    } as WeaponValue,
    [Weapons.ASSAULTSMG]: {
        damageModifier: 0.64,
        recoilShakeCameraIntensity: 0.12 
    } as WeaponValue,
    [Weapons.MICROSMG]: { 
        damageModifier: 0.66667,
        recoilShakeCameraIntensity: 0.10
    } as WeaponValue,
    [Weapons.COMPACTRIFLE]: { 
        damageModifier: 0.41176,
        recoilShakeCameraIntensity: 0.10
    } as WeaponValue,
    [Weapons.VINTAGE_PISTOL]: {
        damageModifier: 0.85294,
        recoilShakeCameraIntensity: 0.12
    } as WeaponValue,
    [Weapons.GUSENBERG]: {
        damageModifier: 0.47059,
        recoilShakeCameraIntensity: 0.11
    } as WeaponValue,
    [Weapons.SMG_MK2]: {
        damageModifier: 0.625,
        recoilShakeCameraIntensity: 0.10
    } as WeaponValue,
    [Weapons.ASSAULTRIFLE_MK2]: { 
        damageModifier: 0.45000,
        recoilShakeCameraIntensity: 0.10
    } as WeaponValue,
    [Weapons.MG]: { 
        damageModifier: 0.45000,
        recoilShakeCameraIntensity: 0.10
    } as WeaponValue,
    [Weapons.DOUBLE_ACTION]: { 
        damageModifier: 0.53086,
        recoilShakeCameraIntensity: 0.14
    } as WeaponValue,
    [Weapons.NAVY_REVOLVER]: {
        damageModifier: 0.43750,
        recoilShakeCameraIntensity: 0.25
    } as WeaponValue,
    [Weapons.COMBATMG]: {
        damageModifier: 0.45,
        recoilShakeCameraIntensity: 0.10
    } as WeaponValue,
    
    // Police
    [Weapons.PISTOL_50]: {
        damageModifier: 0.84314,
        recoilShakeCameraIntensity: 0.16
    } as WeaponValue,
    [Weapons.COMBATPDW]: { 
        damageModifier: 0.5,
        recoilShakeCameraIntensity: 0.13
    } as WeaponValue,
    [Weapons.CARBINRIFLE]: { 
        damageModifier: 0.53741935483,
        recoilShakeCameraIntensity: 0.10
    } as WeaponValue,
    [Weapons.SPECIALCARBINE_MK2]: { 
        damageModifier: 0.65625,
        recoilShakeCameraIntensity: 0.10
    } as WeaponValue,
    [Weapons.SMG]:  {
        damageModifier: 0.68182,
        recoilShakeCameraIntensity: 0.11
    } as WeaponValue,
    [Weapons.TACTICALRIFLE]: { 
        damageModifier: 0.64706,
        recoilShakeCameraIntensity: 0.09
    } as WeaponValue,
    [Weapons.CARBINERIFLE_MK2]: { 
        damageModifier: 0.63638,
        recoilShakeCameraIntensity: 0.10
    } as WeaponValue,
    [Weapons.NIGHTSTICK]: {
        damageModifier: 0.18072289156,
        recoilShakeCameraIntensity: 0.01
    } as WeaponValue,
};