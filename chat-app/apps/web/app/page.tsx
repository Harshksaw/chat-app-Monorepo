"use client"
import Image, { type ImageProps } from "next/image";

import styles from "./page.module.css";
import { TextInput } from '../../../packages/ui/src/textInput';
import { Button } from '@repo/ui/button';

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Welcome to Chat App</h1>
    
    <div className={styles.joinForm}>
  <TextInput size={small} placeholder="Enter your name" />
      <Button
      onClick={() => console.log("Join Room")}
      className={styles.joinButton} appName="web">
        Join Room
      </Button>
    </div>
  </div>
  );
}
