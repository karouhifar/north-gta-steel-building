"use client";

import { MapContainer, GeoJSON, useMap } from "react-leaflet";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ontario from "@/data/ontario.json";
import { cities } from "@/data/cities";

/** Fits the map to Ontario after the container has its real size,
 *  and re-fits whenever the container resizes. */
function FitToOntario() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.geoJSON(ontario as any).getBounds();

    const fit = () => {
      map.invalidateSize();
      map.fitBounds(bounds, { padding: [20, 0], animate: false });
    };

    // initial fit (next frame so the parent has laid out)
    const raf = requestAnimationFrame(fit);

    // re-fit on container resize
    const ro = new ResizeObserver(fit);
    ro.observe(map.getContainer());

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [map]);

  return null;
}

function AnimatedCities() {
  const map = useMap();
  // force re-render on pan/zoom/resize so the dots stay glued to coords
  const [, setTick] = useState(0);
  useEffect(() => {
    const update = () => setTick((n) => n + 1);
    map.on("move zoom resize viewreset", update);
    return () => {
      map.off("move zoom resize viewreset", update);
    };
  }, [map]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 500,
      }}
    >
      {cities.map((city, i) => {
        const point = map.latLngToContainerPoint(city.coords);
        const highlighted = city.name === "Toronto (GTA)";
        const dot = highlighted ? 12 : 8;
        const baseDelay = 0.4 + i * 0.08;

        return (
          <div
            key={city.name}
            style={{
              position: "absolute",
              left: point.x - dot / 2,
              top: point.y - dot / 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: baseDelay,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              style={{
                display: "flex",
                alignItems: "center",
                transformOrigin: `${dot / 2}px center`,
              }}
            >
              {highlighted && (
                <motion.div
                  animate={{ scale: [1, 1.35, 1], opacity: [0.9, 0.3, 0.9] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: baseDelay + 0.4,
                  }}
                  style={{
                    position: "absolute",
                    width: 30,
                    height: 30,
                    border: "2px solid var(--foreground)",
                    borderRadius: "50%",
                    left: -15 + dot / 2,
                    top: -15 + dot / 2,
                    boxShadow:
                      "0 0 0 1px color-mix(in srgb, var(--foreground) 35%, transparent)",
                  }}
                />
              )}
              <div
                style={{
                  width: dot,
                  height: dot,
                  background: "var(--foreground)",
                  borderRadius: "50%",
                  boxShadow:
                    "0 1px 4px color-mix(in srgb, var(--background) 65%, transparent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  marginLeft: 10,
                  color: "var(--foreground)",
                  font: `${highlighted ? 700 : 600} ${
                    highlighted ? 16 : 14
                  }px/1 -apple-system, system-ui, 'Segoe UI', sans-serif`,
                  whiteSpace: "nowrap",
                  textShadow:
                    "0 1px 3px var(--background), 0 0 8px var(--background)",
                }}
              >
                {city.name}
              </span>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default function Map() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        background:
          "linear-gradient(135deg, var(--background) 0%, var(--card) 60%, color-mix(in srgb, var(--background) 92%, var(--primary)) 100%)",
        overflow: "hidden",
      }}
    >
      {/* dotted pattern on the right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(239,68,68,0.35) 1px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          maskImage:
            "linear-gradient(to right, transparent 55%, #000 80%, #000 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 55%, #000 80%, #000 95%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <MapContainer
        center={[50, -85]}
        zoom={5}
        style={{
          height: "100%",
          width: "100%",
          background: "var(--background)",
          filter: "drop-shadow(0 12px 20px rgba(220,38,38,0.25))",
        }}
        zoomSnap={0.5}
        zoomDelta={0.5}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        zoomControl={false}
        attributionControl={false}
      >
        <GeoJSON
          data={ontario as any}
          style={{
            color: "var(--foreground)",
            weight: 1.5,
            fillColor: "#e51e25",
            fillOpacity: 1,
            lineJoin: "round",
          }}
        />
        <FitToOntario />
        <AnimatedCities />
      </MapContainer>
    </motion.div>
  );
}
