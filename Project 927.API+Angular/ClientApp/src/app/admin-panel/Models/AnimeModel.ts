import { v4 as uuidv4 } from 'uuid';

export class AnimeModel {
    public id: number;
    public title: string;
    public description: string;
    public image: string;
    public releaseDate: string;

    constructor(title: string = "", description: string = "", releaseDate: string = "", image: string = "") {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.image = image;
        this.releaseDate = releaseDate;
    }

    isValid(): boolean {
        if (
            this.title == "" ||
            this.image == "" ||
            this.description == "" ||
            this.releaseDate == ""
            ) {
            return false;
        } else {
            return true;
        }

    }
}
