/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/no-namespace */

class DebugLabel {
    init(): void {
        mp.gui.chat.push("Debug Label initialized.");
        return;
    }

    enabled = false;

    drawText(text: string, position: any) {
        mp.game.graphics.drawText(text, position, {
            font: 0,
            color: [255, 255, 255, 185],
            scale: [0.25, 0.25],
            outline: true,
            centre: true
        });
    }

    events = [
        mp.events.add('debuglabel::change-state', () => {
            this.enabled = !this.enabled;
            mp.gui.chat.push(`Debug Labels status: ${this.enabled}`);
        }),
    
        mp.events.add('render', () => {
            if (this.enabled) {
                mp.vehicles.forEachInStreamRange((vehicle) => {
                    if (mp.players.local.position.subtract(vehicle.position).length() < 10) {
                        const drawPosition = [vehicle.position.x, vehicle.position.y, vehicle.position.z + 0.3];
                        this.drawText(`~b~Id: ~w~${vehicle.remoteId}\n~b~Model: ~w~${mp.game.ui.getLabelText(mp.game.vehicle.getDisplayNameFromVehicleModel(vehicle.model))}\n~b~Position: ~w~${vehicle.position.x.toFixed(2)}, ${vehicle.position.y.toFixed(2)}, ${vehicle.position.z.toFixed(2)}\n`, drawPosition);
                        this.drawText(`\n\n\n\n~b~Heading: ~w~${vehicle.getHeading().toFixed(2)}\n~b~Body Health: ~w~${vehicle.getBodyHealth()}\n~b~Engine Health: ~w~${vehicle.getEngineHealth()}`, drawPosition);
                    }
                });
            }
        })
    ];
}

const debugLabel = new DebugLabel();
export { debugLabel };