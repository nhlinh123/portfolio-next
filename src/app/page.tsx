"use client";

import dynamic from "next/dynamic";

// Loading component
function LoadingScreen() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #12121a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6366f1',
      fontSize: '1.5rem',
      fontFamily: 'monospace'
    }}>
      Loading experience...
    </div>
  );
}

// Dynamic import to avoid SSR issues with Three.js
const FullPageScene = dynamic(
  () => import("@/components/three/FullPageScene").then((mod) => ({ default: mod.FullPageScene })),
  {
    ssr: false,
    loading: LoadingScreen
  }
);

export default function Home() {
  return <FullPageScene />;
}
