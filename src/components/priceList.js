"use client"

import { useEffect, useState } from "react"

export default function PriceList({ pricing }) {
    const [selectedCategory, selectCategory] = useState();
    useEffect(() => {
        selectCategory(pricing[0]);
    }, [])
    return (
        <div className="flex container mx-auto 
            flex-col py-6 gap-6
            main:flex-row main:py-12 main:gap-12
        ">
            <div className="grid grid-cols-3 main:flex flex-col gap-2.5 main:w-[360px]">
                {pricing.map((_category, _i) =>
                    <button key={_i} onClick={() => selectCategory(_category)}
                        className={`flex justify-center px-4 py-2 main:justify-start main:px-6 main:py-4 border rounded-full transition-colors ${selectedCategory?.name === _category.name ? "border-grey-4" : "border-transparent"}`}
                    >
                        {selectedCategory?.name === _category.name ?
                            <h5 className="text-primary text-center main:text-start">{_category.name}</h5>
                            :
                            <p className="text-center main:text-start">{_category.name}</p>
                        }
                    </button>
                )}
            </div>

            {pricing.map((_category, _i) =>
                <div key={_i} className={`flex flex-col gap-4 flex-1 ${selectedCategory?.name === _category.name ? "" : "hidden"}`}>
                    {_category.items?.map((_item, _j) =>
                        <div key={_j} className="flex justify-between items-center p-2 pl-6 border-b border-grey-4">
                            <p>{_item.name}</p>
                            <p className="px-4 py-2 bg-additional rounded-full">{_item.price}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}