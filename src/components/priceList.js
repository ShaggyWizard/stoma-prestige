"use client"

import { useEffect, useState } from "react"

export default function PriceList({ nodes }) {
    const [selectedCategory, selectCategory] = useState();
    useEffect(() => {
        selectCategory(nodes[0]);
    }, [])
    return (
        <div className="flex gap-12 container mx-auto py-12">
            <div className="flex flex-col gap-2.5 w-[360px]">
                {nodes.map((node, i) =>
                    <button key={i} onClick={() => selectCategory(node)}
                        className={`px-6 py-4 border rounded-full transition-colors ${selectedCategory?.category === node.category ? "border-grey-4" : "border-transparent"}`}
                    >
                        {selectedCategory?.category === node.category ?
                            <h5 className="text-primary">{node.category}</h5>
                            :
                            <p className="text-start">{node.category}</p>
                        }
                    </button>
                )}
            </div>
            <div className="flex flex-col gap-4 flex-1">
                {selectedCategory?.menu?.map((node, i) =>
                    <div key={i} className="flex justify-between items-center p-2 pl-6 border-b border-grey-4">
                        <p>{node.name}</p>
                        <p className="px-4 py-2 bg-additional rounded-full">{node.price}</p>
                    </div>
                )}
            </div>
        </div>
    )
}