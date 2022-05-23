import './App.css';
import React, { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from "react-bootstrap";
import Loading from './Loading.gif';

const unityContext = new UnityContext({
  loaderUrl: "Build/WebGL.loader.js",
  dataUrl: "Build/WebGL.data",
  frameworkUrl: "Build/WebGL.framework.js",
  codeUrl: "Build/WebGL.wasm",
})

export default function App() {
  const [progression, setProgression] = useState(0);
  const [LoadingStyle, setLoadingStyle] = useState({ display: 'block' });
  const [UnityStyle, setUnityStyle] = useState({ display: 'none' });

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(Math.floor(progression * 10000) / 100);
      if (progression === 1) {
        setLoadingStyle({ display: 'none' })
        setUnityStyle({ display: 'block' })
      }
    });
  }, [progression]);

  function handleOnClickFullscreen() {
    unityContext.setFullscreen(true);
  }

  return (
    <div>
      <div style={LoadingStyle}>
        <LoadingComponent/>
        <ProgressBar id="progressbar" striped variant="warning" animated now={progression} label={`${progression}%`}/>
        {/* <ProgressBar id="progressbar" animated now={progression} label={`${progression}%`}/> */}
      </div>
      <div style={UnityStyle}>
        <UnityComponent />
        <button onClick={handleOnClickFullscreen}>Fullscreen</button>
      </div>
    </div>
  );
};

function UnityComponent() {
  return (
    <div id="asdf">
      <Unity
        style={{
          width: '80vw',
          height: '45vw',
          maxWidth: '142.2vh',
          maxHeight: '80vh'
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