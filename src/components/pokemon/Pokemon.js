import axios from "axios";

class Pokemon {
    constructor(url, img, name, hp, type, weight, height) {
        this.url = url;
        this.img = img;
        this.name = name;
        this.hp = hp;
        this.type = type;
        this.weight = weight;
        this.height = height;
    }

    async fetchData(url) {
        const result = await axios.get(url);
        return result;
    }

    setData(url) {
        this.fetchData(url).then(r => {
            this.name = r.data.species.name;
            this.img = r.data.sprites.other.dream_world.front_default;
            this.hp = r.data.stats[0].base_stat;
            this.type = r.data.types[0].type.name;
            this.weight = r.data.weight;
            this.height = r.data.height;
        })


    }
}

export default Pokemon;