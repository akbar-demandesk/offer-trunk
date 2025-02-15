// const DataTable = ({ activeTab, filteredData }) => {
//   return (
//     <table className="w-full border-collapse border border-gray-300 mt-4">
//       <thead className="bg-blue-600 text-white">
//         <tr>
//           <th className="border p-2">NAME</th>
//           {activeTab === "offers" && <th className="border p-2">PAYOUT</th>}
//           {activeTab !== "traffic" && <th className="border p-2">NETWORK</th>}
//           {activeTab !== "networks" && (
//             <th className="border p-2">COUNTRIES</th>
//           )}
//         </tr>
//       </thead>
//       <tbody>
//         {filteredData.length > 0 ? (
//           filteredData.map((item, index) => (
//             <tr key={index} className="border">
//               <td className="border p-2 flex items-center">
//                 {item.img && (
//                   <img
//                     src={`https://api.offertrunk.com/uploads/${item?.img}`}
//                     className="w-10 h-10 mr-2"
//                     alt="Offer"
//                   />
//                 )}
//                 {item.name}
//               </td>
//               {activeTab === "offers" && (
//                 <td className="border p-2">${item.payout}</td>
//               )}
//               {activeTab !== "traffic" && (
//                 <td className="border p-2">{item.network_name || "-"}</td>
//               )}
//               {activeTab !== "networks" && (
//                 <td className="border p-2">{item.geo || "-"}</td>
//               )}
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="4" className="text-center p-4">
//               No data available
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// };

// export default DataTable;

///2nd one is working as expected
// import Link from "next/link";
// import { useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import Image from "next/image";

