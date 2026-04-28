import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { feature } from "topojson-client";
import { Info } from "lucide-react";

// URL for Indonesia provinces TopoJSON from Highcharts (stable)
const INDO_TOPO_URL = "https://code.highcharts.com/mapdata/countries/id/id-all.topo.json";

interface Props {
  onProvinceClick: (name: string) => void;
  activeProvince: string | null;
}

export default function IndonesiaMap({ onProvinceClick, activeProvince }: Props) {
  const [geographies, setGeographies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(INDO_TOPO_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Gagal mengunduh data peta");
        return response.json();
      })
      .then((data) => {
        // Highcharts TopoJSON uses 'default' as the object key
        const objectKey = data.objects.default ? 'default' : Object.keys(data.objects)[0];
        if (objectKey && data.objects[objectKey]) {
          const provinces = feature(data, data.objects[objectKey]) as any;
          setGeographies(provinces.features);
        } else {
          throw new Error("Format peta tidak dikenali");
        }
      })
      .catch((err) => {
        console.error("Gagal memuat peta:", err);
        setError("Arsip peta gagal dimuat. Silakan periksa koneksi internet Anda.");
      });
  }, []);

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing flex items-center justify-center">
      {!geographies.length && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 bg-[#F1EDE9]/50 backdrop-blur-sm">
           <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
           <p className="text-[10px] font-sans uppercase tracking-widest text-accent font-bold">Mempersiapkan Peta Arsip...</p>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 p-8 text-center">
           <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-2">
             <Info size={24} />
           </div>
           <p className="text-xs font-sans uppercase tracking-widest text-red-500 font-bold">{error}</p>
           <button 
             onClick={() => window.location.reload()}
             className="mt-2 px-4 py-2 bg-stone-900 text-white text-[10px] font-bold rounded uppercase tracking-widest"
           >
             Coba Lagi
           </button>
        </div>
      )}
      <ComposableMap
        projectionConfig={{
          scale: 1200,
          center: [118, -2],
        }}
        width={1000}
        height={500}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geographies}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const provinceName = geo.properties.name;
              if (!provinceName) return null; // Skip non-province geometries
              
              const isActive = activeProvince === provinceName;
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => onProvinceClick(provinceName)}
                  style={{
                    default: {
                      fill: isActive ? "#8B4513" : "#D6CEC3",
                      outline: "none",
                      stroke: "#A89F91",
                      strokeWidth: 0.5,
                      transition: "all 0.3s ease",
                    },
                    hover: {
                      fill: "#c2410c", // accent orange
                      outline: "none",
                      stroke: "#FFFFFF",
                      strokeWidth: 1,
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: "#1c1917", // stone-900
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
