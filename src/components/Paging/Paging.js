// import React from 'react'

// const Paging = ({totalPages}) => {
//     const pages = [...Array(totalPages).keys()].map(num => num+1);

//     return (
//         <>
//             {
//                pages.map((num) => {
//                 <button key={num}>{num}</button>
//             })
//            } 
//         </>
//     )
// }
// export default Paging

import React from 'react'

const Paging = ({totalPages, buttonClick}) => {
    const pages = [...Array(totalPages).keys()].map(num => num+1);
    console.log(pages);

    return (
        <>
        <div className="btn-wrapper">
            {
                pages.map((num) => {
                    return <div className="btn" key={num}><button  onClick={() => buttonClick(num)}>{num}</button></div>
                })
            }
        </div>
        </>
    )
}

export default Paging