// const DataTable = ({ activeTab, filteredData }) => {
//   const itemsPerPage = 10;
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const renderPageNumbers = () => {
//     const pages = [];
//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       if (currentPage > 3) pages.push(1, "...");

//       for (
//         let i = Math.max(2, currentPage - 1);
//         i <= Math.min(totalPages - 1, currentPage + 1);
//         i++
//       ) {
//         pages.push(i);
//       }

//       if (currentPage < totalPages - 2) pages.push("...", totalPages);
//     }
//     return pages;
//   };
//   const slugify = (text) =>
//     text
//       .toString()
//       .toLowerCase()
//       .trim()
//       .replace(/\s+/g, "-")
//       .replace(/[^\w-]+/g, "")
//       .replace(/--+/g, "-");

//   return (
//     <div className="p-4">
//       <table className="w-full border-collapse mt-4 shadow-lg rounded-lg overflow-hidden">
//         <thead className="bg-gradient-to-r from-[#295F98] to-[#E1D7C6] text-white">
//           <tr>
//             <th className="border-b-2 p-4 text-lg font-semibold">NAME</th>
//             {activeTab === "offers" && (
//               <th className="border-b-2 p-4 text-lg font-semibold">PAYOUT</th>
//             )}
//             {activeTab !== "traffic" && (
//               <th className="border-b-2 p-4 text-lg font-semibold">NETWORK</th>
//             )}
//             {activeTab !== "networks" && (
//               <th className="border-b-2 p-4 text-lg font-semibold">
//                 COUNTRIES
//               </th>
//             )}
//             {activeTab === "offers" && (
//               <th className="border-b-2 p-4 text-lg font-semibold">
//                 VISIT OFFER
//               </th>
//             )}
//           </tr>
//         </thead>
//         <tbody>
//           {currentData.length > 0 ? (
//             currentData.map((item, index) => {
//               // Create slug inside the map callback
//               const slug = slugify(item.name);

//               return (
//                 <tr
//                   key={index}
//                   className="border-b transition-all duration-300 hover:bg-[#E1D7C6]"
//                 >
//                   <td className="p-4 flex items-center space-x-2">
//                     <Link href={`/offer/${slug}`} legacyBehavior>
//                       <a className="flex items-center w-full">
//                         <Image
//                           src={
//                             item.img
//                               ? `https://api.offertrunk.com/images/${item.img}`
//                               : "https://via.placeholder.com/70"
//                           }
//                           alt={`Offer: ${item.name}`}
//                           width={50}
//                           height={30}
//                           className="mr-2 rounded-lg"
//                         />
//                         {item.name}
//                       </a>
//                     </Link>
//                   </td>
//                   {activeTab === "offers" && (
//                     <td className="p-4 text-center">${item.payout}</td>
//                   )}
//                   {activeTab !== "traffic" && (
//                     <td className="p-4 text-center">
//                       {item.network_name || "-"}
//                     </td>
//                   )}
//                   {activeTab !== "networks" && (
//                     <td className="p-4 text-center">{item.geo || "-"}</td>
//                   )}
//                   {activeTab === "offers" && (
//                     <td className="py-3 px-4">
//                       <a
//                         href={item.offer_link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 underline"
//                         onClick={(e) => e.stopPropagation()} // Prevent row click when link is clicked
//                       >
//                         Visit Offer
//                       </a>
//                     </td>
//                   )}
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td
//                 colSpan="5"
//                 className="text-center p-4 text-xl font-semibold text-gray-500"
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;

// src/components/Elements/DataTable.jsx

import Link from "next/link";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const DataTable = ({ activeTab, filteredData }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 3) pages.push(1, "...");

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...", totalPages);
    }
    return pages;
  };

  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");

  return (
    <>
      <Head>
        <title>
          {activeTab === "offers"
            ? "Best Affiliate Offers"
            : activeTab === "networks"
            ? "Affiliate Networks"
            : "Traffic Sources"}{" "}
          - Your Website
        </title>
        <meta
          name="description"
          content={`Browse ${
            activeTab === "offers"
              ? "the best affiliate offers"
              : activeTab === "networks"
              ? "top affiliate networks"
              : "trusted traffic sources"
          } with detailed insights and data.`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Affiliate Offers, Networks & Traffic Sources - Your Website"
        />
        <meta
          property="og:description"
          content="Find the best offers, networks, and traffic sources in the affiliate industry."
        />
      </Head>

      <div className="p-4">
        <table className="w-full border-collapse mt-4 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-[#295F98] to-[#E1D7C6] text-white">
            <tr>
              <th className="border-b-2 p-4 text-lg font-semibold">NAME</th>
              {activeTab === "offers" && (
                <>
                  <th className="border-b-2 p-4 text-lg font-semibold">
                    PAYOUT
                  </th>
                  <th className="border-b-2 p-4 text-lg font-semibold">
                    NETWORK
                  </th>
                  <th className="border-b-2 p-4 text-lg font-semibold">
                    COUNTRY
                  </th>
                </>
              )}
              {activeTab === "networks" && (
                <>
                  <th className="border-b-2 p-4 text-lg font-semibold">
                    DESCRIPTION
                  </th>
                  <th className="border-b-2 p-4 text-lg font-semibold">
                    OFFER COUNT
                  </th>
                </>
              )}
              {activeTab === "traffic" && (
                <>
                  <th className="border-b-2 p-4 text-lg font-semibold">TYPE</th>
                  <th className="border-b-2 p-4 text-lg font-semibold">
                    MOBILE
                  </th>
                  <th className="border-b-2 p-4 text-lg font-semibold">
                    DESKTOP
                  </th>
                  <th className="border-b-2 p-4 text-lg font-semibold">
                    RETARGETING
                  </th>
                  <th className="border-b-2 p-4 text-lg font-semibold">
                    SELF-SERVE
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((item, index) => {
                const slug = item.name ? slugify(item.name) : "default-slug";
                return (
                  <tr
                    key={index}
                    className="border-b transition-all duration-300 hover:bg-[#E1D7C6]"
                  >
                    <td className="p-4 flex items-center space-x-2">
                      <Link
                        passHref
                        href={
                          item.name
                            ? activeTab === "offers"
                              ? `/offer/${slug}`
                              : activeTab === "networks"
                              ? `/network/${slug}`
                              : `/traffic/${slug}`
                            : "#"
                        }
                        legacyBehavior
                      >
                        <a className="flex items-center w-full">
                          {item.img && (
                            <Image
                              src={`https://api.offertrunk.com/images/${item.img}`}
                              alt={`Affiliate ${activeTab} - ${
                                item.name || "Unknown"
                              }`}
                              width={50}
                              height={30}
                              className="mr-2 rounded-lg"
                            />
                          )}
                          {item.name || (
                            <span className="text-gray-500">No Name</span>
                          )}
                        </a>
                      </Link>
                    </td>
                    {activeTab === "offers" && (
                      <>
                        <td className="p-4 text-center">${item.payout}</td>
                        <td className="p-4 text-center">
                          {item.network_name || "-"}
                        </td>
                        <td className="p-4 text-center">{item.geo || "-"}</td>
                      </>
                    )}
                    {activeTab === "networks" && (
                      <>
                        <td className="p-4 text-center">
                          {item.description || "-"}
                        </td>
                        <td className="p-4 text-center">
                          {item.offer_count || "0"}
                        </td>
                      </>
                    )}
                    {activeTab === "traffic" && (
                      <>
                        <td className="p-4 text-center">{item.type || "-"}</td>
                        <td className="p-4 text-center">
                          {item.mobile === 1 ? "Yes" : "No"}
                        </td>
                        <td className="p-4 text-center">
                          {item.desktop === 1 ? "Yes" : "No"}
                        </td>
                        <td className="p-4 text-center">
                          {item.retargeting === 1 ? "Yes" : "No"}
                        </td>
                        <td className="p-4 text-center">
                          {item.self_serve === 1 ? "Yes" : "No"}
                        </td>
                      </>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-4 text-xl font-semibold text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <FaAngleLeft />
            </button>
            {renderPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <FaAngleRight />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DataTable;
