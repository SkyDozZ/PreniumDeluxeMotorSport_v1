interface Car {
    images: {
        frontQuarter: string,
        rearQuarter: string,
        front: string,
        rear: string,
        side: string
    },
    manufacturer: string,
    model: string,
    seats: number,
    topSpeed: {
        mph: number,
        kmh: number
    },
    speed: number,
    acceleration: number,
    handling: number
}