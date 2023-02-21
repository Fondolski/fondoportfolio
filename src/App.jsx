import { useState, Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import './App.css';
import Three from './components/three';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='parent-body-container'>
      <Canvas id='three-canvas-container'>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
