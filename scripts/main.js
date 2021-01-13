import { useFish } from "scripts/FishDataProvider.js";

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

