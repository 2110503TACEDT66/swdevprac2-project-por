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
    pagination?: any,
    data:CampgroundItem[]
}

export interface BookingItem{
    _id:string,
    checkInDate:string,
    checkOutDate:string,
    user:string,
    campground:{
        _id:string,
        name : string,
        address: string,
        tel:string,
        image:string,
        id:string
    },
    createdAt:string,
    __v:number
}

export interface BookingJson{
    success : boolean , 
    count : number ,
    data : BookingItem[]
}