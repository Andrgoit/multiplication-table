import { motion } from "motion/react";
import ReactPlayer from "react-player";
import { homePageVideos } from "@/data";
import playIcon from "@/assets/img/playButton.png";

import styles from "./VideoBlock.module.css";

export default function VideoBlock() {
  const elements = homePageVideos.map((video) => (
    <motion.li
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      key={video}
      className={styles.item}
    >
      <ReactPlayer
        light
        src={video}
        width="100%"
        height="100%"
        playIcon={<img src={playIcon} width={60} alt="play icon" />}
        playing
        controls
      />
    </motion.li>
  ));

  return <ul className={styles.list}>{elements}</ul>;
}
