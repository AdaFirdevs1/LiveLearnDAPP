import * as borsh from "@project-serum/borsh";

export class Review {
    name_surname: string;
    num_of_training: number;
    phone_num: string;

    constructor(name_surname: string, num_of_training: number, phone_num: string) {
        this.name_surname = name_surname;
        this.num_of_training = num_of_training;
        this.phone_num = phone_num;
    }

    borshInstructionSchema = borsh.struct([
        borsh.u8("variant"),
        borsh.str("name_surname"),
        borsh.u8("num_of_training"),
        borsh.str("phone_num"),
    ]);

    static borshAccountSchema = borsh.struct([
        borsh.bool("initialized"),
        borsh.u8("num_of_training"),
        borsh.str("phone_num"),
        borsh.str("name_surname"),
    ]);

    serialize(): Buffer {
        const buffer = Buffer.alloc(1000);
        this.borshInstructionSchema.encode({ ...this, variant: 0 }, buffer);
        return buffer.slice(0, this.borshInstructionSchema.getSpan(buffer));
    }

    static deserialize(buffer?: Buffer): Review | null {
        if (!buffer) {
            return null;
        }

        try {
            const { name_surname, num_of_training, phone_num } =
                this.borshAccountSchema.decode(buffer);
            return new Review(name_surname, num_of_training, phone_num);
        } catch (e) {
            console.log("Deserialization error:", e);
            console.log(buffer);
            return null;
        }
    }
}
