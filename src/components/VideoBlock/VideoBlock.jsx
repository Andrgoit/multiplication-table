import ReactPlayer from "react-player";
import { homePageVideos } from "@/data";
import playIcon from "@/assets/img/playButton.png";

import styles from "./VideoBlock.module.css";

export default function VideoBlock() {
  const elements = homePageVideos.map((video) => (
    <li key={video} className={styles.item}>
      <ReactPlayer
        light
        src={video}
        width="100%"
        height="100%"
        playIcon={<img src={playIcon} width={60} alt="play icon" />}
        playing
        controls
      />
    </li>
  ));

  return <ul className={styles.list}>{elements}</ul>;
}
