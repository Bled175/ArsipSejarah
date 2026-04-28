import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { feature } from "topojson-client";
import { geoCentroid, geoBounds } from "d3-geo";
import { Info } from "lucide-react";

// URL for Indonesia provinces TopoJSON from Highcharts (stable)
const INDO_TOPO_URL = "https://code.highcharts.com/mapdata/countries/id/id-all.topo.json";

interface Props {
  onProvinceClick?: (name: string) => void;
  activeProvince: string | null;
  minimalMode?: boolean;
}

export default function IndonesiaMap({ onProvinceClick = () => {}, activeProvince, minimalMode = false }: Props) {
  const [geographies, setGeographies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [mapCenter, setMapCenter] = useState<[number, number]>([118, -2]);
  const [mapScale, setMapScale] = useState(1200);

  useEffect(() => {
    if (minimalMode && activeProvince && geographies.length > 0) {
      const activeGeo = geographies.find(geo => geo.properties.name === activeProvince);
      if (activeGeo) {
        const centroid = geoCentroid(activeGeo);
        setMapCenter(centroid as [number, number]);
        
        const bounds = geoBounds(activeGeo);
        const dx = bounds[1][0] - bounds[0][0];
        const dy = bounds[1][1] - bounds[0][1];
        
        // Calculate appropriate scale. The smaller the bounds, the larger the scale.
        // Cap the max scale so tiny provinces aren't absurdly large.
        const maxDim = Math.max(dx, dy);
        const newScale = 45000 / (maxDim || 1);
        setMapScale(Math.min(Math.max(newScale, 1500), 12000));
      }
    } else {
      setMapCenter([118, -2]);
      setMapScale(1200);
    }
  }, [activeProvince, geographies, minimalMode]);

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
    <div 
      className={`w-full h-full relative flex items-center justify-center ${minimalMode ? 'pointer-events-none' : 'cursor-grab active:cursor-grabbing'}`}
      onMouseMove={(e) => {
        if (!minimalMode) {
          setTooltipPos({ x: e.clientX, y: e.clientY });
        }
      }}
    >
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

      {!minimalMode && tooltipContent && (
        <div 
          className="fixed z-[100] bg-stone-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-lg pointer-events-none shadow-2xl"
          style={{ 
             left: tooltipPos.x + 15, 
             top: tooltipPos.y + 15
          }}
        >
          {tooltipContent}
        </div>
      )}

      <ComposableMap
        projectionConfig={{
          scale: mapScale,
          center: mapCenter,
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
                  onMouseEnter={() => {
                    if (!minimalMode) setTooltipContent(provinceName);
                  }}
                  onMouseLeave={() => {
                    if (!minimalMode) setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: isActive ? (minimalMode ? "#c2410c" : "#8B4513") : (minimalMode ? "#e7e5e4" : "#D6CEC3"),
                      outline: "none",
                      stroke: minimalMode && !isActive ? "none" : "#A89F91",
                      strokeWidth: minimalMode && !isActive ? 0 : 0.5,
                      transition: "all 0.3s ease",
                    },
                    hover: {
                      fill: minimalMode ? (isActive ? "#c2410c" : "#e7e5e4") : "#c2410c",
                      outline: "none",
                      stroke: minimalMode ? "none" : "#FFFFFF",
                      strokeWidth: minimalMode ? 0 : 1,
                      cursor: minimalMode ? "default" : "pointer",
                    },
                    pressed: {
                      fill: minimalMode ? (isActive ? "#c2410c" : "#e7e5e4") : "#1c1917",
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
