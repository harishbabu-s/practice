import React, { useState } from 'react';

const CollapsibleItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        if (item.children) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div>
            <div
                onClick={toggle}
                style={{ cursor: 'pointer', padding: '5px 0', fontWeight: 'bold' }}
            >
                {item.title}
                {item.children ? (isOpen ? ' [-]' : ' [+]') : null}
            </div>

            {isOpen && item.children && (
                <div style={{ paddingLeft: '20px' }}>
                    {item.children.map((child, index) => (
                        <CollapsibleItem key={index} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

const CollapsibleList = () => {
    const data = [
        {
            title: '1. Customers',
            children: [
                { title: '1.1 Customers List' },
                {
                    title: '1.2 Customers History',
                    children: [
                        { title: '1.2.1 Customer Details' },
                        { title: '1.2.2 Customer Department Details' },
                    ],
                },
            ],
        },
        {
            title: '2. Users',
            children: [
                { title: '2.1 User History' },
                { title: '2.2 Users Mobile Number' },
            ],
        },
        {
            title: '3. Documents',
            children: [
                { title: '3.1 Documents History' },
                { title: '3.2 Document List' },
            ],
        },
    ];

    return (
        <div>
            {data.map((item, index) => (
                <CollapsibleItem key={index} item={item} />
            ))}
        </div>
    );
};

export default CollapsibleList;


// // 1.Customers
// // 1.1CustomersList
// // 1.2CustomersHistory
// // 1.2.1.customer details
// // 1.2.2 customer department details
// // 2.users
// // 2.1 userhistory
// // 2.2usersmobilenumber
// // 3 Documents
// // 3.1DocumentsHistory
// // 3.2DocumentList


// import React, { useState } from 'react'

// const CollapsibleList = () => {
//     const [selected, setSelected] = useState('');

//     const Data =
//     {
//         Customers: {
//             CustomerList: [],
//             CustomersHistory: {
//                 CustomerDetails: [],
//                 CustomerDepartmentDetails: []
//             }

//         },
//         Users: {
//             userHistory: [],
//             userMobileNumber: []
//         }
//     }

//     const dataObjects = (value) => {
//         value.map((item) => {
//             return (
//                 <ul>
//                     {item.array.forEach(element => {
//                         <li> {element}</li>
//                     })};
//                 </ul>
//             )

//         })
//     }

//     const handleClick = () => {
//         setCodes(uniqueCodes);
//     }

//     return (
//         <div>
//             {/* {dataObjects(Data)} */}
//             <div className="d-flex flex-wrap fs-4">
//                 <h5>In room :</h5>
//                 {codes.map((code, index) => (
//                     <span key={index} className="badge mx-1" style={{ backgroundColor: `#${code}`, width: "20px", height: "20px" }}> </span>
//                 ))}
//             </div>
//             <button type="button" className="btn btn-primary" onClick={handleClick()}>Click</button>
//         </div>
//     )
// }

// export default CollapsibleList;

