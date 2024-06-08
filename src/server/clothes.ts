import { ClothesComponents } from "@shared/constants";

class Clothes {
    init(): void {
        return;
    }

    malePedHash = 1885233650;
    femalePedHash = 2627665880;

    removeClothes(player: PlayerMp): void {
        switch (player.model) {
            case this.malePedHash:
                player.setClothes(ClothesComponents.TOP, 15, 0, 2);
                player.setClothes(ClothesComponents.TORSO, 15, 0, 2);
                player.setClothes(ClothesComponents.LEGS, 61, 0, 2);
                player.setClothes(ClothesComponents.SHOES, 34, 0, 2);
                player.setClothes(ClothesComponents.UNDERSHIRT, 15, 0, 2);
                break;
            case this.femalePedHash:
                player.setClothes(ClothesComponents.TOP, 15, 0, 2);
                player.setClothes(ClothesComponents.TORSO, 15, 0, 2);
                player.setClothes(ClothesComponents.LEGS, 17, 0, 2);
                player.setClothes(ClothesComponents.SHOES, 35, 0, 2);
                player.setClothes(ClothesComponents.UNDERSHIRT, 14, 0, 2);
                break;
            default:
                player.outputChatBox('You are not allowed to change your clothes.');
                break;
        }
    }
}

const clothes = new Clothes();
export { clothes };