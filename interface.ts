interface CampgroundItem {
    name : string,
    address: string,
    tel:string,
    image:string,
    __v:number,
    id:string
}

interface CampgroundJson {
    success : boolean,
    count: number,
    pagination: Object,
    data:CampgroundItem[]
}