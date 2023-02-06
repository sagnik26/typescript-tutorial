interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}


interface Story {
    createStory(): void
}

class Intagram implements TakePhoto, Story {
    constructor(
       public cameraMode: string,
       public filter: string,
       public burst: number
    ) {}
        
    createStory(): void {
        console.log('Create Story')
    }
}


class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}
}
