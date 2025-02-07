// import React from "react";
// import "./List.css";

// const data = [
//   {
//     title: "Wedding Requisites",
//     categories: [
//       { title: "Banquet Halls", image: "/images/banquet.jpg", alt: "Banquet Hall" },
//       { title: "Bridal Requisite", image: "/images/bridal.jpg", alt: "Bridal Items" },
//       { title: "Caterers", image: "/images/caterers.jpg", alt: "Caterers" },
//     ],
//   },
//   {
//     title: "Beauty & Spa",
//     categories: [
//       { title: "Beauty Parlours", image: "/images/beauty.jpg", alt: "Beauty Parlours" },
//       { title: "Spa & Massages", image: "/images/spa.jpg", alt: "Spa" },
//       { title: "Salons", image: "/images/salons.jpg", alt: "Salons" },
//     ],
//   },
//   {
//     title: "Repairs & Services",
//     categories: [
//       { title: "AC Service", image: "/images/ac.jpg", alt: "AC Repair" },
//       { title: "Car Service", image: "/images/car.jpg", alt: "Car Service" },
//       { title: "Bike Service", image: "/images/bike.jpg", alt: "Bike Service" },
//     ],
//   },
//   {
//     title: "Daily Needs",
//     categories: [
//       { title: "Movies", image: "/images/movies.jpg", alt: "Movies" },
//       { title: "Grocery", image: "/images/grocery.jpg", alt: "Grocery" },
//       { title: "Electricians", image: "/images/electrician.jpg", alt: "Electrician" },
//     ],
//   },
// ];

// const App = () => {
//   return (
//     <div className="app">
//       {data.map((section, index) => (
//         <div key={index} className="category-section">
//           <h2 className="section-title">{section.title}</h2>
//           <div className="category-grid">
//             {section.categories.map((category, idx) => (
//               <div key={idx} className="category-card">
//                 <img src={category.image} alt={category.alt} className="category-image" />
//                 <p className="category-title">{category.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;


import React from "react";
import "./List.css"

const categories = [
  {
    title: "Wedding Requisites",
    services: [
      { name: "Banquet Halls", img: "https://www.tagvenue.com/resize/4b/d7/widen-1680-noupsize;38132-sapphire-room-room.jpg" },
      { name: "Bridal Requisite", img: "https://m.media-amazon.com/images/I/91ebLcfKmCL.AC_SX535.jpg" },
      { name: "Caterers", img: "https://th.bing.com/th/id/OIP.8bmNj0XZ_L4GYPUp5g2wIwHaEK?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    ],
  },
  {
    title: "Beauty & Spa",
    services: [
      { name: "Beauty Parlours", img: "https://th.bing.com/th?q=Beauty+Parlour+Shop+Design&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
      { name: "Spa & Massages", img: "https://th.bing.com/th/id/OIP.VNa3ANlHwz8-f0Aj6uNujQHaGB?w=249&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
      { name: "Salons", img: "data:image/jpeg;base64,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" },
    ],
  },
  {
    title: "Repairs & Services",
    services: [
      { name: "AC Service", img: "https://imgs.search.brave.com/iJgIkdG0-jwjKndaW15WHmbIHV7oXt-TNkUDphsiolw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS9tZC9kbXRt/cGwvMTFlZjVjMDMt/ZjAyMy00YWRkLThl/ZjgtMDllZThiNjI4/ODFhL2RtczNyZXAv/bXVsdGkvb3B0L2Vs/ZWN0cmljaWFuX2Zp/eGluZ19oZWF0aW5n/LTE5MjB3LmpwZw" },
      { name: "Car Service", img: "" },
      { name: "Bike Service", img: "https://imgs.search.brave.com/IN7CojTxOFxZ-_Xq1c2QWtSEwiOV-NF0IEjdk4djqX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTI1/Mzg1OTMwL3Bob3Rv/L2V4cGVyaWVuY2Ut/d29tYW4tYmlrZS1i/dWlsZGVyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DdFQ0/VzZ3a3lQTERLLWJ1/MlNQWW50a0FhQmhZ/R3laNTZOZHRDMEQ0/dW9vPQ" },
    ],
  },
  {
    title: "Daily Needs",
    services: [
      { name: "Movies", img: "https://files.oaiusercontent.com/file-WE4z1st8yohPXuJtecuZZu?se=2025-02-07T10%3A06%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbdea154c-9310-4350-a296-1d40756deb4d.webp&sig=LChamtDf4mn%2BV6qzE8tZAAGTBW4uDlz/faME9WPseRo%3D" },
      { name: "Grocery", img: "https://imgs.search.brave.com/Z7PLruNS3GiRTwBzEpw8uNiVzv3FCn8m3gfssVBqPBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/OTAzMjQyNS9waG90/by9zaG9wcGluZy1i/YWctZnVsbC1vZi1o/ZWFsdGh5LWZvb2Qt/b24tYmx1ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ODU2/WHBxUmdxOEJqOU1y/MjhWekFkVy1pVHlI/RWpfZFcwMW02U1BQ/SHNPVT0" },
      { name: "Electricians", img: "https://imgs.search.brave.com/1f_QRmEJiVbJvjmWhghA76Rrw3SEn7jCJG08T3Dq-t8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWZl/cmVuY2UtbWVkaWEu/YW5naS5jb20vdmlz/aXRvci9lbGVjdHJp/Y2FsXzU0LmpwZw" },
    ],
  },
];

const ServicePage = () => {
  return (
    <div className="p-6 grid gap-6 grid-cols-4">
      {categories.map((category, index) => (
        <div key={index} className="border p-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">{category.title}</h2>
          <div className="service-grid">
            {category.services.map((service, idx) => (
              <div key={idx} className="service">
                <img
                  src={service.img}
                  alt={service.name}
                  className=""
                />
                <p className="text">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;