export interface CampgroundItem {
    name : string,
    address: string,
    tel:string,
    image:string,
    __v:number,
    id:string
}

export interface CampgroundJson {
    success : boolean,
    count: number,
    pagination: Object,
    data:CampgroundItem[]
}

export interface BookingItem{
    campgroundId:string,
    campgroundName:string,
    checkInDate:string,
    checkOutDate:string,
    numOfDays:number
}