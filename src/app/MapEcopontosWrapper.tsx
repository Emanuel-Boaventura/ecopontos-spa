"use client";
import dynamic from "next/dynamic";

const MapEcopontos = dynamic(() => import("./MapEcopontos"), { ssr: false });

export default function MapEcopontosWrapper() {
  return <MapEcopontos />;
}
