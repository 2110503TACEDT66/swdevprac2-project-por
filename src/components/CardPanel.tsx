'use client'
import { useReducer } from "react";
import Productcard from "./ProductCard";
import Link from "next/link";
import { useRef } from "react";
export default function CardPanel(){

    const countRef = useRef(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const compareReducer = (compareList:Set<string>, action:{type:string, campName:string})=>{
        switch(action.type){
            case 'add':{
                return new Set(compareList.add(action.campName))
            }
            case 'remove':{
                compareList.delete(action.campName)
                return new Set(compareList)
            }
            default: return compareList
        }
    }
    const [compareList, dispatchCompare] = useReducer(compareReducer, new Set<string>())
    /**
     * Mock Data for Demonstration Only
     */
    const mockCampRepo = [{cid:"001", name:"ariel",image:"/img/card.jpg"},
    {cid:"002", name:"areil1", image:"/img/card.jpg"}]
    return(
        <div>
            <div style ={{margin: "20px", display:"flex",
            flexDirection:"row", alignContent:"space-around",
        justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
            {
                mockCampRepo.map((campItem)=>(
                    <Link href={`/camp/${campItem.cid}`} className="w-1/5">
                    <Productcard campName={campItem.name} imgSrc={campItem.image}
                    onCompare={(camp:string)=>dispatchCompare({type:'add', campName:camp})}
                    />
                    </Link>
                ))
            }
        </div>
        <div className="w-full text-xl font-medium">Compare List {compareList.size}</div>
            {Array.from(compareList).map((camp)=><div key={camp}
            onClick={(e)=>{e.stopPropagation(); dispatchCompare({type:'remove', campName:camp})}}>{camp}</div>)}

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            text-white shadow-sm"
            onClick = {()=> {countRef.current = countRef.current+1; alert(countRef.current)} } >
                Count with Ref object
            </button>
            <input type="text" placeholder="please fill" className="block text-gray-900 text-sm rounded-lg p-2 m-2 focus:bg-purple-200 focus:ring-2"
            ref={inputRef}/>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            text-white shadow-sm"
            onClick={()=>{if(inputRef.current!=null) inputRef.current.focus()}}>
                Focus Input
            </button>
        </div>
    )
}