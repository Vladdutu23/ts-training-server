export const SHARED_CONSTANTS = {
	HELLO_WORLD: 'HELLO WORLD!'
};

type EnumDictionary<T extends string | symbol | number, U> = {
	[K in T]?: U;
};

// Weapon Damage Values
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

// Weapons Hash
export const weaponNameToHash: EnumDictionary<string, string> = {
    "sniperrifle": "100416529",
    "fireextinguisher": "101631238",
    "compactlauncher": "125959754",
    "snowball": "126349499",
    "vintagepistol": "137902532",
    "combatpdw": "171789620",
    "heavysniper_mk2": "177293209",
    "heavysniper": "205991906",
    "autoshotgun": "317205821",
    "microsmg": "324215364",
    "wrench": "419712736",
    "pistol": "453432689",
    "pumpshotgun": "487013001",
    "appistol": "584646201",
    "ball": "600439132",
    "molotov": "615608432",
    "ceramicPistol": "727643628",
    "smg": "736523883",
    "stickybomb": "741814745",
    "petrolcan": "883325847",
    "stungun": "911657153",
    "stone_hatchet": "940833800",
    "assaultrifle_mk2": "961495388",
    "heavyshotgun": "984333226",
    "minigun": "1119849093",
    "golfclub": "1141786504",
    "raycarbine": "1198256469",
    "flaregun": "1198879012",
    "flare": "1233104067",
    "grenadelauncher_smoke": "1305664598",
    "hammer": "1317494643",
    "pumpshotgun_mk2": "1432025498",
    "combatpistol": "1593441988",
    "gusenberg": "1627465347",
    "compactrifle": "1649403952",
    "hominglauncher": "1672152130",
    "nightstick": "1737195953",
    "marksmanrifle_mk2": "1785463520",
    "railgun": "1834241177",
    "sawnoffshotgun": "2017895192",
    "smg_mk2": "2024373456",
    "bullpuprifle": "2132975508",
    "firework": "2138347493",
    "combatmg": "2144741730",
    "carbinerifle": "2210333304",
    "crowbar": "2227010557",
    "bullpuprifle_mk2": "2228681469",
    "snspistol_mk2": "2285322324",
    "flashlight": "2343591895",
    "proximine": "2381443905",
    "navyrevolver": "2441047180",
    "dagger": "2460120199",
    "grenade": "2481070269",
    "poolcue": "2484171525",
    "bat": "2508868239",
    "specialcarbine_mk2": "2526821735",
    "doubleaction": "2548703416",
    "pistol50": "2578377531",
    "knife": "2578778090",
    "mg": "2634544996",
    "bullpupshotgun": "2640438543",
    "bzgas": "2694266206",
    "unarmed": "2725352035",
    "grenadelauncher": "2726580491",
    "musket": "2828843422",
    "advancedrifle": "2937143193",
    "raypistol": "2939590305",
    "rpg": "2982836145",
    "rayminigun": "3056410471",
    "pipebomb": "3125143736",
    "hazardCan": "3126027122",
    "minismg": "3173288789",
    "snspistol": "3218215474",
    "pistol_mk2": "3219281620",
    "assaultrifle": "3220176749",
    "specialcarbine": "3231910285",
    "revolver": "3249783761",
    "marksmanrifle": "3342088282",
    "revolver_mk2": "3415619887",
    "battleaxe": "3441901897",
    "heavypistol": "3523564046",
    "knuckle": "3638508604",
    "machinepistol": "3675956304",
    "combatmg_mk2": "3686625920",
    "marksmanpistol": "3696079510",
    "machete": "3713923289",
    "switchblade": "3756226112",
    "assaultshotgun": "3800352039",
    "dbshotgun": "4019527611",
    "assaultsmg": "4024951519",
    "hatchet": "4191993645",
    "bottle": "4192643659",
    "carbinerifle_mk2": "4208062921",
    "parachute": "4222310262",
    "smokegrenade": "4256991824",
    "tacticalrifle": "3520460075",
    "precisionrifle": "1853742572",
    "metaldetector": "3684886537",
    "pistolxm3": "465894841",
    "candycane": "1703483498",
    "railgunxm3": "4272043364",   
    "acidpackage": "4159824478",
    "tecpistol": "350597077",
    "radargun": "1709242816",
    "battlerifle": "1924557585",
    "snowlauncher": "62870901",
    "hackingdevice": "485882440",
    "gadgetpistol": "1470379660",
    "emplauncher": "3676729658"
};

export function getWeaponHashByName(weaponName: string): string | undefined {
    return weaponNameToHash[weaponName];
}