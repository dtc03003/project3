import './App.css';
import React, { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Loading from './Loading.gif';

const unityContext = new UnityContext({
  loaderUrl: "Build/WebGL.loader.js",
  dataUrl: "Build/WebGL.data",
  frameworkUrl: "Build/WebGL.framework.js",
  codeUrl: "Build/WebGL.wasm",
})

export default function App() {
  const [LoadingStyle, setLoadingStyle] = useState({ display: 'block' });
  const [UnityStyle, setUnityStyle] = useState({ display: 'none' })

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoadingStyle({ display: 'none' })
      setUnityStyle({ display: 'block' })
    }, 50000);
    return () => { clearTimeout(timer) }
  }, []);

  return (
    <div>
      <div style={LoadingStyle}><LoadingComponent/></div>
      <div style={UnityStyle}> <UnityComponent/></div>
    </div>
  );
};

function UnityComponent() {
  return (
    <div id="asdf">
      <Unity
        style={{
          width: '90vw',
          height: '95vh',
        }}
        unityContext={unityContext} />
    </div>
  );
};

function LoadingComponent() {
  return (
    <div id="asdf">
      <img src={Loading}></img>
    </div>
  );
};