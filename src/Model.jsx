import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Model(props) {
  const deamon = useLoader(GLTFLoader, "/static/zodd_the_inmortal.glb");  
  return <primitive object={deamon.scene} scale={2.2} position={[0, -1.7, 0]} />;
}
