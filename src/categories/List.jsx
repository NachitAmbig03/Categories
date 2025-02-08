
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
      { name: "Salons", img: "https://plus.unsplash.com/premium_photo-1669675936121-6d3d42244ab5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Fsb258ZW58MHx8MHx8fDA%3D"},
    ],
  },
  {
    title: "Repairs & Services",
    services: [
      { name: "AC Service", img: "https://imgs.search.brave.com/iJgIkdG0-jwjKndaW15WHmbIHV7oXt-TNkUDphsiolw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS9tZC9kbXRt/cGwvMTFlZjVjMDMt/ZjAyMy00YWRkLThl/ZjgtMDllZThiNjI4/ODFhL2RtczNyZXAv/bXVsdGkvb3B0L2Vs/ZWN0cmljaWFuX2Zp/eGluZ19oZWF0aW5n/LTE5MjB3LmpwZw" },
      { name: "Car Service", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uPGSqqDJwrIqDqsrprqv1tDr3aKI9JEiRw&s" },
      { name: "Bike Service", img: "https://imgs.search.brave.com/IN7CojTxOFxZ-_Xq1c2QWtSEwiOV-NF0IEjdk4djqX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTI1/Mzg1OTMwL3Bob3Rv/L2V4cGVyaWVuY2Ut/d29tYW4tYmlrZS1i/dWlsZGVyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DdFQ0/VzZ3a3lQTERLLWJ1/MlNQWW50a0FhQmhZ/R3laNTZOZHRDMEQ0/dW9vPQ" },
    ],
  },
  {
    title: "Daily Needs",
    services: [
      { name: "Movies", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdvGWVirUNT9qGKvciVz_yuaJ9lX1dyIb7g&s" },
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