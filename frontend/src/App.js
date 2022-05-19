import './App.css';
import React, { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

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
    }, 20000);
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
    <div>
      <Unity
        style={{
          width: '1600px',
          height: '800px',
          justifySelf: 'center',
          alignSelf: 'center'
        }}
        unityContext={unityContext} />
    </div>
  );
};

function LoadingComponent() {
  return (
    <div>
      <img src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1Bie/image/8qbDlFf1RDkPimUoyooxeNSqIic.jpg"></img>
    </div>
  );
};