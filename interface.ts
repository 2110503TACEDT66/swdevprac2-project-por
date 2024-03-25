interface CampgroundItem {
    _id : string,
    name : string,
    address: string,
    tel:string,
    __V:number,
    
}

interface CampgroundJson {
    success : boolean,
    count: number,
    pagination: Object,
    data:CampgroundItem[]
}