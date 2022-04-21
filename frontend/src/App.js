import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/WebGL.loader.js",
  dataUrl: "Build/WebGL.data",
  frameworkUrl: "Build/WebGL.framework.js",
  codeUrl: "Build/WebGL.wasm",
})

function App() {
  return (
    <div >
      <Unity style={{
        width: '1600px',
        justifySelf: 'center',
        alignSelf: 'center'
      }}
        unityContext={unityContext} />
    </div>
  );
}

export default App;
