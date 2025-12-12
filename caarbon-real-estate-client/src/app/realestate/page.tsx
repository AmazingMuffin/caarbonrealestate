// components/PropertyList.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";

interface PropertyNFT {
  id: number;
  name: string;
  image: string;
  partsDisponibles: number;
  rendement: number;
}

const properties: PropertyNFT[] = [
  { id: 1, name: "Maison A", image: "/images/house1.jpg", partsDisponibles: 500, rendement: 8 },
  { id: 2, name: "Appartement B", image: "/images/house2.jpg", partsDisponibles: 200, rendement: 6 },
  { id: 3, name: "Villa C", image: "/images/house3.jpg", partsDisponibles: 300, rendement: 7 },
  { id: 4, name: "Loft D", image: "/images/house4.jpg", partsDisponibles: 150, rendement: 5 },
  { id: 5, name: "Chalet E", image: "/images/house5.jpg", partsDisponibles: 400, rendement: 9 },
  { id: 6, name: "Studio F", image: "/images/house6.jpg", partsDisponibles: 250, rendement: 4 },
  { id: 7, name: "Maison G", image: "/images/house7.jpg", partsDisponibles: 600, rendement: 10 },
  { id: 8, name: "Appartement H", image: "/images/house8.jpg", partsDisponibles: 350, rendement: 7 },
  { id: 9, name: "Villa I", image: "/images/house9.jpg", partsDisponibles: 450, rendement: 6 },
  { id: 10, name: "Loft J", image: "/images/house10.jpg", partsDisponibles: 300, rendement: 5 },
  { id: 11, name: "Maison K", image: "/images/house11.jpg", partsDisponibles: 500, rendement: 8 },
  { id: 12, name: "Studio L", image: "/images/house12.jpg", partsDisponibles: 200, rendement: 4 },
  { id: 13, name: "Appartement M", image: "/images/house13.jpg", partsDisponibles: 350, rendement: 7 },
  { id: 14, name: "Villa N", image: "/images/house14.jpg", partsDisponibles: 400, rendement: 9 },
  { id: 15, name: "Chalet O", image: "/images/house15.jpg", partsDisponibles: 300, rendement: 6 },
];

export default function PropertyList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const currentProperties = properties.slice(start, start + itemsPerPage);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Investissements Immobiliers</h1>
      <div className="grid gap-6">
        {currentProperties.map((property) => (
          <Card key={property.id} className="bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition">
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <img
                src={property.image}
                alt={property.name}
                className="w-full md:w-48 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {property.name}
                </CardTitle>
                <p className="text-slate-700 dark:text-slate-300">
                  Parts disponibles: {property.partsDisponibles}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  Rendement prévu: {property.rendement}%
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex gap-3 mt-4">
              <Button variant="outline" className="flex-1">Détails</Button>
              <Button variant="default" className="flex-1">Investir</Button>
              <Button variant="destructive" className="flex-1">Vendre</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          total={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
