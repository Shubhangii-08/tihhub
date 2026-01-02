import { Html, useProgress } from '@react-three/drei';

export function CanvasLoader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center p-4 bg-white/80 rounded-lg backdrop-blur-sm shadow-md">
                <div className="w-10 h-10 border-4 border-blue-200 border-t-[#021954] rounded-full animate-spin"></div>
                <p className="mt-2 text-sm font-semibold text-[#021954]">{progress.toFixed(0)}%</p>
            </div>
        </Html>
    );
}
